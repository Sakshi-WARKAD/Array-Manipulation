const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
    data.forEach(
      (person)=>{
        if(person.profession==="developer"){
          console.log(person)
        }
      }
    )

}

// 2. Add Data
function addData() {
  let newname = prompt("Enter the name:");
  let newage = parseInt(prompt("Enter the name:"));
  let newprofession = prompt("Enter the name:");
  data.push(
    {
      name:newname,
      age:newage,
      profession:newprofession
    }
  );
  console.log(data);
} 


// 3. Remove Admins
function removeAdmin() {}

// 4. Concatenate Array
function concatenateArray() {
  let newArr = [
    { name: "sakshi", age: 32, profession: "data analyst" },
    { name: "Komal", age: 37, profession: "java developer" },
  ];
  let concatedArray = data.concat(newArr);
  console.log(concatedArray);
  
}

// 5. Average Age
function averageAge() {
  let avgval= 0;
  for(let i=0; i<data.length; i++){
    avgval = avgval + data[i].age;
  }
  console.log(avgval);
}

// 6. Age Check
function checkAgeAbove25() {
  data.forEach(
    (person)=>{
      if(person.age>=25){
        console.log(person.age);
      }
    }
  )

}

// 7. Unique Professions
function uniqueProfessions() {}

// 8. Sort by Age
function sortByAge() {}

// 9. Update Profession
function updateJohnsProfession() {}

// 10. Profession Count
function getTotalProfessions() {}
