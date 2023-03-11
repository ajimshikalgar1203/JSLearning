let professor = {
    name: "Mohit ",
    lastName: "Sharma",
    age: 32,
    collegeName: "DACOE",
    id: 774456,
    number: 7447889865,
     degrees: {
        engineering: "CSC",
        PHD: 'Adv Computing',
     },
        certificates : ['Hacker Rank Participation','Certificate in IFE course','Certificate in Adv Programming'],
        totaleDegrees : function(){
             return `Teacher degrees are: Graduation in "${this.degrees.engineering}" & PHD in "${this.degrees.PHD}"`
        }
    }

 console.log("------------------Property added-----------------");
 console.log(professor);
 console.log("------------------Nested object degrees-----------------");
 console.log(professor.degrees);
 console.log("------------------added array of certificates-----------------");
 console.log(professor.arrayCertificates);
 console.log("------------------function as a value return as string-----------------");
 let result = professor.totaleDegrees();
 console.log(result);
 console.log("------------------new property-----------------");
 professor.totalExperiance = "14 years";
 console.log(`Professors total experiance is: ${professor.totalExperiance}`);
 console.log("------------------modify existing property-----------------");
 console.log(`Professor Id is ${professor.id}`);
 professor.id = "67843";
 console.log(`Professor new Id is ${professor.id}`);
 console.log("------------------Add new cerficates----------------");
  professor.certificates.push("Oracle certificate")
  console.log(professor.certificates); 
 console.log("------------------Last element of array-----------------");
 console.log(`Last element of an array is: ${professor.certificates[professor.certificates.length-1]}`);

