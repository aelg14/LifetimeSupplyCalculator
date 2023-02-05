function calculatePotatoes(user) {
    let numberOfWeeks = ((user.maxAge - user.currentAge) * 365 / 7);
    let totalPotatoes = Math.floor(numberOfWeeks * user.potatoPerWeek);
    if (totalPotatoes < 10000) {
      return `${user.name} has ${user.currentAge} years and will eat a total of ${totalPotatoes} potatoes until the age of ${user.maxAge}. That's not a lot.`;
    } else if (totalPotatoes >= 10000 && totalPotatoes <= 15000) {
      return `${user.name} has ${user.currentAge} years and will eat a total of ${totalPotatoes} potatoes until the age of ${user.maxAge}. That's a moderate amount.`;
    } else {
      return `${user.name} has ${user.currentAge} years and will eat a total of ${totalPotatoes} potatoes until the age of ${user.maxAge}. That's a lot of potatoes!`;
    }
  }
  
  let user1 = {
    name: "Alicia",
    currentAge: 20,
    maxAge: 80,
    potatoPerWeek: 4
  };
  
  let user2 = {
    name: "Jose",
    currentAge: 25,
    maxAge: 90,
    potatoPerWeek: 6
  };
  
  let user3 = {
    name: "Jake",
    currentAge: 30,
    maxAge: 75,
    potatoPerWeek: 3
  };
  
  let result1 = calculatePotatoes(user1);
  console.log(result1);
  
  let result2 = calculatePotatoes(user2);
  console.log(result2);
  
  let result3 = calculatePotatoes(user3);
  console.log(result3);
  
  document.getElementById("results").innerHTML = 
      `<p>${result1}</p>
      <p>${result2}</p>
      <p>${result3}</p>`;
// updates the content of the HTML element (div) to display the results.