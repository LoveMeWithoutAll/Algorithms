package DataStructure.Stacks_and_Queues;

/**
 * Created by ys on 2017-02-28.
 */
public class Stack {
    private Stack next;
    private Stack top;
    private int data;

    public Stack(int d){
        data = d;
        top = this;
    }

    public void push(int d){
        Stack t = new Stack(d);
        Stack s = this;

        while( s.next != null ){
            s = s.next;
        }
        s.next = t;
        top = t;
    }

    public int pop(){
        Stack s = this;
        int result = top.data;
        while( s.next.next != null ){
            s = s.next;
        }
        s.next = null;
        top = s;
        return result;
    }

    public int peek(){
        return top.data;
    }

    public void print(){
        Stack s = this;
        while( s.next != null ){
            System.out.println(s.data);
            s = s.next;
        }
        System.out.println(s.data); // last one
        System.out.println("--------");
    }
}
