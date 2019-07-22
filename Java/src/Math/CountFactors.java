package Math;

/**
 * CountFactors: Count factors of given number n.
 * Reference: https://codility.com/demo/results/training3SD5EX-ZBE/
 * Description:
 * A positive integer D is a factor of a positive integer N if there exists an integer M such that N = D * M.
 For example, 6 is a factor of 24, because M = 4 satisfies the above condition (24 = 6 * 4).

 Write a function:
 class Solution { public int solution(int N); }
 that, given a positive integer N, returns the number of its factors.
 For example, given N = 24, the function should return 8, because 24 has 8 factors, namely 1, 2, 3, 4, 6, 8, 12, 24. There are no other factors of 24.

 Assume that:
 N is an integer within the range [1..2,147,483,647].

 Complexity:
 expected worst-case time complexity is O(sqrt(N));
 expected worst-case space complexity is O(1).
 */
public class CountFactors {
    public static void main(String [] args){
        System.out.println(solution1(24));
        System.out.println(solution2(24));
    }

    // O(N): https://codility.com/demo/results/training3SD5EX-ZBE/
    public static int solution1(int N){

        // assetion
        if( N == 0 ) return -1;
        if( N == 1 ) return 1;

        int cnt = 0;
        int checked = 1;
        while( true ){
            if( N % checked == 0 ) cnt++;
            checked ++;
            if( checked > N/2 ) break;
        }

        return cnt+1;
    }

    // O(sqrt(N))
    // https://codility.com/demo/results/training9QW2N2-6C9/
    public static int solution2(int N){
        // assertion
        if( N <= 0 ) return -1;
        if( N == 1 ) return 1;

        long result = 2;
        for( long idx = 2; idx * idx <= N; idx ++){
            if( N % idx == 0) {
                if( idx * idx == N ) {
                    result += 1;
                } else {
                    result += 2;
                }
            }
        }

        return (int)result;
    }
}
