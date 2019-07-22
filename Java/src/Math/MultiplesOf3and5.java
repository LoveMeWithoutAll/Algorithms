package Math;

/**
 * Multiples of 3 and 5
 * Reference: http://projecteuler.net/problem=1
 * Description:
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
 Find the sum of all the multiples of 3 or 5 below 1000.
 */
public class MultiplesOf3and5 {

    // time complexity: O(n), space complexity: O(1)
    public static void main(String [] args){
        int result = 0;
        for( int idx = 1; idx < 1000; idx++ ){
            if( idx % 3 == 0 ) result += idx;
            if( idx % 5 == 0 ) result += idx;
            if( idx % (3*5) == 0 ) result -= idx;
        }
        System.out.println(result);
    }
}
