package gomide;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;

public class MainExecutorService {

  public static void main(String[] args) throws Exception {
    System.out.println("INÍCIO");
    long tempoInicio = System.currentTimeMillis();

    Runtime runtime = Runtime.getRuntime();

    ExecutorService executor = Executors.newFixedThreadPool(runtime.availableProcessors());

    // Inicia a execução das threads
    for (int i = 0; i < 20; i++) {
      Thread thread = new Thread(new RunnableThread(i));
      executor.execute(thread);
    }

    // Aguarda a execução de todas as threads
    executor.shutdown();
    boolean executou = executor.awaitTermination(1, TimeUnit.DAYS);

    long tempoFim = System.currentTimeMillis() - tempoInicio;

    if (executou) {
      System.out.println(String.format("FIM - SUCESSO em %dms", tempoFim));
    } else {
      executor.shutdownNow();
      System.out.println(String.format("FIM - TIMEOUT em %dms", tempoFim));
    }
  }

}