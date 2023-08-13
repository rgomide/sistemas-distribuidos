package server.hello;

import common.hello.IHello;

public class Hello implements IHello {

  @Override
  public String sayHello() {
    return "Hello World!";
  }

}
