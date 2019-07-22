package Math;

/**
 * Created by ys on 2017-03-04.
 */
public class IsPrimeNumber {
    
    public static void main(String[] args){
        if( isPrimeNumber(100) ) {
            System.out.println("It's prime number.");
        } else {
            System.out.println("It isn't prime number.");
        }
    }

    public static boolean isPrimeNumber(int number){
        if( number <= 2 ) return false;
        for( int idx=2; idx < number/2; idx++){
            if( number % idx == 0 ) return false;
        }
        return true;
    }
}
