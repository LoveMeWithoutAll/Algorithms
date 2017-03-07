package Sorting_and_Searching;

/**
 * written in Chapter10.8, Data Structures and Algorithms Made Easy for Java
 */
public class ShellSort {
    public static void main(String [] args){
        int [] input = {5,2,3,6,8,34,3,5,789,8,7,0,3,2};
        shellSort(input);

        for( int i : input ){
            System.out.println(i);
        }
    }

    public static void shellSort(int [] A){
        int i, j, h, v;
        for( h = 1; h < A.length / 9 ; h = 3 * h + 1);

        for(; h > 0; h = h /3 ){
            for(i = h;  i < A.length; i++){
                v = A[i];
                j = i;
                while( j >= h && A[j - h] > v ) {
                    A[j] = A[ j - h ];
                    j -= h;
                }
                A[j] = v;
            }
        }
    }
}
