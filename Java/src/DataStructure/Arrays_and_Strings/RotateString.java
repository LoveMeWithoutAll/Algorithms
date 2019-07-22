package DataStructure.Arrays_and_Strings;

/**
 * Created by ys on 2017-02-26.
 * Cracking the Coding Interview v5 Chapter1.8 Quesition
 * Assume you have a method isSubstring which checks if one word is a substring
 of another. Given two strings, si and s2, write code to check Ifs2 is a rotation of si
 using only onecalltoisSubstring (e.g., "waterbottLe" is a rotation of "erbottLewat").
 */
public class RotateString {

    public static void main(String [] args){
        String[][] pairs = {{"apple", "pleap"}, {"waterbottle", "erbottlewat"}, {"camera", "macera"}};

        for( String[] pair : pairs){
            if( isSubstring(pair) ){
                System.out.println(pair[0] + " is "+ pair[1] + "'s rotating result.");
            }
        }
    }

    private static boolean isSubstring(String [] strs){

        String strA = strs[0];
        String strB = strs[1];

        // assertion
        if( strA.length() != strB.length() ) return false;

        for( int i=0; i< strA.length() ; i++ ){
            String endHalf = strA.substring(i);
            String frontHalf = strA.substring(0,i);

            String newAll = endHalf + frontHalf;
            if( newAll.equals(strB)) return true;
        }

        return false;
    }
}
