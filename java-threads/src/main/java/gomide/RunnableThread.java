package gomide;

public class RunnableThread implements Runnable {

  private int id;

  public RunnableThread(int id) {
    this.id = id;
  }

  @Override
  public void run() {
    try {
      HeavyProcess.justDoIt(this.id);
    } catch (Exception e) {
      e.printStackTrace();
    }
  }

}
