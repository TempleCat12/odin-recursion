function fibs(num) {
  let arr = [];
  for (let index = 0; index < num; index++) {
    if (index < 3) arr.push(index);
    else arr.push(arr[index - 1] + arr[index - 2]);
  }
  return arr;
}

function fibsRec(num, arr = [0, 1]) {
    if(num < arr.length) return arr
    else return fibs(num,[...arr,[arr[num-1] + arr[num-2]]])
    
}
console.log(fibsRec(8));
