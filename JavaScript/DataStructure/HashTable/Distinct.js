/**
 * Distinct: Compute number of distinct values in an array.
 * Reference: Codility.com
 * Description:
 * Write a function
 class Solution { public int solution(int[] A); }
 that, given a zero-indexed array A consisting of N integers, returns the number of distinct values in array A.

 Assume that:
 N is an integer within the range [0..100,000];
 each element of array A is an integer within the range [−1,000,000..1,000,000].
 For example, given array A consisting of six elements such that:

 A[0] = 2    A[1] = 1    A[2] = 1
 A[3] = 2    A[4] = 3    A[5] = 1
 the function should return 3, because there are 3 distinct values appearing in array A, namely 1, 2 and 3.

 Complexity:
 expected worst-case time complexity is O(N*log(N));
 expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).
 Elements of input arrays can be modified.
 */

function distinctSize (arr) {
    const set = new Set(arr)
    return set.size
}

const A = [1,1,2,2,3,4,4,5,5]

console.log(distinctSize(A))
