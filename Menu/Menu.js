
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
}

// Start Here: Create a reference to the ".menu" class
const menu;
// create a reference to the ".menu-button" class
const menuButton;
// Using your menuButton reference, add a click handler that calls toggleMenu
const newFeed = [
  {
    title: "Lambda School Students: We're the best!",
    date:"Nov 5th, 2017",
    content1: "Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando moff wicket tatooine luke.Solo wampa wampa calrissian yoda moff.Darth grievous darth gonk darth hutt.Darth baba skywalker watto fett jango maul han.Mon ewok sidious sidious lando kenobi grievous gamorrean solo.Yoda wedge utapau darth calamari. Hutt calamari darth jabba.Darth dooku amidala organa moff.Boba darth binks solo hutt skywalker dantooine skywalker.Qui - gonn       jar twi'lek jinn leia jango skywalker mon.",
    content2: "Grievous fett calamari anakin skywalker hutt. Alderaan darth kenobi darth r2-d2 windu mothma.Sidious darth calamari moff.Wampa mothma sith wedge solo mara.Darth gonk maul sith moff chewbacca palpatine mace amidala.C - 3po solo skywalker anakin yoda leia.Maul wampa bespin watto jade ewok darth jabba.Lando dantooine moff k- 3po dantooine luke.Fisto mandalore darth wedge c - 3p0 ahsoka.Secura moff palpatine fett.Anakin sith darth darth.Moff solo leia ben ponda jade.Binks jango aayla skywalker skywalker cade.Mustafar darth ventress anakin watto.Yavin jawa sebulba       owen jinn tatooine sith organa.",
    content3: "Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious naboo ackbar tatooine.Hutt lars padmé darth.Maul solo darth darth jabba qui - gon chewbacca darth maul.Moff baba wicket han.C - 3po antilles moff qui - gon ahsoka aayla dooku amidala.Palpatine droid amidala droid k - 3po twi'lek padmé wookiee. Leia       moff calamari mon obi - wan.Solo grievous lando coruscant.Jinn darth palpatine obi - wan mon."
  },
  {
    title: "Javascript and You, ES6",
    date: "Nov 7th, 2017",

    content1: "Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost Hermione spell bezoar Scabbers.Peruvian - Night - Powder werewolf, Dobby pear- tickle half - moon - glasses, Knight - Bus.Padfoot snargaluff seeker: Hagrid broomstick mischief managed.Snitch Fluffy rock - cake, 9 ¾ dress robes I must not tell lies.Mudbloods yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall.Ministry - of - Magic mimubulus mimbletonia Pigwidgeon knut phoenix feather other minister Azkaban.Hedwig Daily Prophet treacle tart full - moon Ollivanders You - Know - Who cursed.   Fawkes maze raw - steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks.",
    content2: "Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta.Stunning spells tap- dancing spider Slytherin’s Heir mewing kittens Remus Lupin.Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom.Padma and Parvati Sorting Hat Minister of Magic blue turban remember my last.",
 
  },
  {
    title: "React vs Angular vs Vue",
    date: "Nov 7th, 2017",
 
    content1: "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit.Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit.Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit.Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.Charizard Lorem ipsum dolor sit amet, consectetur adipiscing elit.Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit.Wartortle Lorem ipsum dolor sit amet, consectetur adipiscing elit.Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit.Caterpie Lorem ipsum dolor sit amet, consectetur adipiscing elit.Metapod Lorem ipsum dolor sit amet, consectetur adipiscing elit.Butterfree Lorem ipsum dolor sit amet, consectetur adipiscing elit.Weedle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit.Beedrill Lorem ipsum dolor sit amet, consectetur adipiscing     elit.",
    content2: "Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit.Rattata Lorem ipsum dolor sit amet, consectetur adipiscing elit.Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit.Spearow Lorem ipsum dolor sit amet, consectetur adipiscing elit.Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ekans Lorem ipsum dolor sit amet, consectetur adipiscing elit.Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pikachu Lorem ipsum dolor sit amet, consectetur adipiscing elit.Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sandshrew Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nidoqueen Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nidorino Lorem ipsum dolor       sit amet, consectetur adipiscing elit.Nidoking Lorem ipsum",
    
  },
  {
    title: "Professional Software Development in 2018",
    date: "Nov 7th, 2017",

    content1: "Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor; hodor hodor. Hodor hodor hodor, hodor, hodor hodor.Hodor, hodor.Hodor.Hodor, hodor - hodor...Hodor hodor hodor; hodor HODOR hodor, hodor hodor ? !Hodor hodor, hodor. Hodor hodor hodor hodor hodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor ?",
    content2: "Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor; hodor hodor hodor ? Hodor, hodor.Hodor.Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor.Hodor.Hodor, HODOR hodor, hodor hodor, hodor, hodor hodor.Hodor hodor - hodor - hodor...Hodor hodor hodor hodor hodor hodor hodor ? !Hodor hodor - hodor hodor hodor.Hodor.Hodor hodor...Hodor hodor hodor hodor hodor ? ",
    content3: "Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor? Hodor! Hodor hodor, HODOR hodor, hodor hodor ? !Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor.Hodor, hodor. Hodor.Hodor, hodor, hodor.Hodor hodor...Hodor hodor hodor ? !Hodor, hodor...Hodor hodor HODOR hodor, hodor hodor.Hodor.",
content4: "Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor; hodor hodor hodor ? Hodor, hodor.Hodor.Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor.Hodor.Hodor, HODOR hodor, hodor hodor, hodor, hodor hodor.Hodor hodor - hodor - hodor...Hodor hodor hodor hodor hodor hodor hodor ? !Hodor hodor - hodor hodor hodor.Hodor.Hodor hodor...Hodor hodor hodor hodor hodor ?",
  }
]


const articles = document.querySelector('.articles')

articles.appendChild(createPanel(data.title, data.content1, data.content2, data.content3, data.content4))

{/* <div class="article">
    <h2></h2>
    <p class="date"></p>
    <div>
    <p></p>

    <p></p>

    <p></p>

    <p></p>
    <span class='expandButton'></span>
  </div> */}

function createPanel(title, content1, content2, content3, content4) {
  // define new elements
  const article = document.createElement('div');
  const artilceTitle = document.createElement('h2');
  const dateStamp = document.createElement('p');
  const content1 = document.createElement('p');
  const content2 = document.createElement('p');
  const content3 = document.createElement('p');
  const content4 = document.createElement('p');
  const articleContent = document.createElement('div');
  const buttonArticle = document.createElement('div');
  const buttonOpen = document.createElement('button');
  const buttonClose = document.createElement('button');
 

  // Setup structure of elements
  panel.appendChild(panelBar)
  panel.appendChild(panelContent)
  panelBar.appendChild(panelTitle)
  panelBar.appendChild(buttonPanel)
  buttonPanel.appendChild(buttonOpen)
  buttonPanel.appendChild(buttonClose)

  // set class names
  panel.classList.add('panel')
  panelBar.classList.add('panel-bar')
  buttonPanel.classList.add('panel-buttons')
  buttonOpen.classList.add('panel-btn-open')
  buttonClose.classList.add('panel-btn-close', 'hide-btn')
  panelContent.classList.add('panel-content')

  // set text content
  buttonOpen.textContent = 'Open'
  buttonClose.textContent = 'Close'
  panelContent.textContent = content
  panelTitle.textContent = title

  // button events
  // ❌ buttonPanel.querySelectorAll('button').forEach(btn => btn.addEventListener('click', clickHandler))
  // ✅ buttonPanel.addEventListener('click', clickHandler)
  buttonPanel.addEventListener('click', event => {
    console.log('button clicked', event.target)
    // 1. toggle hide-btn on BOTH buttons
    buttonOpen.classList.toggle('hide-btn')
    buttonClose.classList.toggle('hide-btn')
    // 2. Change visibility of the content w/ 'toggle-on'
    panelContent.classList.toggle('toggle-on')
  })

  return panel
}

function createPanel2(title, content) {
  const panel = document.createElement('div')
  panel.innerHTML = `<div class="panel">
  <div class="panel-bar">
    <h3>${title}</h3>
    <div class="panel-buttons">
      <button class="panel-btn-open">Open</button>
      <button class="panel-btn-close hide-btn">Close</button>
    </div>
  </div>
  <div class="panel-content">
    ${content},

  </div>
</div>`
  return panel
}

