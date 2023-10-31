package gomide;

import java.util.Random;
import java.util.concurrent.TimeUnit;

public class HeavyProcess {

  public static void justDoIt(int id) throws InterruptedException {
    justDoIt(id, false);
  }

  public static void justDoIt(int id, boolean silent) throws InterruptedException {
    System.out.println(String.format("Processo iniciado para id: %d", id));

    long tempoInicio = System.currentTimeMillis();

    Random random = new Random();
    int milisegundos = random.nextInt(3000);

    TimeUnit.MILLISECONDS.sleep(milisegundos);

    long tempoFim = System.currentTimeMillis() - tempoInicio;

    if (!silent) {
      System.out.println(String.format("Processo finalizado para id: %d em %dms",
          id, tempoFim));
    }
  }

}