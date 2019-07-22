package Sorting_and_Searching;

import java.util.Arrays;

/**
 * find Unique Integer in array consisting of duplicated Integers but one Integer
 */
public class UniqueInteger {
    public static void main(String[] args){
        int [] A = {2,1,1,2,3,1,4,4};
        System.out.println(solution(A));
    }

    private static int solution(int [] A){
        Arrays.parallelSort(A);
        if( A[A.length-1] != A[A.length-2]) return A[A.length-1];
        if( A[0] != A[1] ) return A[0];

        int [] arr = new int[100000];
        for( int i=0; i < A.length ; i++){
            arr[i] ++;
        }

        for(int i=0; i<A.length ; i++){
            if(A[i] == 1) return i;
        }

        return -1;
    }
}
