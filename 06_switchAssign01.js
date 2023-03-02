function monthOfYear(monthNum){
    switch (monthNum) {
     case 1:
         console.log(`The first month is: January`);
         break;
     case 2: 
         console.log(`The second month is: February`);
         break; 
     case 3: 
         console.log(`The third month is: March`);
         break; 
     case 4:
        console.log(`The fourth month is: April`);         
        break; 
     case 5: 
        console.log(`The fifth month is: May`);        
        break;
     case 6:  
        console.log(`The sixth month is: June`);         
         break;
     case 7:
        console.log(`The seventh month is: July`);        
         break;  
     case 8:
        console.log(`The eighth month is : August`);        
         break;
     case 9:
        console.log(`The nineth month is : September`);        
         break;         
     case 10:
        console.log(`The tenth month is : Octomber`);        
         break;
     case 11:
        console.log(`The eleventh month is : November`);        
         break;
     case 12:
        console.log(`The twelveth month is : December`);        
         break;
         
     default:
         console.log(`Invalid Month :${monthNum}`);
         break;
    }
 }
 monthOfYear(2);
 monthOfYear(5);
 monthOfYear(12);
 monthOfYear(15);
 monthOfYear(100);
 