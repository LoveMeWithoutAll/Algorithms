package DataStructure.Arrays_and_Strings;

/*
    Cracking The Coding Interview v5 Chaper1.1 Quesition
    when using extended ascii code, check if it is a character set which is a set of unique characters.
 */

public class checkUniqueChar {

    public static void main (String []args){
        String[] words = {"abcde", "hello", "apple", "kite", "padle"};

        for( String test : words){
            if( checkUnique(test) ){
                System.out.println(test + " is a set of unique chars.");
            } else {
                System.out.println(test + " have duplicate chars.");
            }
        }
    }

    private static boolean checkUnique(String input){
        // assertion
        if( input.length() > 256 ) return false;

        boolean [] set = new boolean[256];

        for( int i=0 ; i < input.length(); i++){
            int asciiNum = input.charAt(i);
            if(set[asciiNum]){
                return false;
            } else {
                set[asciiNum] = true;
            }
        }

        return true;
    }

}
