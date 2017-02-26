package DataStructure.Arrays_and_Strings;

import CtCILibrary.AssortedMethods;

import java.util.Arrays;

/**
 * Created by ys on 2017-02-26.
 * Cracking the Coding Interview v5 Chapter1.7 Quesition
 * Write an algorithm such that if an element in an MxN matrix is 0, its entire row and
 * column are set to 0.
 */
public class zeroMatrix {

    public static void main(String [] args){
        int nrows = 10;
        int ncols = 10;
        int[][] matrix1 = AssortedMethods.randomMatrix(nrows, ncols, -10, 10);

        AssortedMethods.printMatrix( matrix1);
        int [][] matrix2 = cloneMatrix(matrix1);
        System.out.println();
        AssortedMethods.printMatrix(matrix2);
        System.out.println();

        checkZero(matrix1, matrix2);
        AssortedMethods.printMatrix( matrix2);
    }

    private static void checkZero(int[][] matrix1,int[][] matrix2){
        for( int i=0; i< matrix1.length; i++){
            for( int j=0 ; j< matrix1[0].length ; j++ ){
                if( matrix1[i][j] == 0) {
                    makeZero(matrix2, i , j);
                }
            }
        }
    }

    private static void makeZero(int[][] matrix, int x, int y){

        // y axis
        for( int i =0 ; i < matrix.length ; i ++){
            matrix[i][y] = 0;
        }

        // x axis
        for( int i=0 ; i< matrix[0].length ; i++){
            matrix[x][i] = 0;
        }
    }

    public static int[][] cloneMatrix(int[][] matrix){
        int [][] result = new int[matrix.length][matrix[0].length];

        for(int x=0; x < matrix.length; x ++){
            for( int y=0; y < matrix[0].length ; y++ ){
                result[x][y] = matrix[x][y];
            }
        }

        return result;
    }
}
