var startValue=10;
var endValue=20;
var total='';
function printAllValues(startValue,endValue){
   for(var start=startValue;start < endValue ;start++){
      total=total+start+",";
   }
}
printAllValues(startValue,endValue)
var allSequences = total.slice(0, -1);
console.log(allSequences);