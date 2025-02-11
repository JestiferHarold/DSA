import org.junit.jupiter.api.Assetions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class Test{
    private Main calculator;

    @BeforeAll

    void setup(){
        calculator = new Main();
    }

    @test

    void testAdd(){
        int results = calculator.add(1,3);
        Assertions.asserEquals(4, results);
    }
}