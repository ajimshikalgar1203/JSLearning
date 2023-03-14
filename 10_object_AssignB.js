let bankSbi = {
        name : "SBI Bank",
        ifsc : "SBIB00945",
        accountNo :"6803387168",
        branchCode : "sbik001"
}
let bankLocation = {
    street : "P B Road",
    city : "karad",
    PinCode : "415110"
}

console.log("============clone objects using objects.assign============");
const clonedBankSbi = Object.assign({}, bankSbi);
const clonedBankLocation = Object.assign({}, bankLocation);
console.log('Cloned Bank Sbi:', clonedBankSbi, bankLocation);

console.log("============clone objects using spread Operator=============");
// const clonedBankSbi2 = { ...bankSbi };
// const clonedBankLocation2 = { ...bankLocation };
const clone = {
    ...bankSbi,...bankLocation,
};
console.log(clone);

let rateOfInterest = {
    homeLoanInterest : "7.5",
    personalLoanInterest : "9.0",
    dueInterest : "10.0"
}

console.log("============Merge bankSbi,bankLocation and rateOfInterest=============");

const sbiDetails = {
    ...bankSbi,...bankLocation,...rateOfInterest,
}

console.table(sbiDetails );

console.log("============Transverse the merged object =============");

console.log(clonedBankSbi);       
console.log(clonedBankLocation);
console.log(rateOfInterest);