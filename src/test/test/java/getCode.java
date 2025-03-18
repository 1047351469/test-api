import com.baomidou.mybatisplus.annotation.DbType;
import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.generator.AutoGenerator;
import com.baomidou.mybatisplus.generator.config.DataSourceConfig;
import com.baomidou.mybatisplus.generator.config.GlobalConfig;
import com.baomidou.mybatisplus.generator.config.PackageConfig;
import com.baomidou.mybatisplus.generator.config.StrategyConfig;
import com.baomidou.mybatisplus.generator.config.rules.DateType;
import com.baomidou.mybatisplus.generator.config.rules.NamingStrategy;
import org.junit.jupiter.api.*;
import org.junit.jupiter.api.condition.EnabledOnJre;
import org.junit.jupiter.api.condition.EnabledOnOs;
import org.junit.jupiter.api.condition.JRE;
import org.junit.jupiter.api.condition.OS;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.jupiter.api.io.TempDir;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvFileSource;
import org.junit.jupiter.params.provider.MethodSource;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.junit.jupiter.api.*;

import java.io.*;
import java.time.Duration;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Stream;

import static org.junit.jupiter.api.Assertions.*;
import static org.junit.jupiter.api.DynamicTest.dynamicTest;
import static org.mockito.Mockito.*;

/**
 * @author 安逸i
 * @version 1.0
 */
@ExtendWith(MockitoExtension.class)
public class getCode {

    public void main1() {
// 1、创建代码生成器
        AutoGenerator mpg = new AutoGenerator();
// 2、全局配置
        GlobalConfig gc = new GlobalConfig();
        String projectPath = System.getProperty("user.dir");
        System.out.println(projectPath);
        gc.setOutputDir("E:\\code\\reggie" + "/src/main/java");
        gc.setAuthor("anyi");
        gc.setOpen(false); //生成后是否打开资源管理器
        gc.setFileOverride(false); //重新生成时文件是否覆盖
        /*
         * mp生成service层代码，默认接口名称第一个字母有 I
         * UcenterService
         * */
        gc.setServiceName("%sService"); //去掉Service接口的首字母I
        gc.setIdType(IdType.ID_WORKER); //主键策略
        gc.setDateType(DateType.ONLY_DATE);//定义生成的实体类中日期类型
        gc.setSwagger2(true);//开启Swagger2模式
        mpg.setGlobalConfig(gc);
// 3、数据源配置
        DataSourceConfig dsc = new DataSourceConfig();
        dsc.setUrl("jdbc:mysql://localhost:3306/reggie?serverTimezone=GMT%2B8");
        dsc.setDriverName("com.mysql.cj.jdbc.Driver");
        dsc.setUsername("root");
        dsc.setPassword("root");
        dsc.setDbType(DbType.MYSQL);
        mpg.setDataSource(dsc);
// 4、包配置
        PackageConfig pc = new PackageConfig();
        pc.setModuleName("reggie"); //模块名
        pc.setParent("com.anyi");
        pc.setController("controller");
        pc.setEntity("entity");
        pc.setService("service");
        pc.setMapper("mapper");
        mpg.setPackageInfo(pc);
// 5、策略配置
        StrategyConfig strategy = new StrategyConfig();
        strategy.setInclude("user");
        strategy.setNaming(NamingStrategy.underline_to_camel);//数据库表映射到实体的
        // 命名策略
        strategy.setTablePrefix(pc.getModuleName() + "_"); //生成实体时去掉表前缀
        strategy.setColumnNaming(NamingStrategy.underline_to_camel);//数据库表字段
        //映射到实体的命名策略
        strategy.setEntityLombokModel(true); // lombok 模型 @Accessors(chain =true) setter链式操作
        strategy.setRestControllerStyle(true); //restful api风格控制器
        strategy.setControllerMappingHyphenStyle(true); //url中驼峰转连字符
        mpg.setStrategy(strategy);
// 6、执行
        mpg.execute();
    }
    public enum Day {
        SUNDAY, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY;
    }
    public enum Color {
        RED("红色"), GREEN("绿色"), BLUE("蓝色");

        private final String chineseName;  // 枚举的属性

        // 构造方法
        Color(String chineseName) {
            this.chineseName = chineseName;
        }

        // 获取中文名的方法
        public String getChineseName() {
            return chineseName;
        }
    }



    @Test
    void testAddition() {
        int result = 2 + 3;
        assertEquals(5, result, "2 + 3 应该等于 5");
        assertTrue(true);
    }
    int sum(int a, int b) {
        return a + b;
    }

    static Stream<Object[]> provideSumData() {
        return Stream.of(
                new Object[]{1, 2, -1},
                new Object[]{5, 5, 10},
                new Object[]{-1, 1, 0},
                new Object[]{0, 0, 0},
                new Object[]{100, 200, 300}
        );
    }
    @ParameterizedTest
    @MethodSource("provideSumData")
    void testSum(int a, int b, int expected) {
        System.out.printf("%d+%d= %d",a,b,expected);
        assertEquals(expected, sum(a, b));
    }
    @EnabledOnOs(OS.WINDOWS)
    @EnabledOnJre(JRE.JAVA_17)
    @Test
    void testException() {
        Exception exception = assertThrows(
                ArithmeticException.class,
                () -> { int result = 1 / 0; }
        );
        exception.printStackTrace();
        assertEquals("/ by zero", exception.getMessage());
    }
    @Test
    void testMock() {
        // 创建 Mock 对象
        DataService mockService = mock(DataService.class);

        // 设定 Mock 行为
        when(mockService.getData("cai")).thenReturn(41);
        doThrow(new RuntimeException("参数错误")).when(mockService).getData("jie");
        // 调用 Mock 方法
        int result = mockService.getData("cai");
        verify(mockService,times(1)).getData("cai");

        RuntimeException exception = assertThrows(RuntimeException.class, () -> {
            mockService.getData("jie1");
        });
        // 验证结果
        assertEquals(41, result);
        assertEquals("参数错误", exception.getMessage());
    }

    @Test
    void testSpy() {
        // 创建 Spy 对象
        SpyExampleTest.Calculator spyCalculator = spy(new SpyExampleTest.Calculator());

        // 真实方法
        assertEquals(5, spyCalculator.add(2, 3));

        // Mock `multiply` 方法
        when(spyCalculator.multiply(2, 3)).thenReturn(100);

        // 调用被 Mock 的方法
        assertEquals(100, spyCalculator.multiply(2, 3));

        // 调用未被 Mock 的方法，仍然使用真实方法
        assertEquals(5, spyCalculator.add(2, 3));
        System.out.println(spyCalculator.multiply(2, 5));
    }
    @Disabled
    @DisplayName("测试手动mock")
    @Test
    void testUserServiceWithMock() {
        // 创建 Mock 依赖
        ServiceMockTest.DatabaseService mockDatabaseService = mock(ServiceMockTest.DatabaseService.class);

        // 设定 Mock 行为
        when(mockDatabaseService.fetchUser(1)).thenReturn("Alice");

        // 注入 Mock 依赖
        ServiceMockTest.UserService userService = new ServiceMockTest.UserService(mockDatabaseService);

        // 运行测试
        assertEquals("Alice", userService.getUser(1));

        // 验证是否调用了 `fetchUser`
        verify(mockDatabaseService).fetchUser(1);
    }

    // 创建 Mock 依赖
    @Mock
    ServiceMockTest.DatabaseService mockDatabaseService;

    // 自动将 Mock 依赖注入到 userService
    @InjectMocks
    ServiceMockTest.UserService userService;
    @Test
    public void testInjectMock(){
        // 设置 Mock 行为
        when(mockDatabaseService.fetchUser(1)).thenReturn("Alice");

        // 运行测试
        assertEquals("Alice", userService.getUser(1));

        // 验证方法调用
        verify(mockDatabaseService).fetchUser(1);
    }
    @Timeout(2)
    @Test
    void testTimeout() throws InterruptedException {

            Thread.sleep(1000); // 不会超时

    }
    @RepeatedTest(5)
    void testRepeatedly() {
        assertEquals(5, 2 + 3);
    }
    @Nested
    class InnerClassTest {
        private int counter = 0;
        @Tag("tag")
        @Test
        void testNested() {
            System.out.println("Nested test");
        }

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

    BufferedReader reader;
    @AfterEach
    void cleanup() throws IOException {
        if (reader != null) {
            reader.close(); // 手动关闭资源
        }
    }
    @BeforeEach
    void setup(@TempDir File tempDir) throws IOException {
        File tempFile = new File(tempDir, "test.txt");
        try (FileWriter writer = new FileWriter(tempFile)) {
            writer.write("Hello, JUnit 5!");
        }
        reader = new BufferedReader(new FileReader(tempFile));
    }

    @Test
    void testReadFile() throws IOException {
        String line = reader.readLine();
        Assertions.assertEquals("Hello, JUnit 4!", line);
    }

    @TestFactory
    List<DynamicTest> dynamicTestsFromList() {
        return Arrays.asList(
                dynamicTest("Test 1", () -> assertEquals(2, 1 + 1)),
                dynamicTest("Test 2", () -> assertEquals(4, 2 * 2))
        );
    }



}
interface DataService {
    int getData(String name);
}
class SpyExampleTest {
    static class Calculator {
        int add(int a, int b) {
            return a + b;
        }

        int multiply(int a, int b) {
            return a * b;
        }
    }
}

class ServiceMockTest {
    static class UserService {
        private final DatabaseService databaseService;

        public UserService(DatabaseService databaseService) {
            this.databaseService = databaseService;
        }

        String getUser(int userId) {
            return databaseService.fetchUser(userId);
        }
    }

    interface DatabaseService {
        String fetchUser(int userId);
    }
}