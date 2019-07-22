package Recursive;

import java.util.LinkedList;

/**
 * Created by ys on 2017-03-05.
 */
public class Fibonacci {
    public static void main(String[] args){
        LinkedList<Integer> seq = new LinkedList<>();

        for( int idx = 0; idx <= 10 ; idx++ ){
            seq.add(fib(idx));
        }

        while( seq.size() != 0 ){
            System.out.println(seq.poll());
        }

    }

    private static int fib(int n){

        if( n <= 0 ) return 0;
        if( n == 1 ) return 1;

        return fib(n-1) + fib(n-2);
    }
}
