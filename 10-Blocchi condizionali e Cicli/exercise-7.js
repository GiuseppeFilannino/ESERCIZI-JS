function sumUntil(maxValue) {
newArray=[];
 baseNum=1;


do{
  newArray.push(baseNum);
  baseNum++;
} while(baseNum <= maxValue);




let sum=0;
for(let i= 0; i < newArray.length; i++){
  sum += newArray[i];
}
 return sum;

}







// let array =[1,2,3,4,5];
// let result = array.reduce((sum, current) => sum + current, 0);

console.log(sumUntil(5));
console.log(newArray);