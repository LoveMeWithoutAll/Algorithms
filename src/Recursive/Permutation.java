package Recursive;

import java.util.LinkedList;

/**
 * Created by ys on 2017-03-05.
 */
public class Permutation {
    public LinkedList<String> getList(String str){
        LinkedList<String> result = new LinkedList<>();

        permutation(str, result);

        return result;
    }

    private void permutation(String str, LinkedList<String> list){
        permutation(str, list, "");
    }

    private void permutation(String str, LinkedList<String> list, String prefix){
        if( str.length() == 0 ) {
            list.add(prefix);
        } else {
            for(int idx = 0; idx < str.length(); idx++ ){
                String tmp = prefix + str.substring(idx,idx+1);
                String rem = str.substring(0, idx) + str.substring(idx+1);
                permutation(rem, list, tmp);
            }
        }
    }
}
