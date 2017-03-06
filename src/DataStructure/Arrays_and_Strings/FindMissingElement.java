package DataStructure.Arrays_and_Strings;

import java.util.Arrays;

/**
 * PermMissingElem: Find the missing element in a given permutation.
 Reference: Codility.com

 A zero-indexed array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.
 Your goal is to find that missing element.

 Write a function:
 class Solution { public int solution(int[] A); }
 that, given a zero-indexed array A, returns the value of the missing element.

 For example, given array A such that:
 A[0] = 2
 A[1] = 3
 A[2] = 1
 A[3] = 5
 the function should return 4, as it is the missing element.

 Assume that:
 N is an integer within the range [0..100,000];
 the elements of A are all distinct;
 each element of array A is an integer within the range [1..(N + 1)].
 Complexity:

 expected worst-case time complexity is O(N);
 expected worst-case space complexity is O(1), beyond input storage (not counting the storage required for input arguments).
 Elements of input arrays can be modified.
 */
public class FindMissingElement {
    public static void main(String[] args){
        System.out.println(solution(new int[]{2, 3}));
        System.out.println(solution(new int[]{1, 2, 3, 4, 5, 7, 8, 9}));
        System.out.println(solution(new int[]{}));
        int [] A = null;
        System.out.println(solution(A));
    }

    // time complexity: NlogN
    public static int solution(int [] A){

        //assertion
        if( A == null ) return -1;
        if( A.length == 0 ) return -1;
        if( A.length == 1 ) return 1;

        Arrays.sort(A);

        for( int idx = 0 ; idx < A.length ; idx++){
            if( idx + 1 != A[idx]) return idx + 1;
        }
        return -1;
    }
}
