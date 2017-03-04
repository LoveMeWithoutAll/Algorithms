package Math;

/**
 * Created by ys on 2017-03-04.
 */
public class SieveOfEratosthenes {
    public static void main(String [] args){
        boolean [] primes = sieveOfEratosthenes(100);

        for( int idx = 2; idx < primes.length; idx ++){
            if( primes[idx] == false ){
                System.out.println(idx + " is prime number");
            }
        }
    }

    public static boolean[] sieveOfEratosthenes(int max){

        boolean [] flags = new boolean[max+1];
        init(flags);
        int prime = 2;

        while( prime < max){
            crossOff(flags, prime);
            prime = getNextPrime(flags, prime);
        }

        return flags;
    }

    private static void init(boolean [] flags){
        flags[0] = true;
        flags[1] = true;
    }

    private static void crossOff(boolean[] flags, int prime){
        for( int idx=2; idx < flags.length ; idx++ ){
            if( idx * prime > flags.length -1 ) continue;
            flags[idx*prime] = true;
        }
    }

    private static int getNextPrime(boolean[] flags, int prime){
        int idx = prime + 1;

        while( true ){
            if( idx > flags.length-1  ) return idx;
            if( flags[idx] == false ){
                return idx;
            }
            idx++;
        }
    }
}
