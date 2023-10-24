package gomide;

import java.lang.Thread;
import java.util.ArrayList;
import java.util.List;

public class MainThread {

  public static void main(String[] args) throws Exception {
    System.out.println("INÍCIO");
    long tempoInicio = System.currentTimeMillis();

    List<Thread> threads = new ArrayList<Thread>();

    // Inicia a execução das threads
    for (int i = 0; i < 20; i++) {
      Thread thread = new Thread(new RunnableThread(i));
      threads.add(thread);

      thread.start();
    }

    // Aguarda o encerramento da thread
    for (Thread thread : threads) {
      thread.join();
    }

    long tempoFim = System.currentTimeMillis() - tempoInicio;

    System.out.println(String.format("FIM em %dms", tempoFim));
  }

}