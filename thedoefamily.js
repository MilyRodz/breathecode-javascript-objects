var person = {
    name: "John",                //String
    lastname: "Doe",
    age: 35,                     //Number
    gender: "male",
    lucky_numbers: [ 7, 11, 13, 17], //Array
    significant_other: person2   //Object, yes the same variable/object defined after
};



var person2 = {
    name: "Jane",
    lastname: "Doe",
    age: 38,
    gender: "female",
    lucky_numbers: [ 2, 4, 6, 8],
    significant_other: person
};


var family = {
    lastname: "Doe",
    members: [person, person2]   //Array of objects, don't forget to add Jimmy
};


function addAllFamilyLuckyNumbers(anArray){
  var sumOfAllLuckyNumbers = 0; //sumOfAllLuckyNumbers is a number, the sum of all lucky numbers.
    
  var membersOfFamily = anArray.members; 

  for (let i = 0; i < membersOfFamily.length; i++) { 
      for(let j = 0; j < membersOfFamily[i].lucky_numbers.length; j++){
        sumOfAllLuckyNumbers += membersOfFamily[i].lucky_numbers[j];
        console.log("sumOfAllLuckyNumbers");
        console.log(sumOfAllLuckyNumbers);
      }  
  }

  //To-Do: loop and add; consider nested loops
  //Hint: use the anArray variable to get all of the lucky numbers
  
  return sumOfAllLuckyNumbers;
}

//Enter all your code here:

var person3 = {
    name: "Jimmy",
    lastname: "Doe",
    age: 13,
    gender: "male",
    lucky_numbers: [ 1, 2, 3, 4],
    significant_other: null
};

function addPersonToFamily (person, family) {
    family.members.push(person);
    return family;
}

function modifyLastLuckyNumber (person) {
    person.lucky_numbers.splice(3, 1, 33);
    return person;
}

//Do not make changes below:
console.log(addAllFamilyLuckyNumbers(family.members)); 
