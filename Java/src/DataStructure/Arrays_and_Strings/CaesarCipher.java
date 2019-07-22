package DataStructure.Arrays_and_Strings;

/**
 * Caesar Cipher(시저 암호)
 * Reference1: http://tryhelloworld.co.kr/challenge_codes/22
 * Reference2: https://en.wikipedia.org/wiki/Caesar_cipher
 * Description
 * replace each plaintext letter with a different one a fixed number of places down the alphabet
 * 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다.
 * A를 3만큼 밀면 D가 되고 z를 1만큼 밀면 a가 됩니다. 공백은 수정하지 않습니다.
 * 보낼 문자열 s와 얼마나 밀지 알려주는 n을 입력받아 암호문을 만드는 ceasar 함수를 완성해 보세요.
 * “a B z”,4를 입력받았다면 “e F d”를 리턴합니다.
 */
public class CaesarCipher {
    public String caesar(String s, int n) {
        String result = "";

        String lower = "abcdefghijklmnopqrstuvwxyz";
        String upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        char [] cArr = s.toCharArray();
        for( int idx = 0; idx < s.length(); idx++ ){
            String tmp = String.valueOf(cArr[idx]);
            if( tmp.equals(" ") ) {
                result += " ";
            }else if( lower.contains(tmp) ) {
                int jdx = lower.indexOf(tmp);
                int newIdx = (jdx + n) % 26;
                char charTemp = lower.charAt(newIdx);
                result += String.valueOf(charTemp);
            } else {
                int jdx = upper.indexOf(tmp);
                int newIdx = (jdx + n) % 26;
                char charTemp = upper.charAt(newIdx);
                result += String.valueOf(charTemp);
            }
        }

        return result;
    }

    public static void main(String[] args) {
        CaesarCipher c = new CaesarCipher();
        System.out.println("s는 'a B z', n은 4인 경우: " + c.caesar("a B z", 4));
    }
}
