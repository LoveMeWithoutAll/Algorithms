package Sorting_and_Searching;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

/**
 * Created by ys on 2017-03-18.
 * Reference: Chapter11.6 Q1~3, Data Structures and Algorithms Made Easy for Java
 */
public class IsDuplicate {
    public static void main(String [] args){
        int [] A = {1,2,4,6,7,4,6,7,2,2,5,7};
        checkByBruteForce(A);
        checkAfterSorting(A);
        checkUsingHashSet(A);
    }

    // time complexity: O(n**2), space complexity: O(1);
    public static void checkByBruteForce(int [] A){
        for(int i=0; i < A.length; i++){
            int tmp = A[i];
            for(int j=i+1; j < A.length; j++){
                if( tmp == A[j] ) {
                    System.out.println(tmp + " is there!");
                    return;
                }
            }
        }
        System.out.println("No Duplicates in the given array");
    }

    // time complexity: O(nlogn), space complexity: O(1)
    public static void checkAfterSorting(int [] A){
        Arrays.sort(A);
        for( int idx = 0; idx < A.length -1 ; idx++ ){
            if(A[idx] == A[idx+1]) {
                System.out.println(A[idx] + " is there!");
                return;
            }
        }
        System.out.println("No Duplicates in the given array");
    }

    // time complexity: O(n), space complexity: O(n)
    public static void checkUsingHashSet(int [] A){
        Set<Integer> set = new HashSet<>();
        for( int a : A ){
            if( set.contains(a) ){
                System.out.println(a + " is there!");
                return;
            } else {
                set.add(a);
            }
        }
        System.out.println("No Duplicates in the given array");
    }
}
