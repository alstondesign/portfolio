var Kostner = {0:"Kostner", 1:1025, 2:1100, 3:1200};
var Lockwood = {0:"Lockwood", 1:1525};
var Tripp = {0:"Tripp", 1:1100, 2:1250, 3:1025};

function calcRent()
{
    var totalDoors = Object.values(this).length-1;
    var sumAmount = 0;
    var nameOfProp = this[0];
    for (i=1; i < totalDoors; i++)
    {
        sumAmount += this[Object.keys(this)[i]];
    } 
   console.log(this[0]+ " Total rent = " + sumAmount);  
}

Kostner.totalRent = calcRent;
Lockwood.totalRent = calcRent;
Tripp.totalRent = calcRent;


Kostner.totalRent();