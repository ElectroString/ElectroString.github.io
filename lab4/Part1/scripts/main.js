
// Part 1
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

var storyText = `It was 94 fahrenheit outside, so :insertX: went for a walk. When they got to :insertY:, 
    they stared in horror for a few moments, then :insertZ:. Bob saw the whole thing, but was not surprised — :insertX: weighs 300 pounds, and it was a hot day.`;
    
var insertX = ["Willy the Goblin","Big Daddy","Father Christmas"];
var insertY = ["the soup kitchen","Disneyland","the White House"];
var insertZ = ["spontaneously combusted","melted into a puddle on the sidewalk","turned into a slug and crawled away"];

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}


randomize.addEventListener('click', result);

function result() {
  var newStory = storyText
  var xItem = randomValueFromArray(insertX);
  var yItem = randomValueFromArray(insertY);
  var zItem = randomValueFromArray(insertZ);
  newStory = newStory.replaceAll(":insertX:",xItem)
  newStory = newStory.replace(":insertY:",yItem)
  newStory = newStory.replace(":insertZ:",zItem)

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace("Bob",name)

  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14) + " stones";
    const temperature =  Math.round((5/9)*(94-32)) + " centigrade";

    newStory = newStory.replace("94 fahrenheit",temperature)
    newStory = newStory.replace("300 pounds",weight)
    console.log("Made it here")
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
