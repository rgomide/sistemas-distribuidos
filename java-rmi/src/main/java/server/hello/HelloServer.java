package server.hello;

import java.rmi.registry.LocateRegistry;
import java.rmi.registry.Registry;
import java.rmi.server.UnicastRemoteObject;

import common.hello.IHello;

public class HelloServer {
  public static void main(String[] args) {
    try {
      Hello obj = new Hello();
      IHello stub = (IHello) UnicastRemoteObject.exportObject(obj, 0);
      Registry registry = LocateRegistry.createRegistry(1099);

      // SE ESTIVER EXECUTANDO O rmiregistry
      // Registry registry = LocateRegistry.getRegistry();

      registry.rebind("Hello", stub);

      System.out.println("Server is ready!");
    } catch (Exception e) {
      e.printStackTrace();
    }
  }
}