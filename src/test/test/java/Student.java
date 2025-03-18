public class Student implements Comparable<Student>{
    private static int count=0;
    private int id;         // 学号
    private String name;    // 姓名
    private String gender;  // 性别
    private int age;        // 年龄
   static {
       System.out.println("");
   }
    {
        System.out.println("");
    }
    // 1️⃣ 无参构造方法（Java Bean 规范要求）
    public Student() {
        count++;
    }
    public static int getCount(){
        return count;
    }

    // 2️⃣ 带参构造方法（可选，方便初始化对象）
    public Student(int id, String name, String gender, int age) {
        count++;
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.age = age;
    }

    // 3️⃣ Getter 和 Setter 方法（符合 Java Bean 规范）
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    // 4️⃣ 重写 toString() 方法（方便打印对象）
    @Override
    public String toString() {
        return "Student{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", gender='" + gender + '\'' +
                ", age=" + age +
                '}';
    }

    @Override
    public int compareTo(Student o) {
        return this.getAge()-o.getAge();
    }
}
