package gomide;

import java.util.Random;

public class HeavyProcess {

  public static void justDoIt(int id) throws InterruptedException {
    System.out.println(String.format("Processo iniciado para id: %d", id));

    Random random = new Random();
    int milisegundos = random.nextInt(3000);

    Thread.sleep(milisegundos);

    System.out.println(String.format("Processo finalizado para id: %d em %dms", id, milisegundos));
  }

}
