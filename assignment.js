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
    var smallest = name;
    for (var i = 0; i < name.length; i++){
        var currentName = name[i];
        if(currentName < smallest){
            smallest = currentName;
        }
    }
    return smallest;
}
var smallFriend = smallNumber(['Iv','nipunReza','nazmul','babu','siddika','tasmim']);
console.log(smallFriend);



// brickCalculator

function brickCalculator(firstheight, middleheight, lastheight){
   var brickTotal1 = firstheight*15*1000;
   
   var brickTotal2  = middleheight*12*1000;
   
   var brickTotal3 = lastheight*10*1000;
  
   var total = brickTotal1 + brickTotal2 + brickTotal3;
    
    return total;
}
var result = brickCalculator(10,10,5)
console.log(result);


   