package DataStructure.LinkedLists;

/**
 * Created by ys on 2017-02-27.
 */
public class linkedListByRecursive {

    public static class Node {
        Node next = null;
        int data;

        private Node(int d){
            data =d;
        }

        public void appendToTail(int d){
            Node end = new Node(d);
            Node n = this;

            if( n.next == null ) {
                n.next = end;
                return;
            }

            n.next.appendToTail(end.data);
        }

        public void deleteNode(int d){
            Node n = this;
            if( n.data == d ) {
                n = n.next;
                return;
            }
            while( n.next != null ){
                if( n.next.data == d) {
                    n.next = n.next.next;
                    return;
                }
                n = n.next;
            }
            return;
        }

        public void printNode(){
            Node tmp = this;
            while(true){
                System.out.println( tmp.data );
                if( tmp.next == null ) break;
                tmp = tmp.next;
            }
        }
    }

    public static void main(String[] args){
        Node test = new Node(1);
        test.appendToTail(2);
        test.appendToTail(3);
        test.appendToTail(4);
        test.deleteNode(2);
        test.printNode();
    }
}
