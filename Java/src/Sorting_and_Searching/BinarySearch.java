package Sorting_and_Searching;

import java.util.Arrays;

/**
 * Created by ys on 2017-03-16.
 */
public class BinarySearch {
    public static void main(String [] args){
        System.out.println(binarySearch(new int [] {1,2,4,5,6,7,2,3,5,6,7,8}, 20));
    }

    public static int binarySearch(int [] A, int data){

        Arrays.sort(A);

        int min = 0;
        int max = A.length - 1;

        return binarySearch(A, data, min, max);
    }

    private static int binarySearch(int [] A, int data, int min, int max){

        if( min > max ) return -1;

        int mid = (max - min)/2 + min;
        if(A[mid] == data){
            return data;
        } else if (A[mid] > data){
            return binarySearch(A, data, mid+1, max);
        } else if( A[mid] < data ){
            return binarySearch(A, data, min, mid-1);
        } else {
            return -1;
        }
    }
}
