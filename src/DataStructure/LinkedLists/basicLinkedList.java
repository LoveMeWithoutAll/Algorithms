package DataStructure.LinkedLists;

/**
 * Created by ys on 2017-02-27.
 */
public class basicLinkedList {

    public static class Node {
        Node next = null;
        int data;

        private Node(int d){
            data = d;
        }

        public void appendToTail(int d){
            Node end = new Node(d);
            Node n = this;
            while( n.next != null ){
                n = n.next;
            }
            n.next = end;
        }

        public static Node deleteNode(Node head, int d){
            Node n = head;

            if(n.data == d){
                return head.next;
            }

            while( n.next != null ){
                if( n.next.data == d) {
                    n.next = n.next.next;
                    return head;
                }
                n = n.next;
            }
            return head;
        }
    }

    public static void main (String [] args){

        Node test = new Node(1);
        test.appendToTail(2);
        test.appendToTail(3);
        test.appendToTail(4);
        test = Node.deleteNode(test,2);

        Node tmp = test;
        while( true ){
            System.out.println(tmp.data);
            if( tmp.next == null ) break;
            tmp = tmp.next;
        }
    }
}
