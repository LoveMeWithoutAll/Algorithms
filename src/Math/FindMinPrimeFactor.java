package Math;

/**
 * Created by ys on 2017-04-04.
 * Find minimum Prime factor
 * input: Long type number
 * If input is prime number, return 1
 * If it's not prime number, return minimum prime factor
 * Maximum input > java Integer.MAX_VALUE
 * 0 < Minimum input

 */
class FindMinPrimeFactor {
    public static void main(String [] args){
        System.out.println(getMinPrimeFactor(27));
    }

    private static int getMinPrimeFactor(long number){

        // assertion
        if( number < 1 ) return -1;

        for( int idx = 2 ; idx <= Math.sqrt(number); idx++){
            if( number % idx == 0 ) return idx;
        }

        return 1;
    }
}
