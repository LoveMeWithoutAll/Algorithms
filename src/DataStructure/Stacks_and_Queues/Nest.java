package DataStructure.Stacks_and_Queues;

import java.util.EmptyStackException;
import java.util.Stack;

/**
 * Brackets: Determine whether a given string of parentheses is properly nested.
 * Reference: Codility.com
 * Description
 * A string S consisting of N characters is considered to be properly nested if any of the following conditions is true:
 S is empty;
 S has the form "(U)" or "[U]" or "{U}" where U is a properly nested string;
 S has the form "VW" where V and W are properly nested strings.
 For example, the string "{[()()]}" is properly nested but "([)()]" is not.

 Write a function:
 class Solution { public int solution(String S); }
 that, given a string S consisting of N characters, returns 1 if S is properly nested and 0 otherwise.
 For example, given S = "{[()()]}", the function should return 1 and given S = "([)()]", the function should return 0, as explained above.

 Assume that:
 N is an integer within the range [0..200,000];
 string S consists only of the following characters: "(", "{", "[", "]", "}" and/or ")".

 Complexity:
 expected worst-case time complexity is O(N);
 expected worst-case space complexity is O(N) (not counting the storage required for input arguments).
 */
public class Nest {
    public static void main(String [] args){
        String S = "{[()()]}";
        System.out.println(solution(S));
    }

    // 100%, https://codility.com/demo/results/trainingDW33TY-TFT/
    public static int solution(String S){

        // assertion
        if( S == null || S.equals("") ) return 1;
        if( S.length() % 2 != 0 ) return 0;

        Stack<Character> stack = new Stack();

        try{
            for( int idx = 0; idx < S.length(); idx++ ){
                char c = S.charAt(idx);
                switch ( c ) {
                    case ')': if( stack.pop() != '(' ) return 0; break;
                    case '}': if( stack.pop() != '{' ) return 0; break;
                    case ']': if( stack.pop() != '[' ) return 0; break;
                    default: stack.add(c); break;
                }
            }
        } catch ( EmptyStackException e) {
            return 0;
        }

        if( stack.isEmpty() ) {
            return 1;
        } else {
            return 0;
        }
    }
}
