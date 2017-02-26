package DataStructure.Arrays_and_Strings;

/*
    Cracking the Coding Interview Chapter1.6 Quesition
    rotate a square matrix by 90 degrees
 */

public class rotateMatrix {

    public static void main(String args[]){

        //int [][] input = new int[][]{{1,2,3},{4,5,6},{7,8,9}};
        int [][] input = new int[][]{{1,2,3,4,5},{6,7,8,9,10},{11,12,13,14,15},{16,17,18,19,20},{21,22,23,24,25}};

        printMatrix(input);
        rotate(input);
        printMatrix(input);
    }

    private static void printMatrix(int [][] input){
        System.out.println();
        for(int [] xAxis : input){
            System.out.println();
            for(int yAxis : xAxis) System.out.print(" " + yAxis);
        }
    }


    private static boolean rotate(int [][] input){

        // assertion
        if( input.length == 0 || input.length != input[0].length ) return false;

        // rotate
        for(int layer = 0; layer < input.length/2 ; layer++){
            int first = layer;
            int last = input.length - 1 - layer; // init: 3-1-0=2
            for( int i=first ; i < last ; i ++){

                //i's offset: first is on move, layer is on hold
                int offset = input.length - 1 - i; // init: 3-1-0=2 , second: 3-1-1=1

                // top -> temp
                int temp = input[first][i];

                //left -> top
                input[first][i] = input[offset][first];

                // bottom -> left
                input[offset][first] = input[last][offset];

                // right => bottom
                input[last][offset] = input[i][last];

                // temp => right
                input[i][last] = temp;
            }
        }

        return true;
    }
}
