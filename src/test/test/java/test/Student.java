package test;

import java.util.Objects;

public class Student implements Comparable<Student>{
    private String name;
    private char sex;
    private String hobby;
    private int age;

    public Student() {
    }

    public Student(String name, char sex, String hobby) {
        this.name = name;
        this.sex = sex;
        this.hobby = hobby;
    }
    public Student(String name, char sex, String hobby,int age) {
        this(name,sex,hobby);
        this.age=age;

    }

    // 只要两个对象内容一样结果就是true
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Student student = (Student) o;
        return sex == student.sex && Objects.equals(name, student.name) && Objects.equals(hobby, student.hobby);
    }

    // 只要两个对象的内容一样，返回的哈希值就是一样的
    @Override
    public int hashCode() {
        return Objects.hash(name, sex, hobby);
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public char getSex() {
        return sex;
    }

    public void setSex(char sex) {
        this.sex = sex;
    }

    public String getHobby() {
        return hobby;
    }

    public void setHobby(String hobby) {
        this.hobby = hobby;
    }
    public void setAge(int age){
        this.age=age;
    }
    public int getAge(){
        return this.age;
    }

    @Override
    public String toString() {
        return "Student{" +
                "name='" + name + '\'' +
                ", sex=" + sex +
                ", hobby='" + hobby + '\'' +
                '}' + "\n"+age;
    }

    @Override
    public int compareTo(Student o) {
        return this.age-o.age;
    }
}
