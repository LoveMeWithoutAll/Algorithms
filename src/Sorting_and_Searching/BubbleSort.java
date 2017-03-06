package Sorting_and_Searching;

/**
 * Created by ys on 2017-03-06.
 */
public class BubbleSort {
    public static void main(String [] args){
        int [] input = {5,2,3,6,8,34,3,5,789,8,7,0,3,2};
        bubbleSort(input);

        for( int i : input ){
            System.out.println(i);
        }
    }

    public static void bubbleSort(int [] in){

        for(int i=0; i< in.length; i++){
            for(int j= in.length-1; j > i; j--){
                if( in[j] < in[j-1] ) {
                    int tmp = in[j-1];
                    in[j-1] = in[j];
                    in[j] = tmp;
                }
            }
        }
    }
}
