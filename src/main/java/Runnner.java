import java.io.*;

public class Runnner {
    public static void main(String[] args) {
        try {
            Process process = Runtime.getRuntime().exec("mkdir sd");
            process.waitFor();
        } catch (Exception s) {

        }
    }
}