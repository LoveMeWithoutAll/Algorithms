package DataStructure.Arrays_and_Strings;

/**
 * Equilibrium index of an array
 * http://www.geeksforgeeks.org/equilibrium-index-of-an-array/
     Equilibrium index of an array is an index such that the sum of elements at lower indexes is equal to the sum of elements at higher indexes. For example, in an arrya A:

     A[0] = -7, A[1] = 1, A[2] = 5, A[3] = 2, A[4] = -4, A[5] = 3, A[6]=0

     3 is an equilibrium index, because:
     A[0] + A[1] + A[2] = A[4] + A[5] + A[6]

     6 is also an equilibrium index, because sum of zero elements is zero, i.e., A[0] + A[1] + A[2] + A[3] + A[4] + A[5]=0

     7 is not an equilibrium index, because it is not a valid index of array A.

     Write a function int equilibrium(int[] arr, int n); that given a sequence arr[] of size n, returns an equilibrium index (if any) or -1 if no equilibrium indexes exist.
 */
public class EquiilibriumIndex {
    public static void main(String [] args){
        int [] arr = {-1, 3, -4, 5, 1, -6, 2, 1};

        System.out.println(searchEqIdUsingRecursive(arr, 0));
    }

    private static int searchEqIdUsingRecursive(int [] arr, int mid){

            if( mid == arr.length ) return -1;

            int sum1 = 0;
            int sum2 = 0;
            int size = arr.length;
            int head = mid;

            // sum1
            for( int i=0 ; i< head; i++){
                sum1 += arr[i];
            }

            // sum2
            for( int i= head+1 ; i < size; i++){
                sum2 += arr[i];
            }

            if( sum1 == sum2 ) {
                return head;
            } else {
                return searchEqIdUsingRecursive(arr, head+1);
            }
    }
}
