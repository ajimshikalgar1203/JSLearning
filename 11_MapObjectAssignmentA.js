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

const mapOfBank = new Map();
mapOfBank.set("axis", axisBank);
mapOfBank.set("sbi", sbiBank);
mapOfBank.set("icici", iciciBank);
mapOfBank.set("kotak", kotakBank);
mapOfBank.set("hdfc", hdfcBank);
mapOfBank.set("panjab", panjabBank);


const element = mapOfBank.get("axis");
const keyOfMap = mapOfBank.keys();
for (const key of keyOfMap) { 
    const element = mapOfBank.get(key)
    console.log(key, element);
}

console.log("==================Transverse the map===================");
const keyMap = mapOfBank.keys();
for (const key of keyMap) {
    const element = mapOfBank.get(key)
    console.log(" Bank Name:", element.bankName,",  Account No:",element.accountNo,",  Interest Rate:",element.interestRate);
}