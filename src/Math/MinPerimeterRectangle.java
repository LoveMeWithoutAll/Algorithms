package Math;

import java.util.LinkedList;

/**
 * MinPerimeterRectangle: Find the minimal perimeter of any rectangle whose area equals N
 * Reference: codility.com
 * Description:
 * An integer N is given, representing the area of some rectangle.
 The area of a rectangle whose sides are of length A and B is A * B, and the perimeter is 2 * (A + B).
 The goal is to find the minimal perimeter of any rectangle whose area equals N. The sides of this rectangle should be only integers.

 For example, given integer N = 30, rectangles of area 30 are:
 (1, 30), with a perimeter of 62,
 (2, 15), with a perimeter of 34,
 (3, 10), with a perimeter of 26,
 (5, 6), with a perimeter of 22.

 Write a function:
 class Solution { public int solution(int N); }
 that, given an integer N, returns the minimal perimeter of any rectangle whose area is exactly equal to N.
 For example, given an integer N = 30, the function should return 22, as explained above.

 Assume that:
 N is an integer within the range [1..1,000,000,000].

 Complexity:
 expected worst-case time complexity is O(sqrt(N));
 expected worst-case space complexity is O(1).
 */
public class MinPerimeterRectangle {
    public static void main(String [] args){
        System.out.println(solutionA(30));
        System.out.println(solutionB(30));
    }

    // time complexity: O(sqrt(N))
    // space complexity: O(N)
    // https://codility.com/demo/results/training33JDK8-QN5/
    private static int solutionA(int N){

        LinkedList<Integer> list = new LinkedList<>();
        for( int idx = 1 ; idx <= Math.sqrt(N); idx++){
            if( N % idx == 0 ) {
                list.add(idx);
            }
        }

        int result = Integer.MAX_VALUE;
        while( !list.isEmpty() ){
            int header = list.pop();
            int perimeter = 2 * (header + ( N / header) );
            if( result > perimeter ) result = perimeter;
        }

        return result;
    }

    // time complexity: O(sqrt(N))
    // space complexity: O(1)
    // https://codility.com/demo/results/trainingTZDNX9-SZC/
    private static int solutionB(int N){
        int perimeter = 0;
        for( int idx = 1; idx <= Math.sqrt(N); idx++ ){
            if( N % idx == 0 ) perimeter = idx;
        }

        return 2 * ( perimeter + (N / perimeter) );
    }
}
