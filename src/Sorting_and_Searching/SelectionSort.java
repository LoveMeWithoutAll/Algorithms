package Sorting_and_Searching;

/**
 * Created by ys on 2017-03-07.
 */
public class SelectionSort {
    public static void main(String[] args){
        int [] input = {5,2,3,6,8,34,3,5,789,8,7,0,3,2};
        selectionSort(input);

        for( int i : input ){
            System.out.println(i);
        }
    }

    public static void selectionSort(int [] input){
        for( int i=0 ; i< input.length ; i++){
            for( int j=i; j<input.length; j++){
                if( input[i] > input[j]) {
                    int tmp = input[i];
                    input[i] = input[j];
                    input[j] = tmp;
                }
            }
        }
    }
}
