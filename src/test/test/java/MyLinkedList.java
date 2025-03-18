import java.util.ArrayList;
import java.util.LinkedList;
import java.util.StringJoiner;

/**
 * 单链表。
 */
public class MyLinkedList<E> {

    private int size = 0;

    Node<E> first;  // 头指针。

    // 定义节点类：用于创建节点对象，封装节点数据和下个节点对象的地址值
    public static class Node<E>{
        E item;
        Node<E> next; // 下个节点的地址。

        public Node(E item, Node<E> next) {
            this.item = item;
            this.next = next;
        }
    }

    // 可以把眼睛闭起来（拓展内容）
    public boolean add(E e){
        // 维护单链表
        // 第一个节点，或者是后面的节点。
        // 创建一个节点对象，封装这个数据
        Node<E> newNode = new Node<>(e, null);
        // 判断这个节点是否是第一个节点。
        if(first == null){
            first = newNode;
        }else {
            // 把这个节点加入到当前最后一个节点下一个位置。
            // 如何找到最后一个节点对象
            Node<E> temp = first;
            while (temp.next != null){
                temp = temp.next;
            }
            temp.next = newNode;
        }
        size++;
        return true;
    }

    @Override
    public String toString() {
        StringJoiner sb = new StringJoiner(", ", "[" , "]");
        Node<E> temp = first;
        while (temp != null){
            sb.add(temp.item + "");
            temp = temp.next;
        }
        return sb.toString();
    }

    public int size() {
        return size;
    }
}

class Test{
    public static void main(String[] args) {
        MyLinkedList<String> list = new MyLinkedList<>();
        list.add("java1");
        list.add("java2");
        list.add("java3");
        list.add("java4");
        list.add("java5");
        list.add("java6");
        list.add("java7");
        list.add("java8");
        list.add("java9");
        list.add("java10");
        list.add("java11");
        System.out.println(list);
    }
}
