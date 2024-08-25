const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

const storyText = ("Está fazendo 94 fahrenheit em Manaus, e o melhor carro :insertx: para se andar nesse calor.Ele :inserty:, é uma coisa muito insana, quando, :insertz:. Bob ele nunca cansou de dizer que 300 pounds, que é mais pesado que um Fusca...");
//const storyText = ("Está fazendo 40 graus em manaus, e o melhor carro :insertx: para se andar nesse calor. Quando nós vamos :inserty:, é uma coisa muito insana, quando, :insertz:. Bob ele nunca cansou de dizer que  300 pounds, que é mais pesado que um Fusca... ")
const insertX = ["Ford Ka","Uno Mille com Escada","Golf Turbao"];
const insertY = ["Anda muito devagar","Depende da gravidade para aumentar a velocidade","Ta vindo de ré"];
const insertZ = ["Apenas 50tao de etanol","Faz 35km com meio litro","Hibrido é melhor que elétrico"];



function randomValueFromArray(array){

  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

function result() {
    let newStory = storyText;
    console.log (newStory);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);

  }
  
  if(document.getElementById("uk").checked) {

    const weight = `${Math.round(300*0.0714286)} stone`;
    const temperature =  `${Math.round((94-32) * 5 / 9)} centigrade`;
    newStory = newStory.replaceAll('94 fahrenheit', temperature);
    newStory = newStory.replaceAll('300 pounds', weight);
  }

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);
  newStory = newStory.replace(':insertx:', xItem);
  newStory = newStory.replace(':inserty:', yItem);
  newStory = newStory.replace(':insertz:', zItem);

  story.textContent = newStory;
  story.style.visibility = 'visible';
  
}

randomize.addEventListener('click', result);
