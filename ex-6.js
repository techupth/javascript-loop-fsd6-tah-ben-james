// Exercise #6: Reverse the String
let companyName = "TechUp Thailand";
let reversedCompanyName = "";

// Start coding here

//for (let i = companyName.length - 1; i >= 0; i--) {
//reversedCompanyName += companyName[i];
//}

//console.log(reversedCompanyName);
for (let i = 0; i < companyName.length; i++) {
  reversedCompanyName = companyName[i] + reversedCompanyName;
}

console.log(reversedCompanyName);
