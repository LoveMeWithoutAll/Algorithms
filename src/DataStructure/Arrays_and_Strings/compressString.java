package DataStructure.Arrays_and_Strings;

/*
  Created by ys on 2017-02-26.
  Cracking the Coding Interview v5 Chapter1.5 Question
  perform basic string compression using the counts of
  repeated characters. For example, the string aabcccccaaa would become
  a2blc5a3. If the "compressed" string would not become smaller than the original
  string, your method should return the original string.
 */
public class compressString {


    public static void main (String args[]){
        String str = "aaaaabbbbaaaabbddc";
        System.out.println(compress(str));
    }

    private static String compress(String str){
         StringBuffer result = new StringBuffer();

         int cnt = 1;
         for( int i = 0; i < str.length() - 1; i++){
             char tmp0 = str.charAt(i);
             char tmp1 = str.charAt(i+1);
             if( tmp0  == tmp1 ){
                 cnt ++;
             } else {
                 result.append(tmp0);
                 result.append(cnt);
                 cnt = 1;
             }
         }

         // process last char
         if( str.charAt(str.length()-1) == str.charAt(str.length()-2) ){
             int tmp = (int)result.charAt(result.length()-1);
             tmp++;
             result.deleteCharAt(str.length()-1);
             result.append(tmp);
         } else {
             result.append(str.charAt(str.length()-1));
         }

         // check compressed str's length
        if( result.length() >= str.length() ) {
             return str;
        } else {
            return result.toString();
        }
    }

}
