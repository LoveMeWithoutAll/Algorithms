package DataStructure.Arrays_and_Strings;

/*
    Cracking the Coding Interview v5 Chapter1.4 Question
    replace all spaces in a string with '%20'
 */
public class URLify {

    public static void main(String [] args ){
        String str = "Mr John Smith    ";
        System.out.println( urlifyByReplace(str));
        System.out.println( urlify(str));
    }

    private static String urlifyByReplace(String input){

        return input.replace(" ", "%20");
    }

    private static StringBuffer urlify(String input){
        char [] arr = input.toCharArray();
        StringBuffer result = new StringBuffer();

        for(char c : arr){
            if( c == ' ') {
                result.append("%20");
            } else {
                result.append(c);
            }
        }

        return result;
    }
}
