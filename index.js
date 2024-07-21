//document.getElementById("count-el").innerText = 5

//let firstBatch = 5
//let secondBatch = 9
//let count = firstBatch + secondBatch

//console.log(count)

/*let myAge = 21
let humanDogRatio = 7

let count = myAge * humanDogRatio
console.log(count) */

/*let bonusPoints = 50
bonusPoints = bonusPoints + 50

bonusPoints = bonusPoints - 75

bonusPoints = bonusPoints + 45

console.log(bonusPoints) */
//initialized as 0
//listen the clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count()

//camelcase capitalize the second word first letter
let countEL = document.getElementById("count-el") //pass an argument
let saveEL = document.getElementById("save-el")
console.log(countEL)

let count = 0

function increment() {
    
    count += 1
    countEL.textContent = count

} 

// create a function called save()

function save()
{

    let countStr = count + " - "
    saveEL.textContent += countStr

    console.log(count)

} 

  //  let username = "per"
   // console.log(username)


  //  let message = "You have three new notifications"
  //  console.log(message)
 //   console.log(message +", " + username + "!")

 //let messageToUser = message + ", " + username + "!"
 //console.log(messageToUser)

 let name = "Fatima Ali"
 let greeting = "Hi! I am "

 let myGreeting = greeting + name
 //console.log(myGreeting)


 let points = 4
 let bonusPoints = "10"

 let totalPoints = points + bonusPoints

 //console.log(totalPoints)


 console.log(4 + 5)
 console.log("2" + "4")
 console.log("5" + 1)
 console.log(100 + "100")




/*function countdown() {
    console.log(5)
    console.log(4)
    console.log(3)
    console.log(2)
    console.log(1)
}

countdown()

//to less the code we use functions

countdown()

function logsOut() {
    console.log(42)

}


logsOut()

let lap1 = 34
let lap2 = 33
let lap3 = 36

function summation() {
    let sum = lap1 + lap2 + lap3
    console.log(sum)
}

summation()

let lapsCompleted = 0

function incrementLaps() {
    lapsCompleted = lapsCompleted + 1
    lapsCompleted = lapsCompleted + 1
    lapsCompleted = lapsCompleted + 1

    console.log(lapsCompleted)
}

incrementLaps()
incrementLaps()
incrementLaps() */

