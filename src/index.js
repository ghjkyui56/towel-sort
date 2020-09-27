
// You should implement your task here.

module.exports = function towelSort (matrix) {
  t = [];
  if (matrix === undefined){
    return [];
  }
  for (let i = 0; i<matrix.length;i++){
    for(let k = 0;k<matrix[i].length;k++){
      if(i%2===0){
        t.push(matrix[i][k]);
      } else {
        t.push(matrix[i][matrix[i].length - k - 1]);
      }
      
    }
  }
  return t;
}
