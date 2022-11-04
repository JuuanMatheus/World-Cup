function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
      <strong>${hour}</strong>
      <img src="assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
    </li>
  `
}

function createCard(date, day, games) {
  return `
    <div class="card">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

document.querySelector("#app").innerHTML = ` 
      <header>
        <img src="assets/logo.svg" alt="Logo da Nlw" />
      </header>

      <main id="cards">
        ${createCard(
          "24/11",
          "Quinta",
          createGame("Uruguay", "10:00", "Southkorea") +
            createGame("Potugal", "13:00", "Ghana") +
            createGame("Brazil", "16:00", "Serbia")
        )}
        ${createCard(
          "28/11",
          "Segunda",
          createGame("Brazil", "13:00", "Switzerland")
        )}
        ${createCard(
          "02/12",
          "Sexta",
          createGame("Brazil", "16:00", "Cameroon")
        )}
        
      </main>
`
