console.log("=====================Objects Created=====================");
class Bank {
    constructor (bankName, location, accountNo, ifsc, interestRate){
     this.bankName = bankName;
     this.location = location;
     this.accountNo = accountNo;
     this.ifsc = ifsc;
     this.interestRate = interestRate;
    } 
}

const axisBank = new Bank("AXIS Bank", "Karad", "68030468","AXIS0065",9.5);
const sbiBank = new Bank("SBI Bank", "Malkapur", "43658709", "SBIB0004", 7.9);
const iciciBank = new Bank("ICICI Bank", "Sangli", "21654306", "ICICB005", 11.4);
const kotakBank = new Bank("KOTAK Bank", "Pune", "6785432", "KOTA0023", 10);
const hdfcBank = new Bank("HDFC Bank", "Karad", "20100283", "HDFCB2239", 12.5);
const panjabBank = new Bank("PANJAB Bank", "Mumbai", "680303871", "PNJB3356", 8.7);

const setOfBanks = new Set();
setOfBanks.add(axisBank);
console.log(axisBank);
setOfBanks.add(sbiBank);
console.log(sbiBank);
setOfBanks.add(iciciBank);
console.log(iciciBank);
setOfBanks.add(kotakBank);
console.log(kotakBank);
setOfBanks.add(hdfcBank);
console.log(hdfcBank);
setOfBanks.add(panjabBank);
console.log(panjabBank);

console.log("=====================Created and transverse set=====================");
for (const bank of setOfBanks) {
    console.log(`Bank Name:`,bank.bankName, `,Bank location:`,bank.location);
}