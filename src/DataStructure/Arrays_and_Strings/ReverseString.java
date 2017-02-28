package DataStructure.Arrays_and_Strings;

/*
    Cracking the Coding Interview v5 Chapter1.2 Question
    reverse String
 */

public class ReverseString {

    public static void main(String [] args){
        String[] words = {"abcde", "hello", "apple", "kite", "padle"};

        for( String word : words) System.out.println(word + "'s reverse is " + reverse(word));
    }

    private static String reverse(String input){

        char [] charSet = input.toCharArray();
        String result = "";

        for( int i = charSet.length -1; i > -1 ; i--){
            result += charSet[i];
        }

        return result;
    }
}
