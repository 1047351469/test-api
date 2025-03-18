import cn.hutool.core.codec.Base32;
import lombok.ToString;


import javax.lang.model.element.VariableElement;
import java.io.IOException;
import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.*;
import java.time.format.DateTimeFormatter;
import java.util.*;

enum OrderStatus {
    PENDING,    // 待处理
    SHIPPED,    // 已发货
    DELIVERED,  // 已送达
    CANCELLED;  // 已取消
}
enum HttpStatus {
    OK(200, "Success"),
    NOT_FOUND(404, "Not Found"),
    INTERNAL_SERVER_ERROR(500, "Server Error");

    private final int code;
    private final String message;

    HttpStatus(int code, String message) {
        this.code = code;
        this.message = message;
    }

    public int getCode() {
        return code;
    }

    public String getMessage() {
        return message;
    }

    @Override
    public String toString() {
        return "HttpStatus{" +
                "code=" + code +
                ", message='" + message + '\'' +
                '}';
    }
}
public class JavaBasic {
    public static void main(String[] args) throws IOException {
        Set<String> set = new LinkedHashSet<>(); // 有序，不重复，无索引。
        set.add("java1");
        set.add("java1");
        set.add("html");
        set.add("html");
        set.add("css");
        set.add("黑马");
        System.out.println(set);
        for (String s : set) {
            System.out.printf(s);
        }

    }

    private static boolean equals(int[] arr1, int[] arr2) {
        if(arr1==null || arr2==null){
            return false;
        }
        if(arr1.length!=arr1.length){
            return false;
        }
        for (int i = 0; i < arr1.length; i++) {
            if(arr1[i]!=arr2[i]){
                return false;
            }
        }
        return true;
    }


    /**
     * 求和
     * @param a 参数1
     * @param b 参数2
     * @return 返回值
     */
    public static int add(int a,int b){
        return a+b;
    }
    public static double add(double a,double b){
        return a+b;
    }

}
