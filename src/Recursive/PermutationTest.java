package Recursive;

import java.util.LinkedList;

/**
 * Created by ys on 2017-03-05.
 */
public class PermutationTest {
    public static void main(String[] args){
        String str = "abc";
        Permutation per = new Permutation();
        LinkedList<String> list = per.getList(str);

        while( list.size() != 0 ){
            System.out.println(list.pop());
        }
    }
}
