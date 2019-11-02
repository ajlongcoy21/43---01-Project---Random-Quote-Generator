/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

/*

Define the quotes array. The quotes array is a an array of objects that contains the following information:

quote - quote from a person, movie, song, etc.
source - name of quote origin (persom, movie name, song title, etc.)
citation - where the quote was made (movie, song, speech, etc.)
year - year the quote was made

*/
var quotes = [

  {quote: "I feel the need - the need for speed!", source: "Top Gun", citation: "Movie", year: 1986, tag: "Fun"},
  {quote: "May the Force be with you.", source: "Star Wars", citation: "Movie", year: 1977, tag: "Motivation"},
  {quote: "You can't handle the truth!", source: "A Few Good Men", citation: "Movie", year: 1992, tag: "Suspense"},
  {quote: "You must be shapeless, formless, like water. When you pour water in a cup, it becomes the cup. When you pour water in a bottle, it becomes the bottle. When you pour water in a teapot, it becomes the teapot. Water can drip and it can crash. Become like water my friend.", source: "Bruce Lee", citation: "Interview", year: null, tag: "Inspiration"},
  {quote: "Happiness is when what you think, what you say, and what you do are in harmony.", source: "Mahatma Gandhi", citation: "Speech", year: null, tag: "Inspiration"}

];

/***
 * `getRandomQuote` function
 * 
 * The getRandomQuote fuction will return a random quote from the quotes array. It accomplishes this task
 * by generating a random number from 0 to the number of quotes in the array and returning that index of the 
 * array as the random quote.
 * 
***/

function getRandomQuote()
{
  //Get a random number between 0 and the number of quotes in the quotes array.

  var randomNumber = Math.floor(Math.random() * (quotes.length));

  // return the random quote from the quotes array.
  return quotes[randomNumber];
}

/***
 * `getRandomColorRGBValue` function
 * 
 * The getRandomColorRGBValue fuction will return a random value from 0 - 255 for the rgb scale.
 * 
***/

function getRandomColorRGBValue()
{
  //Get a random number between 0 and 255.

  var randomNumber = Math.floor(Math.random() * (255));

  // return the random number.
  return randomNumber;
}

console.log(getRandomQuote());

/***
 * `printQuote` function
 * 
 * the printQuote function will setup and print the random quote selected to the webpage. Each quote is guranteed
 * to have a quote and source. We then check to see if the random quote has a citation and year and add to the 
 * htmlOutput string as needed.
 * 
***/

function printQuote()
{
  //Get a random quote
  var randomQuote = getRandomQuote();

  //Define the htmlOutput string
  var htmlOutput = '';

  //Setup the html for hte quote and the source
  htmlOutput += '<p class = "quote">' + randomQuote.quote + '</p>';
  htmlOutput += '<p class="source">' + randomQuote.source;

  //Check to see if the quote has a citation
  if (randomQuote.citation !== null) 
  {
    htmlOutput += '<span class="citation">' + randomQuote.citation + '</span>';
  }

  //Check to see if the quote has a year
  if (randomQuote.year !== null) 
  {
    htmlOutput += '<span class="year">' + randomQuote.year + '</span>';
  }

  //Check to see if the quote has a tag
  if (randomQuote.tag !== null) 
  {
    htmlOutput += '<p class="tag"><span>' + randomQuote.tag + '</span></p>';
  }

  //Close the htmlOutput string
  htmlOutput += '</p>';

  var outputDiv = document.getElementById('quote-box');
  outputDiv.innerHTML = htmlOutput;
  
  //Get random numbers for the rgb values and create string 
  var red = getRandomColorRGBValue();
  var green = getRandomColorRGBValue();
  var blue = getRandomColorRGBValue();
  var rgbValue = "rgb(" + red + "," + green + "," + blue + ")";

  //Change the background color of HTML page
  document.getElementById("html-body").style.backgroundColor = rgbValue;
}

//Create an interval to automatically change the quote every 20 seconds
var intervalID = window.setInterval(printQuote, 20000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE OF CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);