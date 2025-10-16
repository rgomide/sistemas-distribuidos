# Objetivo da Atividade
Desenvolver um conjunto de microserviços para simular o processamento de um pedido em um e-commerce. Implementar o padrão Epic Saga (sao) para garantir a consistência da operação, incluindo o tratamento de falhas através de transações de compensação.

# Problema a ser Resolvido
Em um sistema de e-commerce, o processo de "fechar um pedido" envolve três etapas distintas, cada uma tratada por um microserviço diferente:

1. Criação do Pedido: O pedido é registrado no sistema com um status inicial.
2. Processamento do Pagamento: O pagamento do pedido é efetuado.
3. Atualização de Estoque: A quantidade do produto comprado é debitada do estoque.

Todas essas etapas devem ocorrer de forma **atômica** do ponto de vista do negócio. Se qualquer uma delas falhar, o sistema inteiro deve ser revertido para o estado anterior, como se a transação nunca tivesse ocorrido.

# Arquitetura Proposta - Epic Saga (sao)
A Epic Saga (sao) é um padrão de arquitetura que utiliza comunicação **síncrona**, consistência transacional **atômica** e a coordenação de transações é realizada por um serviço central chamado de **orquestrador**.

Assim, o orquestrador é responsável por chamar cada serviço participante na sequência correta e gerenciar qualquer falha que possa ocorrer.

# Microserviços a serem Desenvolvidos
Será necessário criar 4 aplicações simples em sua stack de preferência (por exemplo, 4 projetos com Express/Node.js, Flask/Python ou Spring Boot/Java):

## Serviço de Orquestração (servico-orquestrador)

- `Função`: Ponto de entrada da saga. Recebe a requisição para criar um novo pedido e coordena as chamadas síncronas para os outros serviços. É o único serviço que conhece todo o fluxo de negócio. Em caso de falha, é sua responsabilidade invocar as transações de compensação.

## Serviço de Pedidos (servico-pedidos)

- `Função`: Gerencia o ciclo de vida dos pedidos. Armazena os pedidos em memória (um simples dicionário ou lista).
- `Transação Local`: Cria um pedido com status `PENDENTE`.
- `Transação de Compensação`: Altera o status do pedido para `CANCELADO`.

## Serviço de Pagamentos (servico-pagamentos)

- `Função`: Simula o processamento de pagamentos. Armazena os pagamentos aprovados em memória.
- `Transação Local`: Aprova um pagamento. Para simular falhas, ele pode ser programado para recusar pagamentos de um produto específico (ex: `produtoId: 0`).
- `Transação de Compensação`: Realiza o estorno (reembolso) de um pagamento previamente aprovado.

## Serviço de Estoque (servico-estoque)

- `Função`: Gerencia a quantidade de produtos disponíveis. Armazena o inventário em memória (ex: um dicionário `{"produtoId": quantidade}`).
- `Transação Local`: Debita a quantidade de um produto do estoque. Pode falhar se não houver estoque suficiente.
- `Transação de Compensação`: Devolve a quantidade de um produto ao estoque (libera a reserva).

# Contratos e Endpoints das APIs