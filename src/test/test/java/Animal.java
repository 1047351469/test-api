// 父类 Animal（所有动物的基类）
public abstract class Animal {
    protected String name;
    protected int age;

    // 构造方法
    public Animal(String name, int age) {
        this.name = name;
        this.age = age;
    }

    // 动物的叫声（抽象方法，让子类实现）
    public abstract void makeSound() ;

    // 打印动物信息
    @Override
    public String toString() {
        return "Animal{name='" + name + "', age=" + age + "}";
    }
}
// 缉毒接口
 interface DrugDetection {
    void detectDrugs(); // 缉毒功能
}
 interface CatchMouse {
    void catchMouse(); // 抓老鼠功能
}
class Dog extends Animal implements DrugDetection {
    public Dog(String name, int age) {
        super(name, age);
    }

    // 实现动物叫声
    @Override
    public void makeSound() {
        System.out.println(name + " 汪汪叫！");
    }

    // 实现缉毒功能
    @Override
    public void detectDrugs() {
        System.out.println(name + " 正在执行缉毒任务...");
    }
}
class Cat extends Animal implements CatchMouse {
    public Cat(String name, int age) {
        super(name, age);
    }

    // 实现动物叫声
    @Override
    public void makeSound() {
        System.out.println(name + " 喵喵叫！");
    }

    // 实现抓老鼠功能
    @Override
    public void catchMouse() {
        System.out.println(name + " 抓到了一只老鼠！");
    }
}
