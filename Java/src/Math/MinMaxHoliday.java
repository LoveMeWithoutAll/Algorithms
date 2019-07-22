package Math;

/**
 * Created by ys on 2017-03-21.
 * 문제: 실질 휴가일을 계산하시오
 * 설명
 *  N일의 휴가를 얻었다. 이 휴가는 한번에 연속해서 써야 한다.
 *  하지만 주말인 토요일과 일요일은 공휴일이다. 그러므로 주말은 실질 휴가일이 아니다.
 *  N일의 휴가를 갈 경우, 최소 실질 휴가일과 최대 실질휴가일을 구하라.
 *  단, 주말 외에 휴일은 없다고 가정한다.
 * 예시
 *  7일의 휴일을 받을 경우, 최소 실질 휴가일은 0, 최대 실질 휴가일은 2
 *  12일의 휴일을 받을 경우, 최소 실질 휴가일은 2, 최대 실질 휴가일은 4
 */
public class MinMaxHoliday {
    public static void main(String [] args){
        long [] answer = solution(16);
        for( long a : answer ){
            System.out.println(a);
        }

    }

    public static long[] solution(long n){

        //assertion
        if( n < 0 ) return new long [] {-1};
        if( n > Long.MAX_VALUE) return new long [] {-1};

        long [] answer = {0,0};

        int flag = (int)(n % 7);

        if( flag == 1 ){
            answer[0] = ( n / 7 ) * 2;
            answer[1] = ( n / 7 ) * 2 + 1;
        } else if (flag == 2 || flag == 3 || flag == 4 || flag == 5 ){
            answer[0] =  ( n / 7 ) * 2;
            answer[1] = ( n / 7 ) * 2 + 2;
        } else if ( flag == 6 ){
            answer[0] = ( n / 7 ) * 2 + 1;
            answer[1] = ( n / 7 ) * 2 + 2;
        } else if ( flag == 0) {
            answer[0] = ( n / 7 ) * 2;
            answer[1] = ( n / 7 ) * 2;
        }

        return answer ;
    }
}
