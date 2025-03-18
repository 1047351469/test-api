package test;

import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class TestStudent {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("Alice", "Bob", "Charlie");

        List<String> uppercasedNames = names.stream()
                .peek(name -> System.out.println("处理前: " + name)) // 调试
                .map(String::toUpperCase) // 转换成大写
                .peek(name -> System.out.println("处理后: " + name)) // 调试
                .collect(Collectors.toList()); // 终结操作

        System.out.println(uppercasedNames); // [ALICE, BOB, CHARLIE]

    }
    public static  void add(int...arr){
        int sum=0;
        for (int i : arr) {
            sum+=i;
        }
        System.out.println(sum);
    }
}
