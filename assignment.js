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

function brickCalculator(depth){
    if(depth<=10){
        brick = depth * 1000 *15;
    }
    else if(depth<=20){
        var firstPart = 10 * 1000 * 15;
        var remaining = depth - 10;
        var secondPart = remaining * 1000 * 12;
        brick = firstPart + secondPart;
    }
    else{
        var firstPart = 10 * 1000 * 15;
        var secondPart = 10 * 1000 * 12;
        var remaining = depth - 20;
        var thirdPart = remaining *1000 * 10;
        brick = firstPart + secondPart + thirdPart;
    }
    return brick;
}
var count = brickCalculator(25);
console.log(count);

   