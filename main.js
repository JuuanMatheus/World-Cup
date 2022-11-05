function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
    </li>
  `
}

let delay = 0.3

function createCard(date, day, games) {
  delay = delay + 0.3
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard("20/11", "Domingo", createGame("Qatar", "13:00", "Ecuador")) +
  createCard(
    "21/11",
    "Segunda",
    createGame("England", "10:00", "Iran") +
      createGame("Senegal", "13:00", "Netherlands") +
      createGame("Unitedstates", "16:00", "Wales")
  ) +
  createCard(
    "24/11",
    "Quinta",
    createGame("Uruguay", "10:00", "Southkorea") +
      createGame("Portugal", "13:00", "Ghana") +
      createGame("Brazil", "16:00", "Serbia")
  ) +
  createCard("28/11", "Segunda", createGame("Brazil", "13:00", "Switzerland")) +
  createCard("02/12", "Sexta", createGame("Cameroon", "16:00", "Brazil"))
