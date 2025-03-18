/*Given an array nums, return true* if the array was originally sorted in non-decreasing order, then rotated some number of positions (including zero)*. Otherwise, return false.
There may be duplicates in the original array.
Note: An array A rotated by x positions results in an array B of the same length such that B[i] == A[(i+x) % A.length] for every valid index i.
 
Example 1:


Copy
Input: nums = [3,4,5,1,2]
Output: true
Explanation: [1,2,3,4,5] is the original sorted array.
You can rotate the array by x = 3 positions to begin on the element of value 3: [3,4,5,1,2].
Example 2:


Copy
Input: nums = [2,1,3,4]
Output: false
Explanation: There is no sorted array once rotated that can make nums.
Example 3:


Copy
Input: nums = [1,2,3]
Output: true
Explanation: [1,2,3] is the original sorted array.
You can rotate the array by x = 0 positions (i.e. no rotation) to make nums.
*/

function check(nums: number[]): boolean {
    let count:number=0;
       if(nums.length===0 || nums.length===1){
        return true;
       }else{
        for(let i:number=0;i<nums.length;i++){
          if(nums[i]>nums[(i+1)%(nums.length)]){
            count++;
          }
        }
        if(count>1){
          return false;
        }else{
          return true;
        }
       }
      };
  
  check([1,2,3])