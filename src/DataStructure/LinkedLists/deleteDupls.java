package DataStructure.LinkedLists;

import java.util.HashSet;
import java.util.Iterator;
import java.util.LinkedList;

/**
 * Cracking the Coding Interview v5 Chapter2.1 Quesition
 * remove duplicates from an unsorted linked list
 */
public class deleteDupls {

    public static void print(LinkedList<Integer> list){
        System.out.println("-----------");
        Iterator<Integer> iterator = list.iterator();
        while( iterator.hasNext() ){
            int tmp = iterator.next();
            System.out.println(tmp);
        }
    }

    public static LinkedList<Integer> deleteDupls(LinkedList<Integer> list){

        Iterator<Integer> iterator = list.iterator();
        HashSet<Integer> set = new HashSet<Integer>();
        LinkedList<Integer> result = new LinkedList<Integer>();

        while( iterator.hasNext() ){
            int tmp = iterator.next();
            if( !set.contains(tmp) ){
                result.add(tmp);
                set.add(tmp);
            }
        }
        return result;
    }

    public static void main(String[]args){
        LinkedList<Integer> list = new LinkedList<Integer>();
        list.add(0);
        list.add(1);
        list.add(2);
        list.add(3);
        list.add(4);
        list.add(1);

        print(list);

        LinkedList<Integer> result = deleteDupls(list);

        print(result);
    }
}
