//  Template literal

// Do the following:
//- Define a variable named `username` using `const` keyword and assign your name as a value.

const username = "Sohail Shaik"

//- Define another variable named `bio` and assign a value `Learning to code`. Use `let` keyword to define the variable.

let bio = 'Learning to code'


let firstName = "Arya";
let lastName = "Stark";

// Do the following using `+` operator

 // - Alert message saying `I am [username] and my bio is [bio]`. Replace square brackets with the value of variable.

 alert("I am" + username + "and my bio is" + bio)

  //- Alert the message `I'm Arya Stark of Winterfell` using the variable name firstName and lastName.

  firstName = "Arya"
  lastName = "Stark"

  alert("I'm" +  firstName + lastName + "of Winterfell")

// Do the following using string template literal
  //- Alert message saying `I am [username] and my bio is [bio]`. Replace square brackets with the value of variable.

  alert(`I am ${username} and my bio is ${bio}`)

  //- Alert the message `I'm Arya Stark of Winterfell` using the variable name firstName and lastName.

  alert(`I'm ${firstName} ${lastName} of Winterfell`)


let amount = 200;
const taxPercent = 10;

// Use string template literal:
  //- Alert a message saying `The total amount is [amount]

  alert(`The total amoutn is ${amount}`)

    //the tax amount is [(amount * taxPercent) / 100]

    alert(`the tax amount is ${amount * taxPercent / 100}`)
  
  //- Above message should be in two lines

// Use double quote and escape character:
  //- Alert a message saying `The total amount is [amount]

  alert("The total amount is \n" + amount )

   // the tax amount is [(amount * taxPercent) / 100]

   alert("the tax amount is " + "\n the tax amount is " + (amount * taxPercent) / 100 )
  
  //- Above message should be in two lines

