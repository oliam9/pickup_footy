const date = document.getElementById('date');  
const time = document.getElementById('time');
const gameLoc = document.getElementById('loc');
const maxPlayers = document.getElementById('max-players');
const btnNewGame = document.getElementById('btn-newgame');
const gameCard = document.getElementById('up-games');

// ADD GAME //
 
function addNewGame() {
 
  const cardHTML = `
    <div class="game">
    <img
      src="/football-field-astro-turf-surface-close-up-throw-kick-off-corner-area-lushed-green-pitch-192807692.jpeg"
     alt=""
    />
    <h5>GAME ON</h5>
    <small>${date.value},  ${time.value}</small>
    <small>Max Players: ${maxPlayers.value}</small>
    <small>${gameLoc.value}</small>
  </div>
  `
 gameCard.innerHTML += cardHTML;
}

btnNewGame.addEventListener('click', (e) => {
  e.preventDefault();
  addNewGame();
  document.getElementById('form').reset();
}) 

////////////////  ADD PLAYERS  /////////////

const addPlayer = document.getElementById('input');
const btnAddPlayer = document.getElementById('add-player');
const players = document.getElementById('players');

let playersArr = [];

function newPlayer() {

  const newPlayer = document.createElement('li');
  newPlayer.innerText = addPlayer.value;
  newPlayer.classList.add('player');
  players.appendChild(newPlayer);

  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add('fa');
  newPlayer.appendChild(trashButton);

  
  playersArr.push(document.getElementById("input").value);
  
  trashButton.addEventListener('click', () => {
    players.removeChild(newPlayer);
  })
}


btnAddPlayer.addEventListener('mousedown', (e) => {
  e.preventDefault();
  newPlayer();
  input.value = '';
})

const player = document.querySelectorAll('.player');
const genBtn = document.getElementById('gen-btn');
const teamSheet = document.getElementById('teamsheet');

const teams = [];

const getTeams = () => {
  let shuffled = playersArr
  .map(value => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value)
  
  const teamSize = Math.ceil(shuffled.length / 2);

  const teamOne = shuffled.slice(0, teamSize);
  const teamTwo = shuffled.slice(teamSize);

  teams.push(teamOne, teamTwo);

 let tCont = document.getElementById('teams-cont');
 let teamW = document.getElementById('teamOne');
 let teamB = document.getElementById('teamTwo');
  //  TEAM 1

    let ul = document.createElement('ul');
    ul.classList.add('team-container');
    for (let i of teamOne) { 
      let li = document.createElement('li');
      li.classList.add('team-sheet-player');
      li.innerHTML = i;
      ul.appendChild(li);
      teamW.appendChild(ul);   
    }   
    tCont.appendChild(teamW);
  teamSheet.appendChild(tCont);


  //  TEAM 2
    let ulB = document.createElement('ul');
    ulB.classList.add('team-container');
    for (let i of teamTwo) { 
      let li = document.createElement('li');
      li.classList.add('team-sheet-player');
      li.innerHTML = i;
      ulB.appendChild(li);
      teamB.appendChild(ulB);
     
    }
    tCont.appendChild(teamB);
  teamSheet.appendChild(tCont);
  
}

genBtn.addEventListener('mousedown', (e) => {
  getTeams();
})

