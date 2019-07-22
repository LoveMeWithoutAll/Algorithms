package Sorting_and_Searching;

/**
 * Created by ys on 2017-03-19.
 */
public class InsertionSort {
    public static void main(String [] args){
        int [] A = {2,3,6,2,5,7,1,4,8,9,10};
        insertionSort(A);
        for( int a : A ){
            System.out.println(a);
        }
    }

    public static void insertionSort(int [] A){
        for( int idx=1; idx < A.length-1; idx++){
            int tmp = A[idx];

            int jdx = idx -1;
            while( jdx >= 0 && A[jdx] > tmp ){
                A[jdx+1] = A[jdx];
                jdx--;
            }
            A[jdx+1] = tmp;
        }
    }
}
