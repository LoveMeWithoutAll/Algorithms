package Sorting_and_Searching;

import java.util.*;

/**
 * Created by ys on 2017-03-18.
 * Reference: Chapter11.6 Q5, Data Structures and Algorithms Made Easy for Java
 */
public class FindMaximumRepeatingNum {
    public static void main(String [] args){
        int [] A = {1,2,4,6,7,4,6,7,2,2,5,7,7,7};
        getByBruteForce(A);
        getAfterSorting(A);
        getUsingHashMap(A);
    }

    // time complexity: O(n**2), space complexity: O(1)
    public static void getByBruteForce(int [] A){
        int howMany = 0;
        int mostCommon = 0;
        for( int i = 0; i < A.length; i++ ){
            int head = A[i];
            int cnt = 0;
            for( int j = i ; j < A.length; j++){
                if( head == A[j] ){
                    cnt ++;
                }
            }
            if( cnt > howMany ) {
                mostCommon = head;
                howMany = cnt;
            }
        }
        System.out.println(mostCommon + " is most common element. It appeared " + howMany + " times.");
    }

    // time complexity: O(nlogn), space complexity: O(1)
    public static void getAfterSorting(int [] A){
        int howMany = 0;
        int mostCommon = 0;
        Arrays.sort(A);

        int cnt = 0;
        int head = A[0];
        for( int a : A ){
            if( head == a ){
                cnt ++;
            } else {
                if( cnt > howMany ){
                    howMany = cnt;
                    mostCommon = head;
                }
                cnt = 1;
                head = a;
            }
        }
        if( A[A.length-1] == A[A.length-2] ){
            if( cnt > howMany ){
                howMany = cnt;
                mostCommon = head;
            }
        }
        System.out.println(mostCommon + " is most common element. It appeared " + howMany + " times.");
    }

    // time complexity: O(n), space complexity: O(n)
    public static void getUsingHashMap(int [] A){
        HashMap<Integer, Integer> map = new HashMap<>();

        int mostCommon = A[0];
        for( int a : A ){
            if( !map.containsKey(a) ){
                map.put(a, 1);
            } else {
                map.replace(a, map.get(a) + 1 );
                if( map.get(mostCommon) < map.get(a) ){
                    mostCommon = a;
                }
            }
        }
        System.out.println(mostCommon + " is most common element. It appeared " + map.get(mostCommon) + " times.");
    }
}
