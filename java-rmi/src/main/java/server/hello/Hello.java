package server.hello;

import common.hello.IHello;

public class Hello implements IHello {

  @Override
  public String sayHello() {
    System.out.println("Hello.sayHello() called");
    return "Hello World!";
  }

}
