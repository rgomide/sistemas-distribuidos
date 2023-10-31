package gomide;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.concurrent.PriorityBlockingQueue;

public class MainPriorityQueue {
  public static void main(String[] args) throws Exception {
    System.out.println("INÍCIO");
    long tempoInicio = System.currentTimeMillis();

    PriorityBlockingQueue<Integer> queue = new PriorityBlockingQueue<>();

    Random random = new Random();
    for (int i = 0; i < 50; i++) {
      queue.put(random.nextInt(2000));
    }

    List<Thread> threads = new ArrayList<Thread>();

    // Inicia a execução das threads
    for (int i = 0; i < 8; i++) {
      Thread thread = new Thread(new RunnableThreadQueue(queue));
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
