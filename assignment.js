//  feet to miles

function feetToMile(feet){
    var mile= feet/ 5280;
    var  outPut = Math.round(mile);
    return outPut;
}
var result = feetToMile(15000);
console.log(result);
  
// woodcalculator

function woodCalculator(chair, table, bed){
    var chairCount = chair *1;
    var tableCount = table*3;
    var bedCount = bed *5;
    var totalCount= chairCount + tableCount + bedCount;
    return totalCount;
}
var total = woodCalculator(14,5,12)
console.log(total)


 

// tinyFriend

function smallNumber(name){
    var small = name;
    for (var i = 0; i < name.length; i++){
        var currentName = name[i];
        if(currentName < small){
            small = currentName;
        }
    }
    return small;
}
var smallFriend = smallNumber(['Iv','nipunReza','nazmul','babu','siddika','tasmim']);
console.log(smallFriend);



// brickCalculator

function brickCalculator(floor1, floor2, floor3){
   var sum1 = floor1*15*1000;
   
   var sum2 = floor2*12*1000;
   
   var sum3 = floor3*10*1000;
  
   var total = sum1+sum2+sum3
    
    return total;
}
var result = brickCalculator(10,10,40)
console.log(result);


   