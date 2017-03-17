package Recursive;

import java.util.LinkedList;

/**
 * Created by ys on 2017-03-17.
 */
public class Combination {

    public int getCombination(int n, int r){
        if( n == r || r == 0 ) return 1;
        if( 1 == n - r ) return n;
        return getCombination(n-1, r-1) + getCombination(n-1,r);
    }
}
