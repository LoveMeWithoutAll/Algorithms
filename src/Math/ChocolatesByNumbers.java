package Math;

import java.util.HashSet;

/**
 * ChocolatesByNumbers: There are N chocolates in a circle. Count the number of chocolates you will eat.
 * Reference: Codility.com
 * Description:
 * Two positive integers N and M are given. Integer N represents the number of chocolates arranged in a circle, numbered from 0 to N − 1.
 You start to eat the chocolates. After eating a chocolate you leave only a wrapper.
 You begin with eating chocolate number 0. Then you omit the next M − 1 chocolates or wrappers on the circle, and eat the following one.
 More precisely, if you ate chocolate number X, then you will next eat the chocolate with number (X + M) modulo N (remainder of division).
 You stop eating when you encounter an empty wrapper.
 For example, given integers N = 10 and M = 4. You will eat the following chocolates: 0, 4, 8, 2, 6.
 The goal is to count the number of chocolates that you will eat, following the above rules.

 Write a function:
 class Solution { public int solution(int N, int M); }
 that, given two positive integers N and M, returns the number of chocolates that you will eat.
 For example, given integers N = 10 and M = 4. the function should return 5, as explained above.

 Assume that:
 N and M are integers within the range [1..1,000,000,000].

 Complexity:
 expected worst-case time complexity is O(log(N+M));
 expected worst-case space complexity is O(log(N+M)).
 */
public class ChocolatesByNumbers {
    public static void main(String[] args){
        //System.out.println(solution(15,3));
        //System.out.println(solution3(15,3));
        System.out.println(solution3(947853, 4453));
    }

    // https://codility.com/demo/results/trainingY8GVY8-GVQ/
    private static int solution(int N, int M){

        boolean [] check = new boolean[N];
        check[0] = true;

        boolean [] arr = getAteNumber(N, M, 0, check);

        long result = 0;
        for( boolean r : arr ){
            if( r ) result++;
        }
        return (int)result;
    }

    private static boolean[] getAteNumber(long N, long M, long P, boolean [] arr){

        long newP = ( P + M ) % N;
        if( arr[ (int)newP ] ) return arr;

        arr[ (int)newP ] = true;

        return getAteNumber(N, M, newP, arr);
    }

    // https://codility.com/demo/results/training8PXNAP-RKP/
    private static int solution2(int N, int M){
        boolean [] check = new boolean[N];
        check[0] = true;

        long P = 0;
        while( true ){
            long newP = ( P + M ) % N;
            if( check[ (int)newP ] ) {
                break;
            } else {
                check[(int)newP] = true;
            }
            P = newP;
        }

        long result = 0;
        for( boolean r : check ){
            if( r ) result++;
        }
        return (int)result;
    }

    // https://codility.com/demo/results/trainingVS7AE2-9AX/
    private static int solution3(int N, int M){
        HashSet<Long> set = new HashSet<>();
        set.add((long) 0);

        long P = 0;
        while( true ){
            long newP = ( P + M ) % N;
            if( set.contains(newP) ) {
                break;
            } else {
                set.add(newP);
            }
            P = newP;
        }

        return set.size();
    }
}
