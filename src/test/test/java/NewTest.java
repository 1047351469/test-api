import org.junit.jupiter.api.*;
import org.junit.jupiter.api.extension.TestTemplateInvocationContext;
import org.junit.jupiter.api.extension.TestTemplateInvocationContextProvider;

import java.util.stream.Stream;

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class NewTest {
    private int counter = 0;

    @BeforeAll
    void setup() { // 不需要 static
        System.out.println("BeforeAll - 只运行一次");
    }

    @Test
    void testA() {
        counter++;
        System.out.println("Test A - counter = " + counter);
        Assertions.assertEquals(1, counter);
    }

    @Test
    void testB() {
        counter++;
        System.out.println("Test B - counter = " + counter);
        Assertions.assertEquals(2, counter);
    }
}

