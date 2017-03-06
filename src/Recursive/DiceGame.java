package Recursive;

import java.util.LinkedList;
import java.util.Random;

/**
 * Dice Game
 */
public class DiceGame {
    public static void main(String [] args){
        int [] A = {1, -2, 0, 9, -1, -2};
        System.out.println(solution(A));
    }

    public static int solution(int [] A){
        LinkedList<Integer> marked = new LinkedList<>();
        marked.add(A[0]);
        return solution(A, marked,0);
    }

    public static int solution(int [] A, LinkedList<Integer> marked, int p){
        Random dice = new Random();
        int face = dice.nextInt(6) + 1;

        if( face + p == A.length - 1 ) {
            long sum = 0;
            for( int m : marked ) sum += (long)m;
            sum += A[A.length-1];
            return (int)sum;
        } else if( face + p > A.length - 1 ) {
            return solution(A, marked, p);
        } else {
            p += face;
            marked.add(A[p]);
            return solution(A, marked, p);
        }
    }
}
