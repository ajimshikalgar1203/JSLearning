console.log("==================Constuctor function=========================");
function bank (bankName, location, ifscCode, branchCode){
      this.bankName = bankName;
      this.location = location;
      this.ifscCode = ifscCode;
      this.branchCode = branchCode;
      this.showDtails = function(){
        console.log(`Bank Details: ${this.bankName}, ${this.location}, ${this.ifscCode}, ${this.branchCode}`);
    }
}
const yesBank = new bank("yesBank", "Wakad", "YESBN0004596","YES0115");
yesBank.showDtails(yesBank);
const sbiBank = new bank("SBI Bank", "Pune", "SBIN0004597","SBI0011")
sbiBank.showDtails(sbiBank);
const mahBank = new bank("MAHARASHTRA Bank", "karad", "MAHB0004598","MAHB0012")
mahBank.showDtails(mahBank);
const axisBank = new bank("AXIS Bank", "Mumabi", "AXIS0004597","AXS0014")
axisBank.showDtails(axisBank);

console.log("==================Adding Data Member==========================");
bank.prototype.openTime = "9 AM IST";
bank.prototype.closeTime = "6 PM IST";

console.log(`Open Time:${bank.prototype.openTime} & Close Time: ${bank.prototype.closeTime} of object sbiBank`);
console.log(`Open Time:${bank.prototype.openTime} & Close Time: ${bank.prototype.closeTime} of object axisBank`);
console.log("---------------------------------------------------------------");
console.log(`Bank Name: ${yesBank.bankName}, Branch Code: ${yesBank.branchCode} and Open Time:${bank.prototype.openTime}`);