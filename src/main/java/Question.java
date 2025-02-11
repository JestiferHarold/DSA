import java.io.File;
import java.io.FileWriter;
import java.util.Scanner;
import java.io.IOException;
import java.io.FileNotFoundException;

public class Question {

    static Scanner prompt = new Scanner(System.in);

    static {
        System.out.println("Started");
    }

    public static void main(String[] args) {
        System.out.println("Enter the name of the file");
        String fileName = prompt.nextLine();

        File file = new File(fileName);
        try {
            if (file.createNewFile()) {
                System.out.println("File created");
            }
        } catch (IOException exception) {
            System.out.println(exception.getMessage());
        }

        System.out.print("Enter the questions");
        String question = prompt.nextLine();
        try {
            FileWriter file2 = new FileWriter(fileName);
            file2.write(question);
            file2.close();
        } catch (IOException io) {
            System.out.println(io.getMessage());
        }

        try {
            Scanner reader = new Scanner(file);
            while (reader.hasNextLine()) {
                String nsd = (reader.nextLine());
                System.out.println(nsd);
            }
        } catch (FileNotFoundException e) {
            System.out.println(e.getMessage());
        }
    }
}
