# Instruções

Tutorial adaptado de [Getting Started Using Java RMI](https://docs.oracle.com/javase/8/docs/technotes/guides/rmi/hello/hello-world.html).

## Executando o servidor
Execute o comando a seguir a do diretório raiz do projeto:
```
java -classpath ./target/classes -Djava.rmi.server.codebase=file:target/classes/ server.hello.HelloServer
```
Obs.: se utilizarmos o método `LocateRegistry.getRegistry()`, previsamos iniciar o utilitário `rmiregistry`. Execute-o a partir da pasta `target/classes`. Este utilitário está localizado na pasta `$JAVA_HOME/bin`.

## Executando o client
Execute o comando a seguir a do diretório raiz do projeto:
```
java  -classpath ./target/classes client.hello.Client
```
