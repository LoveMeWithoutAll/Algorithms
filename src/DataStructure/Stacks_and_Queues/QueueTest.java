package DataStructure.Stacks_and_Queues;

/**
 * Created by ys on 2017-02z-28.
 */
public class QueueTest {
    public static void main(String[] args){
        Queue test = new Queue(0);
        test.add(1);
        test.add(2);
        test.add(3);
        test.add(4);

        test.print();

        System.out.println(test.poll());
        System.out.println("----------");

        System.out.println(test.poll());
        System.out.println("----------");

        test.print();

        System.out.println(test.peek());
        System.out.println("----------");

        test.add(5);
        test.print();

        System.out.println(test.poll());
        System.out.println(test.poll());
        System.out.println(test.poll());
        System.out.println(test.poll());
        System.out.println(test.poll());
    }
}
