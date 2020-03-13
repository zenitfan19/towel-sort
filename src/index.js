module.exports = function towelSort (matrix) {
  if(!matrix || matrix.length === 0) {
    return [];
  } else {
    let resultArr = [];
    let reverse = false;
    for (let element of matrix) {
      if(Array.isArray(element)) {
        if(!reverse) {
          for (let arrElement of element) {
            resultArr.push(arrElement);
          }
        } else {
          for (let i = element.length-1; i >= 0; i--) {
            resultArr.push(element[i]);
          }
        }
        reverse = !reverse;
      } else {
        resultArr.push(element);
      }
    }
    return resultArr;
  }  
}
