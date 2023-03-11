console.log("--------------------------Step 01----------------------");
class Vehicle {
    constructor(carName, Company, fuelType, transmissionType, color){
         this.carName = carName;
         this.Company = Company;
         this.fuelType = fuelType;
         this.transmissionType = transmissionType;
         this.color = color;
    }
}

 const safari = new Vehicle("Safari", "Tata", "Petrol", "Automatic", "White");
 console.log(safari);
 const XUV700 = new Vehicle("XUV 700", "Mahindra", "Diesel", "Automatic", "Blue");
 console.log(XUV700);
 const swift = new Vehicle("Swift", "Suzuki", "Diesel", "Manual", "Greyy");
 console.log(swift);
 const carens = new Vehicle("Carens", "Kia", "Petrol", "Manual", "White")
 console.log(carens);
 const thar = new Vehicle("Thar", "Mahindra", "Diesel", "Automatic", "Black")
 console.log(thar);

 console.log("--------------------------Transverse Array----------------------");
 const arrayOfVehicle = [safari,XUV700,swift,carens,thar];
 for (const element of arrayOfVehicle) {
    console.log(`Deatils of Vehicle : ${element.carName}, ${element.Company},${element.fuelType},${element.transmissionType},${element.color}`);
 }

 console.log("--------------------------Step 02----------------------");
 class college {
      constructor(collegeName, city, university, department){
        this.collegeName = collegeName;
        this.city = city;
        this.university = university;
        this.department = department;
      }
 }

 const pvpit = new college ("PVPIT","Pune","Pune Universiry","Computer science")
 console.log(pvpit);
 const dacoe = new college ("DACOE","Karad","Shivaji University","Mechanical Engg.")
 console.log(dacoe);
 const coep = new college ("COEP","Aurangabad","BATU","ENTC")
 console.log(coep);
 const pccoe = new college ("PCCOE","Pune","Pune Universiry","Computer science")
 console.log(pccoe);

 console.log("--------------------------Step 03----------------------");
 function transverseObject(collegeName){
    for (const key in collegeName) {
        if (Object.hasOwnProperty.call(collegeName, key)) {
            const element = collegeName[key];
            console.log(`${key}:${element}`);
        }
    }
 }

 transverseObject(pvpit);
 console.log("-----------------------------------------");
 transverseObject(dacoe);
 console.log("-----------------------------------------");
 transverseObject(coep);
 console.log("-----------------------------------------");
 transverseObject(pccoe);
 console.log("-----------------------------------------");

 console.log("--------------------------Step 04----------------------");
 function isprime(num){
    if (num<=1) {
        return false;
    }
    for (let index = 0; index <=num ; index++) {
         if (num%2==0) {
            return false;
         }
         return true;
    }
 }
 console.log( `Given number is prime :`,(11));