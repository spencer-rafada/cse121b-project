// PROJECT: Display Astronauts in space

// Create img HTML element, set its attribute, append to body
const galaxyImage = document.createElement('img')
galaxyImage.setAttribute('src', 'images/galaxy.jpg')
galaxyImage.setAttribute('alt', 'Galaxy')
document.body.appendChild(galaxyImage)

// Declare date variable to hold current date
const date = new Date()

// Declare another variable to getDay from date
let dayToday = date.getDay()

// Declare message to hold messsage of the day
let messageOfTheDay = ""

// Declare message1 to hold dayToday
let messageToday = ""

// Using conditionals, print Monday - Tuesday: lazy, Wednesday - Thursday Almost there, Friday - Saturday: YAY, Sunday - monday again
if (1 <= dayToday && dayToday <= 2)
{
    messageOfTheDay = "When is it going to be the weekends?"
}
else if (3 <= dayToday && dayToday <= 4)
{
    messageOfTheDay = "You're almost there!"
}
else if (5 <= dayToday && dayToday <= 6)
{
    messageOfTheDay = "It's the weekend!"
}
else
{
    messageOfTheDay = "Weekend is going to end soon. Enjoy it while it last!"
}
// Using conditionals, set the message1 to display dayToday
switch(dayToday)
{
    case 0:
        messageToday = "Sunday"
        break
    case 1:
        messageToday = "Monday"
        break
    case 2:
        messageToday = "Tuesday"
        break
    case 3:
        messageToday = "Wednesday"
        break
    case 4:
        messageToday = "Thursday"
        break
    case 5:
        messageToday = "Friday"
        break
    case 6:
        messageToday = "Saturday"
        break
}

// OUTPUT FOR SECTION 1 //

// Assign message1 to HTML element ID of message
document.getElementById('message').textContent = messageOfTheDay
// Assign message2 to HTML element ID of message2
document.getElementById('message2').textContent = messageToday

// SECTION 2 //

// Declare variable to store a list of astronauts
let arrayAstronauts = {}

// Fetch url
const url = "http://api.open-notify.org/astros.json"

// Declare function to output
function output()
{
    fetch(url)
    .then((response) => {
        if (response.ok)
        {
            console.log("Success")
            return response.json()
        }
        else
        {
            console.log("Error: ", response)
        }
    })
    // add then to store list to variable
    .then((data) => {
        arrayAstronauts = data
        console.log(arrayAstronauts)
        //console.log(arrayAstronauts.number)
    })
    .then(() => {
        document.getElementById('astronauts').innerHTML = ""
        let astroInSpace = document.getElementById('astronauts')
        for(let i = 0; i < arrayAstronauts.people.length; i++)
        {
            let astroName = document.createElement('dt')
            let craftName = document.createElement('dd')
            astroName.textContent = arrayAstronauts.people[i].name
            craftName.textContent = arrayAstronauts.people[i].craft
            astroInSpace.append(astroName)
            astroInSpace.append(craftName)
        }
    })
}

// Event listener 
document.getElementById('showAstronauts').addEventListener('click', output)