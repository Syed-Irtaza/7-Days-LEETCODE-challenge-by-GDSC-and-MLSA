/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {//filter works on true/false and filter the content on the basis of true/false (condition)
let nr=[]
for(let i=0;i<arr.length;i++){
    if(fn(arr[i],i)){
        nr.push(arr[i])//nr[i]=arr[i] didn't work because jahan condition match ni ho rhi thi wo walay indexes py khuch ni a rha tha
    }
}
    return nr
};