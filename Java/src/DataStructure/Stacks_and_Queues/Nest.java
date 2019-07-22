package DataStructure.Stacks_and_Queues;

import java.util.EmptyStackException;
import java.util.Stack;

/**
 * Nesting: Determine whether given string of parentheses is properly nested.
 * Reference: Codility.com
 * Description
 * A string S consisting of N characters is called properly nested if:
 S is empty;
 S has the form "(U)" where U is a properly nested string;
 S has the form "VW" where V and W are properly nested strings.
 For example, string "(()(())())" is properly nested but string "())" isn't.

 Write a function:
 class Solution { public int solution(String S); }
 that, given a string S consisting of N characters, returns 1 if string S is properly nested and 0 otherwise.
 For example, given S = "(()(())())", the function should return 1 and given S = "())", the function should return 0, as explained above.

 Assume that:
 N is an integer within the range [0..1,000,000];
 string S consists only of the characters "(" and/or ")".

 Complexity:
 expected worst-case time complexity is O(N);
 expected worst-case space complexity is O(1) (not counting the storage required for input arguments).
 */
public class Nest {
    public static void main(String [] args){
        System.out.println(solution("(()(())())")); // 1
        System.out.println(solution("())")); // 0
        System.out.println(solution("")); // 0
    }

    // 100% https://codility.com/demo/results/trainingBZYE3W-UW3/
    private static int solution(String S){

        // assertion
        if( S.length() % 2 != 0 ) return 0;
        if( S == null || S.equals("") ) return 1;
        if( S.charAt(0) == ')' ) return 0;

        Stack<Character> stack = new Stack();
        char[] arr = S.toCharArray();

        try{
            for( char c : arr ){
                if( c == '(' ){
                    stack.push(c);
                } else if( c == ')' && stack.peek() == '(' ) {
                    stack.pop();
                } else {
                    return 0;
                }
            }
        } catch( EmptyStackException e){
            return 0;
        }

        if( stack.size() == 0 ){
            return 1;
        } else {
            return 0;
        }
    }
}
