package Math;

/**
 * FrogJmp: Count minimal number of jumps from position X to Y
 * Reference: Codility.com
 * A small frog wants to get to the other side of the road. The frog is currently located at position X and wants to get to a position greater than or equal to Y. The small frog always jumps a fixed distance, D.
 Count the minimal number of jumps that the small frog must perform to reach its target.

 Write a function:
 class Solution { public int solution(int X, int Y, int D); }
 that, given three integers X, Y and D, returns the minimal number of jumps from position X to a position equal to or greater than Y.

 For example, given:
 X = 10
 Y = 85
 D = 30
 the function should return 3, because the frog will be positioned as follows:

 after the first jump, at position 10 + 30 = 40
 after the second jump, at position 10 + 30 + 30 = 70
 after the third jump, at position 10 + 30 + 30 + 30 = 100

 Assume that:
 X, Y and D are integers within the range [1..1,000,000,000];
 X ≤ Y.

 Complexity:
 expected worst-case time complexity is O(1);
 expected worst-case space complexity is O(1).
 */
public class FrogJump {
    public static void main(String [] args){
        System.out.println(jump(10, 85, 30));
    }

    private static int jump(int X, int Y, int D){
        // assertion
        if( X > Y ) return -1;
        if( X < 0 || Y < 0 || D < 0) return -1;
        if( (long)X > 1000000000 || (long)Y > 1000000000  || (long)D > 1000000000 ) return -1;

        long distance = (long)Y - (long)X;
        if( distance % D == 0 ){
            return (int)(distance / D);
        } else {
            return (int)(distance / D) + 1;
        }
    }
}
