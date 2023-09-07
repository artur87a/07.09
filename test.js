const names = ["Tom", "Eric", "Jessica", "Scott", "Anna", "Carl", "Elisabeth", "Benny", "Oliver", "Andy", "Jenny", "Ashley", "Erin", "Patrick"];

console.log(names.length);

const greeter = (hvorsomelst) => `Hello ${hvorsomelst}, have a good day!`;

for (let i = 0; i < names.length; i++) {  //i =0 det starter fra index 0 i names ,,,,  names.lenght - sier om hvor mye elementer vi har i names[]
    console.log(greeter(names[i]));
}