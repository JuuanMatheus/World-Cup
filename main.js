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
  createCard("20/11", "Domingo", createGame("qatar", "13:00", "ecuador")) +
  createCard(
    "21/11",
<<<<<<< HEAD
    "segunda",
    createGame("england", "10:00", "Iran") +
=======
    "Segunda",
    createGame("england", "10:00", "iran") +
>>>>>>> 80d6b222cc932eda11fab985be74237bd3a0e35d
      createGame("senegal", "13:00", "netherlands") +
      createGame("unitedstates", "16:00", "wales")
  ) +
  createCard(
    "24/11",
    "Quinta",
    createGame("uruguay", "10:00", "southkorea") +
      createGame("portugal", "13:00", "ghana") +
      createGame("brazil", "16:00", "serbia")
  ) +
  createCard("28/11", "Segunda", createGame("brazil", "13:00", "switzerland")) +
  createCard("02/12", "Sexta", createGame("cameroon", "16:00", "brazil"))
