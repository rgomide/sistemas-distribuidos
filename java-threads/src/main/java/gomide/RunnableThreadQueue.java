package gomide;

import java.util.concurrent.PriorityBlockingQueue;

public class RunnableThreadQueue implements Runnable {

  private PriorityBlockingQueue<Integer> queue;

  public RunnableThreadQueue(PriorityBlockingQueue<Integer> queue) {
    this.queue = queue;
  }

  @Override
  public void run() {
    try {
      while (!queue.isEmpty()) {
        Integer id = queue.poll();
        HeavyProcess.justDoIt(id, true);
      }
    } catch (Exception e) {
      e.printStackTrace();
    }
  }
}
