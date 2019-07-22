package DataStructure.Stacks_and_Queues;

/**
 * Created by ys on 2017-02-28.
 */
public class StackTest {
    public static void main(String[] args){
        Stack test = new Stack(0);
        test.push(1);
        test.push(2);
        test.push(3);

        test.print();

        System.out.println(test.pop());
        System.out.println("--------");
        test.print();

        System.out.println(test.peek());
        System.out.println("--------");

        test.push(4);
        test.print();
    }
}
