package Sorting_and_Searching;

/**
 * Created by ys on 2017-03-21.
 */
public class QuickSort {

    public static void main(String[] args){
        int [] arr = {5,2,4,1,4,8,20,45,2,8,0,2,1};
        quickSort(arr);
        for( int a : arr){
            System.out.println(a);
        }
    }

    public static void quickSort(int [] arr){
        quickSort(arr,0,arr.length-1);
    }

    private static void quickSort(int[] arr, int left, int right) {
        int i, j, pivot, tmp;

        if (left < right) {
            i = left;
            j = right;
            pivot = arr[left];
            //분할 과정
            while (i < j) {
                while (arr[j] > pivot) j--;
                while (i < j && arr[i] <= pivot) i++;

                tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
            arr[left] = arr[i];
            arr[i] = pivot;
            //정렬 과정
            quickSort(arr, left, i - 1);
            quickSort(arr, i + 1, right);
        }
    }
}
