package gomide;

public class Main {

  public static void main(String[] args) throws Exception {
    System.out.println("INÍCIO");
    long tempoInicio = System.currentTimeMillis();

    for (int i = 0; i < 20; i++) {
      HeavyProcess.justDoIt(i);
    }

    long tempoFim = System.currentTimeMillis() - tempoInicio;

    System.out.println(String.format("FIM em %dms", tempoFim));
  }

}
