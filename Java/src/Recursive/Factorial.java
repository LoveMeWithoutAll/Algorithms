package Recursive;

/**
 * Created by ys on 2017-03-05.
 */
public class Factorial {
    public static void main(String [] args){
        System.out.println(factorial(10));
    }

    private static int factorial(int n){

        // assertion
        if( n < 0 ) return -1;
        if( n == 0) return 1;

        return n * factorial(n-1);
    }
}
