package DataStructure.Stacks_and_Queues;

import java.util.NoSuchElementException;

/**
 * Created by ys on 2017-02-28.
 */
public class Queue {
    private int data;
    private Queue next;
    private Queue prev;
    private Queue first;

    public Queue(int d){
        data = d;
        if(first==null) first = this;
    }

    public void add(int d){
        Queue last = new Queue(d);
        Queue que = first;
        while( que.next != null){
            que = que.next;
        }
        que.next = last;
    }

    public int poll(){
        int result;
        try{
            result = first.data;
            this.first = first.next;
            Queue que = this;
            que = que.next;
        } catch(Exception e){
            throw new NoSuchElementException("No more element in Queue");
        }
        return result;
    }

    public int peek(){
        int result;
        try {
            result = first.data;
        } catch (Exception e) {
            throw new NoSuchElementException("No more element in Queue");
        }
        return result;
    }

    public void print(){
        Queue que = first;
        while( que.next != null ){
            System.out.println(que.data);
            que = que.next;
        }
        System.out.println(que.data);
        System.out.println("---------");
    }
}
