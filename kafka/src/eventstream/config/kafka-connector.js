const { Kafka } = require('kafkajs')

/**
 * Configuração do Cliente Kafka
 * 
 * Este módulo configura a conexão com o Apache Kafka usando a biblioteca KafkaJS.
 * É responsável por estabelecer a comunicação entre a aplicação Node.js e o broker Kafka.
 * 
 * Configurações importantes:
 * - clientId: Identificador único da aplicação no cluster Kafka
 * - brokers: Array de endereços dos brokers Kafka disponíveis
 * 
 * @constant {Kafka} kafka - Instância configurada do cliente Kafka
 */
const kafka = new Kafka({
  // Identificador único da aplicação
  // Usado para logging e debugging no Kafka
  clientId: 'kafka-playground-app',
  
  // Lista de brokers Kafka disponíveis
  // Em produção, você teria múltiplos brokers para alta disponibilidade
  brokers: ['localhost:9092'],
  
  // Configurações adicionais que podem ser úteis:
  // retry: {
  //   initialRetryTime: 100,
  //   retries: 8
  // },
  // requestTimeout: 30000,
  // connectionTimeout: 3000
})

module.exports = kafka