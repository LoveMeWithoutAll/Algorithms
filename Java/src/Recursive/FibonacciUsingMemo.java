package Recursive;

import java.util.LinkedList;

/**
 * Created by ys on 2017-03-05.
 */
public class FibonacciUsingMemo {
    public static void main(String[] args){
        int max = 30;
        LinkedList<Integer> fibonacciSequence = getFib(max);

        for( int idx=0 ; idx < fibonacciSequence.size(); idx++){
            System.out.println(fibonacciSequence.get(idx));
        }
    }

    private static LinkedList<Integer> getFib(int max){
        LinkedList<Integer> result = new LinkedList<>();

        for(int idx=0; idx <= max; idx++){
            result.add(fibUsingMemo(idx, result));
        }

        return result;
    }

    private static int fibUsingMemo(int idx, LinkedList<Integer> memo){

        if( idx <= 0 ) return 0;
        if( idx == 1 ) return 1;
        if( memo.size() > idx ) return memo.get(idx);

        return fibUsingMemo(idx-1, memo) + fibUsingMemo(idx-2, memo);
    }
}
