const mergeSort = (arr) => {
  if (arr.length < 2) return arr.splice(0, 1);
  else {
    const left = mergeSort(arr.slice(0, arr.length / 2));
    const right = mergeSort(arr.slice(arr.length / 2)); 
    const sortedArr = [];
    let i = 0, j = 0
    while (true) {
        if (i == left.length && j== right.length) {
            break
        }
        if(j==right.length || left[i] <= right[j]) {
            sortedArr.push(left[i])
            i++;
        }else{
            sortedArr.push(right[j])
            j++
        }
    }
    return sortedArr
  }
};
const arr2 = [0, 4, 3, 6, 2, 7, 8,0,0,10];
console.log(mergeSort(arr2));
