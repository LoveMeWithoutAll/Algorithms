package DataStructure.Arrays_and_Strings;

import java.util.Arrays;

/*
    Cracking the Coding Interview v5 Chapter1.3 Quesition
    Given two strings, write a method to decide if one is a permutation of the other.
 */
public class checkPermutation {
    public static void main(String []args){
        String[][] pairs = {{"apple", "papel"}, {"carrot", "tarroc"}, {"hello", "llloh"}};

        for( String [] strs : pairs){
            if( checkPermut(strs) ){
                System.out.println( printStr(strs) + " are permutation of each other.");
            } else {
                System.out.println( printStr(strs) + " are not permutation of each other." );
            }
        }
    }

    private static boolean checkPermut(String[] strs){

        // assertion
        if( strs.length != 2 || strs[0].length() != strs[1].length() ) {
            return false;
        }

        // strs[0]
        String str0 = sort(strs[0]);

        // strs[1]
        String str1 = sort(strs[1]);

        if( !str0.equals(str1) ) return false;

        return true;
    }

    private static String sort(String input){
        char [] tmp = input.toCharArray();
        Arrays.sort(tmp);
        return new String(tmp);
    }

    private static String printStr(String [] input){

        String result = "";

        result += input[0];
        result += " and ";
        result += input[1];

        return result;
    }

}
