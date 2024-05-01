const API_KEY =
  "1a50b3ca17d9544ad1c99537d3bd1e9c3b0617fe8cf3a4c295ccb99ba306a5fb";
const URL_GET_STANDINGS_LCH =
  "https://apiv3.apifootball.com/?action=get_standings&league_id=3&APIkey=1a50b3ca17d9544ad1c99537d3bd1e9c3b0617fe8cf3a4c295ccb99ba306a5fb";

const URL_GET_STANDINGS_EUROPA_LEAGUE =
  "https://apiv3.apifootball.com/?action=get_standings&league_id=4&APIkey=1a50b3ca17d9544ad1c99537d3bd1e9c3b0617fe8cf3a4c295ccb99ba306a5fb";

const URL_GET_STANDINGS_PREMIER_LEAGUE =
  "https://apiv3.apifootball.com/?action=get_standings&league_id=152&APIkey=1a50b3ca17d9544ad1c99537d3bd1e9c3b0617fe8cf3a4c295ccb99ba306a5fb";

const URL_GET_STANDINGS_SERIA_A =
  "https://apiv3.apifootball.com/?action=get_standings&league_id=207&APIkey=1a50b3ca17d9544ad1c99537d3bd1e9c3b0617fe8cf3a4c295ccb99ba306a5fb";

const URL_GET_STANDINGS_LA_LIGA =
  "https://apiv3.apifootball.com/?action=get_standings&league_id=302&APIkey=1a50b3ca17d9544ad1c99537d3bd1e9c3b0617fe8cf3a4c295ccb99ba306a5fb";

const URL_GET_STANDINGS_BUNDES_LIGA =
  "https://apiv3.apifootball.com/?action=get_standings&league_id=175&APIkey=1a50b3ca17d9544ad1c99537d3bd1e9c3b0617fe8cf3a4c295ccb99ba306a5fb";

const URL_GET_STANDINGS_LIGA_1 =
  "https://apiv3.apifootball.com/?action=get_standings&league_id=168&APIkey=1a50b3ca17d9544ad1c99537d3bd1e9c3b0617fe8cf3a4c295ccb99ba306a5fb";

const URL_GET_STANDINGS_RPL =
  "https://apiv3.apifootball.com/?action=get_standings&league_id=344&APIkey=1a50b3ca17d9544ad1c99537d3bd1e9c3b0617fe8cf3a4c295ccb99ba306a5fb";

const URL_GET_PLAYERS_LCH =
  "https://apiv3.apifootball.com/?action=get_topscorers&league_id=3&APIkey=1a50b3ca17d9544ad1c99537d3bd1e9c3b0617fe8cf3a4c295ccb99ba306a5fb";

const URL_GET_PLAYERS_EUROPA_LEAGUE =
  "https://apiv3.apifootball.com/?action=get_topscorers&league_id=4&APIkey=1a50b3ca17d9544ad1c99537d3bd1e9c3b0617fe8cf3a4c295ccb99ba306a5fb";

const URL_GET_PLAYERS_PREMIER_LEAGUE =
  "https://apiv3.apifootball.com/?action=get_topscorers&league_id=152&APIkey=1a50b3ca17d9544ad1c99537d3bd1e9c3b0617fe8cf3a4c295ccb99ba306a5fb";

const URL_GET_PLAYERS_SERIA_A =
  "https://apiv3.apifootball.com/?action=get_topscorers&league_id=207&APIkey=1a50b3ca17d9544ad1c99537d3bd1e9c3b0617fe8cf3a4c295ccb99ba306a5fb";

const URL_GET_PLAYERS_LA_LIGA =
  "https://apiv3.apifootball.com/?action=get_topscorers&league_id=302&APIkey=1a50b3ca17d9544ad1c99537d3bd1e9c3b0617fe8cf3a4c295ccb99ba306a5fb";

const URL_GET_PLAYERS_BUNDES_LIGA =
  "https://apiv3.apifootball.com/?action=get_topscorers&league_id=175&APIkey=1a50b3ca17d9544ad1c99537d3bd1e9c3b0617fe8cf3a4c295ccb99ba306a5fb";

const URL_GET_PLAYERS_LIGA_1 =
  "https://apiv3.apifootball.com/?action=get_topscorers&league_id=168&APIkey=1a50b3ca17d9544ad1c99537d3bd1e9c3b0617fe8cf3a4c295ccb99ba306a5fb";

const URL_GET_PLAYERS_RPL =
  "https://apiv3.apifootball.com/?action=get_topscorers&league_id=344&APIkey=1a50b3ca17d9544ad1c99537d3bd1e9c3b0617fe8cf3a4c295ccb99ba306a5fb";

const URL_GET_PLAYER_INFO =
  "https://apiv3.apifootball.com/?action=get_players&player_id=";

const URL_GET_TEAM_INFO =
  "https://apiv3.apifootball.com/?action=get_teams&team_id=";

const btnChampionsLeague = document.querySelector(".btn-champions--league");
btnChampionsLeague.addEventListener("click", showTableChampionsLeague);

const btnEuropaLeague = document.querySelector(".btn-europa--league");
btnEuropaLeague.addEventListener("click", showTableEuropaLeague);

const btnPremierLeague = document.querySelector(".btn-premier--league");
btnPremierLeague.addEventListener("click", showTablePremierLeague);

const btnSeriaA = document.querySelector(".btn-seria-a");
btnSeriaA.addEventListener("click", showTableSeriaA);

const btnLaLiga = document.querySelector(".btn-la-liga");
btnLaLiga.addEventListener("click", showTableLaLiga);

const btnBundesLiga = document.querySelector(".btn-bundes-liga");
btnBundesLiga.addEventListener("click", showTableBundesLiga);

const btnLigue1 = document.querySelector(".btn-liga-1");
btnLigue1.addEventListener("click", showTableLigue1);

const btnRpl = document.querySelector(".btn-rpl");
btnRpl.addEventListener("click", showTableRPL);

const btnHeaderLogo = document.querySelector(".btn-header--logo");
btnHeaderLogo.addEventListener("click", () => location.reload());

function showTableChampionsLeague() {
  const mainTag = document.querySelector("main");
  mainTag.innerHTML = `<div class="main-container1">
                        <aside class="aside">
                          <div class="aside-img">
                            <img src="https://ofstats.com/img/league_logo/f9b7b5c6-6614-4076-a72f-09a751bdf79d.png" alt="">
                          </div>
                          <div class="aside-name">
                            <p class="aside-title--text">Название</p>
                            <p class="aside-text">Champions League</p>
                          </div>
                          <div class="aside-season">
                            <p class="aside-title--text">Текущий сезон</p>
                            <p class="aside-text">2023/2024</p>
                          </div>
                          <div class="aside-country">
                            <p class="aside-title--text">Страна</p>
                            <p class="aside-text">Europe</p>
                          </div>
                          <div class="cup">
                            <img class="cup-img" src="./images/champions-league.jpg" alt="">
                          </div>
                        </aside>
                        <article class="article">
                          <section class="section">
                            <div class="review">
                              <button class="btn btn-review">
                                <p class="btn-text">Обзор</p>
                              </button>

                              <button class="btn btn-statistics">
                                <p class="btn-text">Бомбардиры</p>
                              </button>
                            </div>
                          </section>
                          <div class="main-container2">
                            <div class="table-container">
                              <p class="table-container--name">Группа A</p>
                              <table class="table standing-table champions-league--tableA">
                                  <tr class="table-head">
                                      <th class="table-head--item table-head--1" scope="col">#</th>
                                      <th class="table-head--item table-head--2" scope="col">Команда</th>
                                      <th class="table-head--item table-head--5" scope="col">И</th>
                                      <th class="table-head--item table-head--5" scope="col">В</th>
                                      <th class="table-head--item table-head--5" scope="col">Н</th>
                                      <th class="table-head--item table-head--5" scope="col">П</th>
                                      <th class="table-head--item table-head--5" scope="col">+</th>
                                      <th class="table-head--item table-head--5" scope="col">-</th>
                                      <th class="table-head--item table-head--5" scope="col">О</th>
                                  </tr>
                              </table>
                            </div>
                            <div class="table-container">
                              <p class="table-container--name">Группа B</p>
                              <table class="table standing-table champions-league--tableB">
                                  <tr class="table-head">
                                      <th class="table-head--item table-head--1" scope="col">#</th>
                                      <th class="table-head--item table-head--2" scope="col">Команда</th>
                                      <th class="table-head--item table-head--5" scope="col">И</th>
                                      <th class="table-head--item table-head--5" scope="col">В</th>
                                      <th class="table-head--item table-head--5" scope="col">Н</th>
                                      <th class="table-head--item table-head--5" scope="col">П</th>
                                      <th class="table-head--item table-head--5" scope="col">+</th>
                                      <th class="table-head--item table-head--5" scope="col">-</th>
                                      <th class="table-head--item table-head--5" scope="col">О</th>
                                  </tr>
                              </table>
                            </div>
                            <div class="table-container">
                              <p class="table-container--name">Группа C</p>
                              <table class="table standing-table champions-league--tableC">
                                  <tr class="table-head">
                                      <th class="table-head--item table-head--1" scope="col">#</th>
                                      <th class="table-head--item table-head--2" scope="col">Команда</th>
                                      <th class="table-head--item table-head--5" scope="col">И</th>
                                      <th class="table-head--item table-head--5" scope="col">В</th>
                                      <th class="table-head--item table-head--5" scope="col">Н</th>
                                      <th class="table-head--item table-head--5" scope="col">П</th>
                                      <th class="table-head--item table-head--5" scope="col">+</th>
                                      <th class="table-head--item table-head--5" scope="col">-</th>
                                      <th class="table-head--item table-head--5" scope="col">О</th>
                                  </tr>
                              </table>
                            </div>
                            <div class="table-container">
                              <p class="table-container--name">Группа D</p>
                              <table class="table standing-table champions-league--tableD">
                                  <tr class="table-head">
                                      <th class="table-head--item table-head--1" scope="col">#</th>
                                      <th class="table-head--item table-head--2" scope="col">Команда</th>
                                      <th class="table-head--item table-head--5" scope="col">И</th>
                                      <th class="table-head--item table-head--5" scope="col">В</th>
                                      <th class="table-head--item table-head--5" scope="col">Н</th>
                                      <th class="table-head--item table-head--5" scope="col">П</th>
                                      <th class="table-head--item table-head--5" scope="col">+</th>
                                      <th class="table-head--item table-head--5" scope="col">-</th>
                                      <th class="table-head--item table-head--5" scope="col">О</th>
                                  </tr>
                              </table>
                            </div>
                            <div class="table-container">
                              <p class="table-container--name">Группа E</p>
                              <table class="table standing-table champions-league--tableE">
                                  <tr class="table-head">
                                      <th class="table-head--item table-head--1" scope="col">#</th>
                                      <th class="table-head--item table-head--2" scope="col">Команда</th>
                                      <th class="table-head--item table-head--5" scope="col">И</th>
                                      <th class="table-head--item table-head--5" scope="col">В</th>
                                      <th class="table-head--item table-head--5" scope="col">Н</th>
                                      <th class="table-head--item table-head--5" scope="col">П</th>
                                      <th class="table-head--item table-head--5" scope="col">+</th>
                                      <th class="table-head--item table-head--5" scope="col">-</th>
                                      <th class="table-head--item table-head--5" scope="col">О</th>
                                  </tr>
                              </table>
                            </div>
                            <div class="table-container">
                              <p class="table-container--name">Группа F</p>
                              <table class="table standing-table champions-league--tableF">
                                  <tr class="table-head">
                                      <th class="table-head--item table-head--1" scope="col">#</th>
                                      <th class="table-head--item table-head--2" scope="col">Команда</th>
                                      <th class="table-head--item table-head--5" scope="col">И</th>
                                      <th class="table-head--item table-head--5" scope="col">В</th>
                                      <th class="table-head--item table-head--5" scope="col">Н</th>
                                      <th class="table-head--item table-head--5" scope="col">П</th>
                                      <th class="table-head--item table-head--5" scope="col">+</th>
                                      <th class="table-head--item table-head--5" scope="col">-</th>
                                      <th class="table-head--item table-head--5" scope="col">О</th>
                                  </tr>
                              </table>
                            </div>
                            <div class="table-container">
                              <p class="table-container--name">Группа G</p>
                              <table class="table standing-table champions-league--tableG">
                                  <tr class="table-head">
                                      <th class="table-head--item table-head--1" scope="col">#</th>
                                      <th class="table-head--item table-head--2" scope="col">Команда</th>
                                      <th class="table-head--item table-head--5" scope="col">И</th>
                                      <th class="table-head--item table-head--5" scope="col">В</th>
                                      <th class="table-head--item table-head--5" scope="col">Н</th>
                                      <th class="table-head--item table-head--5" scope="col">П</th>
                                      <th class="table-head--item table-head--5" scope="col">+</th>
                                      <th class="table-head--item table-head--5" scope="col">-</th>
                                      <th class="table-head--item table-head--5" scope="col">О</th>
                                  </tr>
                              </table>
                            </div>
                            <div class="table-container">
                              <p class="table-container--name">Группа H</p>
                              <table class="table standing-table champions-league--tableH">
                                  <tr class="table-head">
                                      <th class="table-head--item table-head--1" scope="col">#</th>
                                      <th class="table-head--item table-head--2" scope="col">Команда</th>
                                      <th class="table-head--item table-head--5" scope="col">И</th>
                                      <th class="table-head--item table-head--5" scope="col">В</th>
                                      <th class="table-head--item table-head--5" scope="col">Н</th>
                                      <th class="table-head--item table-head--5" scope="col">П</th>
                                      <th class="table-head--item table-head--5" scope="col">+</th>
                                      <th class="table-head--item table-head--5" scope="col">-</th>
                                      <th class="table-head--item table-head--5" scope="col">О</th>
                                  </tr>
                              </table>
                            </div>
                          </div>
                        </article>
                      </div>`;

  getTableLch(URL_GET_STANDINGS_LCH);
  const buttonReview = document.querySelector(".btn-review");
  const buttonStatistics = document.querySelector(".btn-statistics");
  buttonStatistics.addEventListener("click", handleButtonClickStatisticsLch);
  buttonReview.classList.add("active");
}

async function getTableLch(url) {
  const response = await fetch(url);
  const data = await response.json();
  fillTableLch(data);
}

function handleButtonClickReviewLch() {
  const buttonReview = document.querySelector(".btn-review");
  const buttonStatistics = document.querySelector(".btn-statistics");
  buttonReview.removeEventListener("click", handleButtonClickReviewLch);
  buttonStatistics.addEventListener("click", handleButtonClickStatisticsLch);
  buttonStatistics.classList.remove("active");
  buttonReview.classList.add("active");
  showTableChampionsLeague();
}

function handleButtonClickStatisticsLch() {
  const buttonReview = document.querySelector(".btn-review");
  const buttonStatistics = document.querySelector(".btn-statistics");
  buttonStatistics.removeEventListener("click", handleButtonClickStatisticsLch);
  buttonReview.addEventListener("click", handleButtonClickReviewLch);
  buttonReview.classList.remove("active");
  buttonStatistics.classList.add("active");
  const mainContainer2 = document.querySelector(".main-container2");
  mainContainer2.innerHTML = `
            <div class="table-container">
              <table class="table standing-table champions-league--players">
                  <tr class="table-head">
                      <th class="table-head--item table-player--1" scope="col">#</th>
                      <th class="table-head--item table-player--2" scope="col">Игрок</th>
                      <th class="table-head--item table-player--3" scope="col">Команда</th>
                      <th class="table-head--item table-player--5" scope="col">Голы</th>
                  </tr>
              </table>
            </div>`;
  getPlayersLch(URL_GET_PLAYERS_LCH);
}

async function getPlayersLch(url) {
  const response = await fetch(url);
  const data = await response.json();
  fillTablePlayersLch(data);
}

async function fillTablePlayersLch(data) {
  const tablePlayersLch = document.querySelector(".champions-league--players");
  const arrayPlayersInfoPromices = [];
  const arrayTeamsInfoPromices = [];
  for (let i = 0; i < 10; i++) {
    arrayPlayersInfoPromices.push(getPlayer(data[i].player_key));
    arrayTeamsInfoPromices.push(getTeam(data[i].team_key));
  }
  const arrayPlayersInfo = await Promise.all(arrayPlayersInfoPromices);
  const arrayTeamsInfo = await Promise.all(arrayTeamsInfoPromices);
  for (let i = 0; i < 10; i++) {
    const newRow = tablePlayersLch.insertRow();
    newRow.classList.add("td-players");
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    cell1.classList.add("table-players-item");
    cell2.classList.add("table-players-item");
    cell3.classList.add("table-players-item");
    cell4.classList.add("table-players-item");
    cell2.classList.add("table-players--2");
    cell3.classList.add("table-players--3");
    cell1.textContent = i + 1;
    const playerPhoto = arrayPlayersInfo[i][0].player_image;
    const teamPhoto = arrayTeamsInfo[i][0].team_badge;

    cell2.innerHTML = `<img width="100" src="${playerPhoto}" onerror="this.onerror=null; this.src='https://ofstats.com/img/player_logo/55109e2e-d399-4e8e-a3d0-47707300927f.png'"> <p>${data[i].player_name}</p>`;
    cell3.innerHTML = `<img width="100" src="${teamPhoto}"> <p>${data[i].team_name}</p>`;
    cell4.textContent = `${data[i].goals}`;
  }
}

async function getTeam(key) {
  const response = await fetch(
    URL_GET_TEAM_INFO + `${key}` + `&APIkey=${API_KEY}`
  );
  const data = await response.json();
  return data;
}

async function getPlayer(key) {
  const response = await fetch(
    URL_GET_PLAYER_INFO + `${key}` + `&APIkey=${API_KEY}`
  );
  const data = await response.json();
  return data;
}

function fillTableLch(data) {
  const LchTableA = document.querySelector(".champions-league--tableA");
  const LchTableB = document.querySelector(".champions-league--tableB");
  const LchTableC = document.querySelector(".champions-league--tableC");
  const LchTableD = document.querySelector(".champions-league--tableD");
  const LchTableE = document.querySelector(".champions-league--tableE");
  const LchTableF = document.querySelector(".champions-league--tableF");
  const LchTableG = document.querySelector(".champions-league--tableG");
  const LchTableH = document.querySelector(".champions-league--tableH");

  for (let i = 0; i < 4; i++) {
    const newRow = LchTableA.insertRow();
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
    const cell6 = newRow.insertCell(5);
    const cell7 = newRow.insertCell(6);
    const cell8 = newRow.insertCell(7);
    const cell9 = newRow.insertCell(8);
    if (i == 0 || i == 1) {
      cell1.classList.add("first-team");
    } else if (i == 2) {
      cell1.classList.add("third-team");
    }
    cell1.textContent = i + 1;
    cell2.classList.add("club-name");
    cell2.innerHTML = `<img width="30" src="${data[i].team_badge}"> ${data[i].team_name}`;
    cell3.textContent = data[i].overall_league_payed;
    cell4.textContent = data[i].overall_league_W;
    cell5.textContent = data[i].overall_league_D;
    cell6.textContent = data[i].overall_league_L;
    cell7.textContent = data[i].overall_league_GF;
    cell8.textContent = data[i].overall_league_GA;
    cell9.textContent = data[i].overall_league_PTS;
  }
  for (let i = 4; i < 8; i++) {
    const newRow = LchTableB.insertRow();
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
    const cell6 = newRow.insertCell(5);
    const cell7 = newRow.insertCell(6);
    const cell8 = newRow.insertCell(7);
    const cell9 = newRow.insertCell(8);
    if (i == 4 || i == 5) {
      cell1.classList.add("first-team");
    } else if (i == 6) {
      cell1.classList.add("third-team");
    }
    cell1.textContent = (i % 4) + 1;
    cell2.classList.add("club-name");
    cell2.innerHTML = `<img width="30" src="${data[i].team_badge}"> ${data[i].team_name}`;
    cell3.textContent = data[i].overall_league_payed;
    cell4.textContent = data[i].overall_league_W;
    cell5.textContent = data[i].overall_league_D;
    cell6.textContent = data[i].overall_league_L;
    cell7.textContent = data[i].overall_league_GF;
    cell8.textContent = data[i].overall_league_GA;
    cell9.textContent = data[i].overall_league_PTS;
  }
  for (let i = 8; i < 12; i++) {
    const newRow = LchTableC.insertRow();
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
    const cell6 = newRow.insertCell(5);
    const cell7 = newRow.insertCell(6);
    const cell8 = newRow.insertCell(7);
    const cell9 = newRow.insertCell(8);
    if (i == 8 || i == 9) {
      cell1.classList.add("first-team");
    } else if (i == 10) {
      cell1.classList.add("third-team");
    }
    cell1.textContent = (i % 4) + 1;
    cell2.classList.add("club-name");
    cell2.innerHTML = `<img width="30" src="${data[i].team_badge}"> ${data[i].team_name}`;
    cell3.textContent = data[i].overall_league_payed;
    cell4.textContent = data[i].overall_league_W;
    cell5.textContent = data[i].overall_league_D;
    cell6.textContent = data[i].overall_league_L;
    cell7.textContent = data[i].overall_league_GF;
    cell8.textContent = data[i].overall_league_GA;
    cell9.textContent = data[i].overall_league_PTS;
  }
  for (let i = 12; i < 16; i++) {
    const newRow = LchTableD.insertRow();
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
    const cell6 = newRow.insertCell(5);
    const cell7 = newRow.insertCell(6);
    const cell8 = newRow.insertCell(7);
    const cell9 = newRow.insertCell(8);
    if (i == 12 || i == 13) {
      cell1.classList.add("first-team");
    } else if (i == 14) {
      cell1.classList.add("third-team");
    }
    cell1.textContent = (i % 4) + 1;
    cell2.classList.add("club-name");
    cell2.innerHTML = `<img width="30" src="${data[i].team_badge}"> ${data[i].team_name}`;
    cell3.textContent = data[i].overall_league_payed;
    cell4.textContent = data[i].overall_league_W;
    cell5.textContent = data[i].overall_league_D;
    cell6.textContent = data[i].overall_league_L;
    cell7.textContent = data[i].overall_league_GF;
    cell8.textContent = data[i].overall_league_GA;
    cell9.textContent = data[i].overall_league_PTS;
  }
  for (let i = 16; i < 20; i++) {
    const newRow = LchTableE.insertRow();
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
    const cell6 = newRow.insertCell(5);
    const cell7 = newRow.insertCell(6);
    const cell8 = newRow.insertCell(7);
    const cell9 = newRow.insertCell(8);
    if (i == 16 || i == 17) {
      cell1.classList.add("first-team");
    } else if (i == 18) {
      cell1.classList.add("third-team");
    }
    cell1.textContent = (i % 4) + 1;
    cell2.classList.add("club-name");
    cell2.innerHTML = `<img width="30" src="${data[i].team_badge}"> ${data[i].team_name}`;
    cell3.textContent = data[i].overall_league_payed;
    cell4.textContent = data[i].overall_league_W;
    cell5.textContent = data[i].overall_league_D;
    cell6.textContent = data[i].overall_league_L;
    cell7.textContent = data[i].overall_league_GF;
    cell8.textContent = data[i].overall_league_GA;
    cell9.textContent = data[i].overall_league_PTS;
  }
  for (let i = 20; i < 24; i++) {
    const newRow = LchTableF.insertRow();
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
    const cell6 = newRow.insertCell(5);
    const cell7 = newRow.insertCell(6);
    const cell8 = newRow.insertCell(7);
    const cell9 = newRow.insertCell(8);
    if (i == 20 || i == 21) {
      cell1.classList.add("first-team");
    } else if (i == 22) {
      cell1.classList.add("third-team");
    }
    cell1.textContent = (i % 4) + 1;
    cell2.classList.add("club-name");
    cell2.innerHTML = `<img width="30" src="${data[i].team_badge}"> ${data[i].team_name}`;
    cell3.textContent = data[i].overall_league_payed;
    cell4.textContent = data[i].overall_league_W;
    cell5.textContent = data[i].overall_league_D;
    cell6.textContent = data[i].overall_league_L;
    cell7.textContent = data[i].overall_league_GF;
    cell8.textContent = data[i].overall_league_GA;
    cell9.textContent = data[i].overall_league_PTS;
  }
  for (let i = 24; i < 28; i++) {
    const newRow = LchTableG.insertRow();
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
    const cell6 = newRow.insertCell(5);
    const cell7 = newRow.insertCell(6);
    const cell8 = newRow.insertCell(7);
    const cell9 = newRow.insertCell(8);
    if (i == 24 || i == 25) {
      cell1.classList.add("first-team");
    } else if (i == 26) {
      cell1.classList.add("third-team");
    }
    cell1.textContent = (i % 4) + 1;
    cell2.classList.add("club-name");
    cell2.innerHTML = `<img width="30" src="${data[i].team_badge}"> ${data[i].team_name}`;
    cell3.textContent = data[i].overall_league_payed;
    cell4.textContent = data[i].overall_league_W;
    cell5.textContent = data[i].overall_league_D;
    cell6.textContent = data[i].overall_league_L;
    cell7.textContent = data[i].overall_league_GF;
    cell8.textContent = data[i].overall_league_GA;
    cell9.textContent = data[i].overall_league_PTS;
  }
  for (let i = 28; i < 32; i++) {
    const newRow = LchTableH.insertRow();
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
    const cell6 = newRow.insertCell(5);
    const cell7 = newRow.insertCell(6);
    const cell8 = newRow.insertCell(7);
    const cell9 = newRow.insertCell(8);
    if (i == 28 || i == 29) {
      cell1.classList.add("first-team");
    } else if (i == 30) {
      cell1.classList.add("third-team");
    }
    cell1.textContent = (i % 4) + 1;
    cell2.classList.add("club-name");
    cell2.innerHTML = `<img width="30" src="${data[i].team_badge}"> ${data[i].team_name}`;
    cell3.textContent = data[i].overall_league_payed;
    cell4.textContent = data[i].overall_league_W;
    cell5.textContent = data[i].overall_league_D;
    cell6.textContent = data[i].overall_league_L;
    cell7.textContent = data[i].overall_league_GF;
    cell8.textContent = data[i].overall_league_GA;
    cell9.textContent = data[i].overall_league_PTS;
  }
}

function showTableEuropaLeague() {
  const mainTag = document.querySelector("main");
  mainTag.innerHTML = `<div class="main-container1">
                        <aside class="aside">
                          <div class="aside-img">
                            <img src="https://ofstats.com/img/league_logo/a7fd7f97-adc9-4bbc-b9dd-8d22f70fe003.png" alt="">
                          </div>
                          <div class="aside-name">
                            <p class="aside-title--text">Название</p>
                            <p class="aside-text">Europa League</p>
                          </div>
                          <div class="aside-season">
                            <p class="aside-title--text">Текущий сезон</p>
                            <p class="aside-text">2023/2024</p>
                          </div>
                          <div class="aside-country">
                            <p class="aside-title--text">Страна</p>
                            <p class="aside-text">Europe</p>
                          </div>
                          <div class="cup">
                            <img class="cup-img" src="https://upload.wikimedia.org/wikipedia/commons/1/19/UEFA_Cup_%28adjusted%29.png" alt="">
                          </div>
                        </aside>
                        <article class="article">
                          <section class="section">
                            <div class="review">
                              <button class="btn btn-review">
                                <p class="btn-text">Обзор</p>
                              </button>

                              <button class="btn btn-statistics">
                                <p class="btn-text">Бомбардиры</p>
                              </button>
                            </div>
                          </section>
                          <div class="main-container2">
                            <div class="table-container">
                              <p class="table-container--name">Группа A</p>
                              <table class="table standing-table champions-league--tableA">
                                  <tr class="table-head">
                                      <th class="table-head--item table-head--1" scope="col">#</th>
                                      <th class="table-head--item table-head--2" scope="col">Команда</th>
                                      <th class="table-head--item table-head--5" scope="col">И</th>
                                      <th class="table-head--item table-head--5" scope="col">В</th>
                                      <th class="table-head--item table-head--5" scope="col">Н</th>
                                      <th class="table-head--item table-head--5" scope="col">П</th>
                                      <th class="table-head--item table-head--5" scope="col">+</th>
                                      <th class="table-head--item table-head--5" scope="col">-</th>
                                      <th class="table-head--item table-head--5" scope="col">О</th>
                                  </tr>
                              </table>
                            </div>
                            <div class="table-container">
                              <p class="table-container--name">Группа B</p>
                              <table class="table standing-table champions-league--tableB">
                                  <tr class="table-head">
                                      <th class="table-head--item table-head--1" scope="col">#</th>
                                      <th class="table-head--item table-head--2" scope="col">Команда</th>
                                      <th class="table-head--item table-head--5" scope="col">И</th>
                                      <th class="table-head--item table-head--5" scope="col">В</th>
                                      <th class="table-head--item table-head--5" scope="col">Н</th>
                                      <th class="table-head--item table-head--5" scope="col">П</th>
                                      <th class="table-head--item table-head--5" scope="col">+</th>
                                      <th class="table-head--item table-head--5" scope="col">-</th>
                                      <th class="table-head--item table-head--5" scope="col">О</th>
                                  </tr>
                              </table>
                            </div>
                            <div class="table-container">
                              <p class="table-container--name">Группа C</p>
                              <table class="table standing-table champions-league--tableC">
                                  <tr class="table-head">
                                      <th class="table-head--item table-head--1" scope="col">#</th>
                                      <th class="table-head--item table-head--2" scope="col">Команда</th>
                                      <th class="table-head--item table-head--5" scope="col">И</th>
                                      <th class="table-head--item table-head--5" scope="col">В</th>
                                      <th class="table-head--item table-head--5" scope="col">Н</th>
                                      <th class="table-head--item table-head--5" scope="col">П</th>
                                      <th class="table-head--item table-head--5" scope="col">+</th>
                                      <th class="table-head--item table-head--5" scope="col">-</th>
                                      <th class="table-head--item table-head--5" scope="col">О</th>
                                  </tr>
                              </table>
                            </div>
                            <div class="table-container">
                              <p class="table-container--name">Группа D</p>
                              <table class="table standing-table champions-league--tableD">
                                  <tr class="table-head">
                                      <th class="table-head--item table-head--1" scope="col">#</th>
                                      <th class="table-head--item table-head--2" scope="col">Команда</th>
                                      <th class="table-head--item table-head--5" scope="col">И</th>
                                      <th class="table-head--item table-head--5" scope="col">В</th>
                                      <th class="table-head--item table-head--5" scope="col">Н</th>
                                      <th class="table-head--item table-head--5" scope="col">П</th>
                                      <th class="table-head--item table-head--5" scope="col">+</th>
                                      <th class="table-head--item table-head--5" scope="col">-</th>
                                      <th class="table-head--item table-head--5" scope="col">О</th>
                                  </tr>
                              </table>
                            </div>
                            <div class="table-container">
                              <p class="table-container--name">Группа E</p>
                              <table class="table standing-table champions-league--tableE">
                                  <tr class="table-head">
                                      <th class="table-head--item table-head--1" scope="col">#</th>
                                      <th class="table-head--item table-head--2" scope="col">Команда</th>
                                      <th class="table-head--item table-head--5" scope="col">И</th>
                                      <th class="table-head--item table-head--5" scope="col">В</th>
                                      <th class="table-head--item table-head--5" scope="col">Н</th>
                                      <th class="table-head--item table-head--5" scope="col">П</th>
                                      <th class="table-head--item table-head--5" scope="col">+</th>
                                      <th class="table-head--item table-head--5" scope="col">-</th>
                                      <th class="table-head--item table-head--5" scope="col">О</th>
                                  </tr>
                              </table>
                            </div>
                            <div class="table-container">
                              <p class="table-container--name">Группа F</p>
                              <table class="table standing-table champions-league--tableF">
                                  <tr class="table-head">
                                      <th class="table-head--item table-head--1" scope="col">#</th>
                                      <th class="table-head--item table-head--2" scope="col">Команда</th>
                                      <th class="table-head--item table-head--5" scope="col">И</th>
                                      <th class="table-head--item table-head--5" scope="col">В</th>
                                      <th class="table-head--item table-head--5" scope="col">Н</th>
                                      <th class="table-head--item table-head--5" scope="col">П</th>
                                      <th class="table-head--item table-head--5" scope="col">+</th>
                                      <th class="table-head--item table-head--5" scope="col">-</th>
                                      <th class="table-head--item table-head--5" scope="col">О</th>
                                  </tr>
                              </table>
                            </div>
                            <div class="table-container">
                              <p class="table-container--name">Группа G</p>
                              <table class="table standing-table champions-league--tableG">
                                  <tr class="table-head">
                                      <th class="table-head--item table-head--1" scope="col">#</th>
                                      <th class="table-head--item table-head--2" scope="col">Команда</th>
                                      <th class="table-head--item table-head--5" scope="col">И</th>
                                      <th class="table-head--item table-head--5" scope="col">В</th>
                                      <th class="table-head--item table-head--5" scope="col">Н</th>
                                      <th class="table-head--item table-head--5" scope="col">П</th>
                                      <th class="table-head--item table-head--5" scope="col">+</th>
                                      <th class="table-head--item table-head--5" scope="col">-</th>
                                      <th class="table-head--item table-head--5" scope="col">О</th>
                                  </tr>
                              </table>
                            </div>
                            <div class="table-container">
                              <p class="table-container--name">Группа H</p>
                              <table class="table standing-table champions-league--tableH">
                                  <tr class="table-head">
                                      <th class="table-head--item table-head--1" scope="col">#</th>
                                      <th class="table-head--item table-head--2" scope="col">Команда</th>
                                      <th class="table-head--item table-head--5" scope="col">И</th>
                                      <th class="table-head--item table-head--5" scope="col">В</th>
                                      <th class="table-head--item table-head--5" scope="col">Н</th>
                                      <th class="table-head--item table-head--5" scope="col">П</th>
                                      <th class="table-head--item table-head--5" scope="col">+</th>
                                      <th class="table-head--item table-head--5" scope="col">-</th>
                                      <th class="table-head--item table-head--5" scope="col">О</th>
                                  </tr>
                              </table>
                            </div>
                          </div>
                        </article>
                      </div>`;

  getTableEuropaLeague(URL_GET_STANDINGS_EUROPA_LEAGUE);
  const buttonReview = document.querySelector(".btn-review");
  const buttonStatistics = document.querySelector(".btn-statistics");
  buttonStatistics.addEventListener(
    "click",
    handleButtonClickStatisticsEuropaLeague
  );
  buttonReview.classList.add("active");
}

function handleButtonClickReviewEuropaLeague() {
  const buttonReview = document.querySelector(".btn-review");
  const buttonStatistics = document.querySelector(".btn-statistics");
  buttonReview.removeEventListener(
    "click",
    handleButtonClickReviewEuropaLeague
  );
  buttonStatistics.addEventListener(
    "click",
    handleButtonClickStatisticsEuropaLeague
  );
  buttonStatistics.classList.remove("active");
  buttonReview.classList.add("active");
  showTableEuropaLeague();
}

function handleButtonClickStatisticsEuropaLeague() {
  const buttonReview = document.querySelector(".btn-review");
  const buttonStatistics = document.querySelector(".btn-statistics");
  buttonStatistics.removeEventListener(
    "click",
    handleButtonClickStatisticsEuropaLeague
  );
  buttonReview.addEventListener("click", handleButtonClickReviewEuropaLeague);
  buttonReview.classList.remove("active");
  buttonStatistics.classList.add("active");
  const mainContainer2 = document.querySelector(".main-container2");
  mainContainer2.innerHTML = `
            <div class="table-container">
              <table class="table standing-table champions-league--players">
                  <tr class="table-head">
                      <th class="table-head--item table-player--1" scope="col">#</th>
                      <th class="table-head--item table-player--2" scope="col">Игрок</th>
                      <th class="table-head--item table-player--3" scope="col">Команда</th>
                      <th class="table-head--item table-player--5" scope="col">Голы</th>
                  </tr>
              </table>
            </div>`;
  getPlayersEuropaLeague(URL_GET_PLAYERS_EUROPA_LEAGUE);
}

async function getTableEuropaLeague(url) {
  const response = await fetch(url);
  const data = await response.json();
  fillTableEuropaLeague(data);
}

async function getPlayersEuropaLeague(url) {
  const response = await fetch(url);
  const data = await response.json();
  fillTablePlayersEuropaLeague(data);
}

async function fillTablePlayersEuropaLeague(data) {
  const tablePlayersLch = document.querySelector(".champions-league--players");
  const arrayPlayersInfoPromices = [];
  const arrayTeamsInfoPromices = [];
  for (let i = 0; i < 10; i++) {
    arrayPlayersInfoPromices.push(getPlayer(data[i].player_key));
    arrayTeamsInfoPromices.push(getTeam(data[i].team_key));
  }
  const arrayPlayersInfo = await Promise.all(arrayPlayersInfoPromices);
  const arrayTeamsInfo = await Promise.all(arrayTeamsInfoPromices);
  for (let i = 0; i < 10; i++) {
    const newRow = tablePlayersLch.insertRow();
    newRow.classList.add("td-players");
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    cell1.classList.add("table-players-item");
    cell2.classList.add("table-players-item");
    cell3.classList.add("table-players-item");
    cell4.classList.add("table-players-item");
    cell2.classList.add("table-players--2");
    cell3.classList.add("table-players--3");
    cell1.textContent = i + 1;
    const playerPhoto = arrayPlayersInfo[i][0].player_image;
    const teamPhoto = arrayTeamsInfo[i][0].team_badge;

    cell2.innerHTML = `<img width="100" src="${playerPhoto}" onerror="this.onerror=null; this.src='https://ofstats.com/img/player_logo/55109e2e-d399-4e8e-a3d0-47707300927f.png'"> <p>${data[i].player_name}</p>`;
    cell3.innerHTML = `<img width="100" src="${teamPhoto}"> <p>${data[i].team_name}</p>`;
    cell4.textContent = `${data[i].goals}`;
  }
}

function fillTableEuropaLeague(data) {
  const LchTableA = document.querySelector(".champions-league--tableA");
  const LchTableB = document.querySelector(".champions-league--tableB");
  const LchTableC = document.querySelector(".champions-league--tableC");
  const LchTableD = document.querySelector(".champions-league--tableD");
  const LchTableE = document.querySelector(".champions-league--tableE");
  const LchTableF = document.querySelector(".champions-league--tableF");
  const LchTableG = document.querySelector(".champions-league--tableG");
  const LchTableH = document.querySelector(".champions-league--tableH");

  for (let i = 0; i < 4; i++) {
    const newRow = LchTableA.insertRow();
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
    const cell6 = newRow.insertCell(5);
    const cell7 = newRow.insertCell(6);
    const cell8 = newRow.insertCell(7);
    const cell9 = newRow.insertCell(8);
    if (i == 0 || i == 1) {
      cell1.classList.add("first-team");
    } else if (i == 2) {
      cell1.classList.add("third-team");
    }
    cell1.textContent = i + 1;
    cell2.classList.add("club-name");
    cell2.innerHTML = `<img width="30" src="${data[i].team_badge}"> ${data[i].team_name}`;
    cell3.textContent = data[i].overall_league_payed;
    cell4.textContent = data[i].overall_league_W;
    cell5.textContent = data[i].overall_league_D;
    cell6.textContent = data[i].overall_league_L;
    cell7.textContent = data[i].overall_league_GF;
    cell8.textContent = data[i].overall_league_GA;
    cell9.textContent = data[i].overall_league_PTS;
  }
  for (let i = 4; i < 8; i++) {
    const newRow = LchTableB.insertRow();
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
    const cell6 = newRow.insertCell(5);
    const cell7 = newRow.insertCell(6);
    const cell8 = newRow.insertCell(7);
    const cell9 = newRow.insertCell(8);
    if (i == 4 || i == 5) {
      cell1.classList.add("first-team");
    } else if (i == 6) {
      cell1.classList.add("third-team");
    }
    cell1.textContent = (i % 4) + 1;
    cell2.classList.add("club-name");
    cell2.innerHTML = `<img width="30" src="${data[i].team_badge}"> ${data[i].team_name}`;
    cell3.textContent = data[i].overall_league_payed;
    cell4.textContent = data[i].overall_league_W;
    cell5.textContent = data[i].overall_league_D;
    cell6.textContent = data[i].overall_league_L;
    cell7.textContent = data[i].overall_league_GF;
    cell8.textContent = data[i].overall_league_GA;
    cell9.textContent = data[i].overall_league_PTS;
  }
  for (let i = 8; i < 12; i++) {
    const newRow = LchTableC.insertRow();
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
    const cell6 = newRow.insertCell(5);
    const cell7 = newRow.insertCell(6);
    const cell8 = newRow.insertCell(7);
    const cell9 = newRow.insertCell(8);
    if (i == 8 || i == 9) {
      cell1.classList.add("first-team");
    } else if (i == 10) {
      cell1.classList.add("third-team");
    }
    cell1.textContent = (i % 4) + 1;
    cell2.classList.add("club-name");
    cell2.innerHTML = `<img width="30" src="${data[i].team_badge}"> ${data[i].team_name}`;
    cell3.textContent = data[i].overall_league_payed;
    cell4.textContent = data[i].overall_league_W;
    cell5.textContent = data[i].overall_league_D;
    cell6.textContent = data[i].overall_league_L;
    cell7.textContent = data[i].overall_league_GF;
    cell8.textContent = data[i].overall_league_GA;
    cell9.textContent = data[i].overall_league_PTS;
  }
  for (let i = 12; i < 16; i++) {
    const newRow = LchTableD.insertRow();
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
    const cell6 = newRow.insertCell(5);
    const cell7 = newRow.insertCell(6);
    const cell8 = newRow.insertCell(7);
    const cell9 = newRow.insertCell(8);
    if (i == 12 || i == 13) {
      cell1.classList.add("first-team");
    } else if (i == 14) {
      cell1.classList.add("third-team");
    }
    cell1.textContent = (i % 4) + 1;
    cell2.classList.add("club-name");
    cell2.innerHTML = `<img width="30" src="${data[i].team_badge}"> ${data[i].team_name}`;
    cell3.textContent = data[i].overall_league_payed;
    cell4.textContent = data[i].overall_league_W;
    cell5.textContent = data[i].overall_league_D;
    cell6.textContent = data[i].overall_league_L;
    cell7.textContent = data[i].overall_league_GF;
    cell8.textContent = data[i].overall_league_GA;
    cell9.textContent = data[i].overall_league_PTS;
  }
  for (let i = 16; i < 20; i++) {
    const newRow = LchTableE.insertRow();
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
    const cell6 = newRow.insertCell(5);
    const cell7 = newRow.insertCell(6);
    const cell8 = newRow.insertCell(7);
    const cell9 = newRow.insertCell(8);
    if (i == 16 || i == 17) {
      cell1.classList.add("first-team");
    } else if (i == 18) {
      cell1.classList.add("third-team");
    }
    cell1.textContent = (i % 4) + 1;
    cell2.classList.add("club-name");
    cell2.innerHTML = `<img width="30" src="${data[i].team_badge}"> ${data[i].team_name}`;
    cell3.textContent = data[i].overall_league_payed;
    cell4.textContent = data[i].overall_league_W;
    cell5.textContent = data[i].overall_league_D;
    cell6.textContent = data[i].overall_league_L;
    cell7.textContent = data[i].overall_league_GF;
    cell8.textContent = data[i].overall_league_GA;
    cell9.textContent = data[i].overall_league_PTS;
  }
  for (let i = 20; i < 24; i++) {
    const newRow = LchTableF.insertRow();
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
    const cell6 = newRow.insertCell(5);
    const cell7 = newRow.insertCell(6);
    const cell8 = newRow.insertCell(7);
    const cell9 = newRow.insertCell(8);
    if (i == 20 || i == 21) {
      cell1.classList.add("first-team");
    } else if (i == 22) {
      cell1.classList.add("third-team");
    }
    cell1.textContent = (i % 4) + 1;
    cell2.classList.add("club-name");
    cell2.innerHTML = `<img width="30" src="${data[i].team_badge}"> ${data[i].team_name}`;
    cell3.textContent = data[i].overall_league_payed;
    cell4.textContent = data[i].overall_league_W;
    cell5.textContent = data[i].overall_league_D;
    cell6.textContent = data[i].overall_league_L;
    cell7.textContent = data[i].overall_league_GF;
    cell8.textContent = data[i].overall_league_GA;
    cell9.textContent = data[i].overall_league_PTS;
  }
  for (let i = 24; i < 28; i++) {
    const newRow = LchTableG.insertRow();
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
    const cell6 = newRow.insertCell(5);
    const cell7 = newRow.insertCell(6);
    const cell8 = newRow.insertCell(7);
    const cell9 = newRow.insertCell(8);
    if (i == 24 || i == 25) {
      cell1.classList.add("first-team");
    } else if (i == 26) {
      cell1.classList.add("third-team");
    }
    cell1.textContent = (i % 4) + 1;
    cell2.classList.add("club-name");
    cell2.innerHTML = `<img width="30" src="${data[i].team_badge}"> ${data[i].team_name}`;
    cell3.textContent = data[i].overall_league_payed;
    cell4.textContent = data[i].overall_league_W;
    cell5.textContent = data[i].overall_league_D;
    cell6.textContent = data[i].overall_league_L;
    cell7.textContent = data[i].overall_league_GF;
    cell8.textContent = data[i].overall_league_GA;
    cell9.textContent = data[i].overall_league_PTS;
  }
  for (let i = 28; i < 32; i++) {
    const newRow = LchTableH.insertRow();
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
    const cell6 = newRow.insertCell(5);
    const cell7 = newRow.insertCell(6);
    const cell8 = newRow.insertCell(7);
    const cell9 = newRow.insertCell(8);
    if (i == 28 || i == 29) {
      cell1.classList.add("first-team");
    } else if (i == 30) {
      cell1.classList.add("third-team");
    }
    cell1.textContent = (i % 4) + 1;
    cell2.classList.add("club-name");
    cell2.innerHTML = `<img width="30" src="${data[i].team_badge}"> ${data[i].team_name}`;
    cell3.textContent = data[i].overall_league_payed;
    cell4.textContent = data[i].overall_league_W;
    cell5.textContent = data[i].overall_league_D;
    cell6.textContent = data[i].overall_league_L;
    cell7.textContent = data[i].overall_league_GF;
    cell8.textContent = data[i].overall_league_GA;
    cell9.textContent = data[i].overall_league_PTS;
  }
}

function showTablePremierLeague() {
  const mainTag = document.querySelector("main");
  mainTag.innerHTML = `<div class="main-container1">
                        <aside class="aside">
                          <div class="aside-img">
                            <img src="https://ofstats.com/img/league_logo/87ab049c-21ba-4b5b-bbd1-abeb892c63e6.png" alt="">
                          </div>
                          <div class="aside-name">
                            <p class="aside-title--text">Название</p>
                            <p class="aside-text">Premier League</p>
                          </div>
                          <div class="aside-season">
                            <p class="aside-title--text">Текущий сезон</p>
                            <p class="aside-text">2023/2024</p>
                          </div>
                          <div class="aside-country">
                            <p class="aside-title--text">Страна</p>
                            <p class="aside-text">England</p>
                          </div>
                          <div class="cup">
                            <img class="cup-img" src="https://i4.stat01.com/2/2279/122789270/afacdb/chempionskij-kubok-anglijskoj-premer-ligi-16-sm.jpg" alt="">
                          </div>
                        </aside>
                        <article class="article">
                          <section class="section">
                            <div class="review">
                              <button class="btn btn-review">
                                <p class="btn-text">Обзор</p>
                              </button>

                              <button class="btn btn-statistics">
                                <p class="btn-text">Бомбардиры</p>
                              </button>
                            </div>
                          </section>
                          <div class="main-container2">
                            <div class="table-container">
                              <p class="table-container--name">Группа</p>
                              <table class="table standing-table champions-league--tableA">
                                  <tr class="table-head">
                                      <th class="table-head--item table-head--1" scope="col">#</th>
                                      <th class="table-head--item table-head--2" scope="col">Команда</th>
                                      <th class="table-head--item table-head--5" scope="col">И</th>
                                      <th class="table-head--item table-head--5" scope="col">В</th>
                                      <th class="table-head--item table-head--5" scope="col">Н</th>
                                      <th class="table-head--item table-head--5" scope="col">П</th>
                                      <th class="table-head--item table-head--5" scope="col">+</th>
                                      <th class="table-head--item table-head--5" scope="col">-</th>
                                      <th class="table-head--item table-head--5" scope="col">О</th>
                                  </tr>
                              </table>
                            </div>
                          </div>
                        </article>
                      </div>`;

  getTablePremierLeague(URL_GET_STANDINGS_PREMIER_LEAGUE);
  const buttonReview = document.querySelector(".btn-review");
  const buttonStatistics = document.querySelector(".btn-statistics");
  buttonStatistics.addEventListener(
    "click",
    handleButtonClickStatisticsPremierLeague
  );
  buttonReview.classList.add("active");
}

async function getTablePremierLeague(url) {
  const response = await fetch(url);
  const data = await response.json();
  fillTablePremierLeague(data);
}

function fillTablePremierLeague(data) {
  const LchTableA = document.querySelector(".champions-league--tableA");

  for (let i = 0; i < 20; i++) {
    const newRow = LchTableA.insertRow();
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
    const cell6 = newRow.insertCell(5);
    const cell7 = newRow.insertCell(6);
    const cell8 = newRow.insertCell(7);
    const cell9 = newRow.insertCell(8);
    if (i <= 3) {
      cell1.classList.add("first-team");
    } else if (i == 4) {
      cell1.classList.add("third-team");
    } else if (i >= 17) {
      cell1.classList.add("looser-team");
    }
    cell1.textContent = i + 1;
    cell2.classList.add("club-name");
    cell2.innerHTML = `<img width="30" src="${data[i].team_badge}"> ${data[i].team_name}`;
    cell3.textContent = data[i].overall_league_payed;
    cell4.textContent = data[i].overall_league_W;
    cell5.textContent = data[i].overall_league_D;
    cell6.textContent = data[i].overall_league_L;
    cell7.textContent = data[i].overall_league_GF;
    cell8.textContent = data[i].overall_league_GA;
    cell9.textContent = data[i].overall_league_PTS;
  }
}

function handleButtonClickReviewPremierLeague() {
  const buttonReview = document.querySelector(".btn-review");
  const buttonStatistics = document.querySelector(".btn-statistics");
  buttonReview.removeEventListener(
    "click",
    handleButtonClickReviewPremierLeague
  );
  buttonStatistics.addEventListener(
    "click",
    handleButtonClickStatisticsPremierLeague
  );
  buttonStatistics.classList.remove("active");
  buttonReview.classList.add("active");
  showTablePremierLeague();
}

function handleButtonClickStatisticsPremierLeague() {
  const buttonReview = document.querySelector(".btn-review");
  const buttonStatistics = document.querySelector(".btn-statistics");
  buttonStatistics.removeEventListener(
    "click",
    handleButtonClickStatisticsPremierLeague
  );
  buttonReview.addEventListener("click", handleButtonClickReviewPremierLeague);
  buttonReview.classList.remove("active");
  buttonStatistics.classList.add("active");
  const mainContainer2 = document.querySelector(".main-container2");
  mainContainer2.innerHTML = `
            <div class="table-container">
              <table class="table standing-table champions-league--players">
                  <tr class="table-head">
                      <th class="table-head--item table-player--1" scope="col">#</th>
                      <th class="table-head--item table-player--2" scope="col">Игрок</th>
                      <th class="table-head--item table-player--3" scope="col">Команда</th>
                      <th class="table-head--item table-player--5" scope="col">Голы</th>
                  </tr>
              </table>
            </div>`;
  getPlayersLch(URL_GET_PLAYERS_PREMIER_LEAGUE);
}

function showTableSeriaA() {
  const mainTag = document.querySelector("main");
  mainTag.innerHTML = `<div class="main-container1">
                        <aside class="aside">
                          <div class="aside-img">
                            <img src="https://ofstats.com/img/league_logo/eaaa4c34-4079-48c0-b290-a9eb80ffaa84.png" alt="">
                          </div>
                          <div class="aside-name">
                            <p class="aside-title--text">Название</p>
                            <p class="aside-text">Seria A</p>
                          </div>
                          <div class="aside-season">
                            <p class="aside-title--text">Текущий сезон</p>
                            <p class="aside-text">2023/2024</p>
                          </div>
                          <div class="aside-country">
                            <p class="aside-title--text">Страна</p>
                            <p class="aside-text">Italis</p>
                          </div>
                          <div class="cup">
                            <img class="cup-img" src="https://desporter.com.ua/i/cups/seria_a.jpg" alt="">
                          </div>
                        </aside>
                        <article class="article">
                          <section class="section">
                            <div class="review">
                              <button class="btn btn-review">
                                <p class="btn-text">Обзор</p>
                              </button>

                              <button class="btn btn-statistics">
                                <p class="btn-text">Бомбардиры</p>
                              </button>
                            </div>
                          </section>
                          <div class="main-container2">
                            <div class="table-container">
                              <p class="table-container--name">Группа</p>
                              <table class="table standing-table champions-league--tableA">
                                  <tr class="table-head">
                                      <th class="table-head--item table-head--1" scope="col">#</th>
                                      <th class="table-head--item table-head--2" scope="col">Команда</th>
                                      <th class="table-head--item table-head--5" scope="col">И</th>
                                      <th class="table-head--item table-head--5" scope="col">В</th>
                                      <th class="table-head--item table-head--5" scope="col">Н</th>
                                      <th class="table-head--item table-head--5" scope="col">П</th>
                                      <th class="table-head--item table-head--5" scope="col">+</th>
                                      <th class="table-head--item table-head--5" scope="col">-</th>
                                      <th class="table-head--item table-head--5" scope="col">О</th>
                                  </tr>
                              </table>
                            </div>
                          </div>
                        </article>
                      </div>`;

  getTableSeriaA(URL_GET_STANDINGS_SERIA_A);
  const buttonReview = document.querySelector(".btn-review");
  const buttonStatistics = document.querySelector(".btn-statistics");
  buttonStatistics.addEventListener("click", handleButtonClickStatisticsSeriaA);
  buttonReview.classList.add("active");
}

async function getTableSeriaA(url) {
  const response = await fetch(url);
  const data = await response.json();
  fillTableSeriaA(data);
}

function fillTableSeriaA(data) {
  const LchTableA = document.querySelector(".champions-league--tableA");

  for (let i = 0; i < 20; i++) {
    const newRow = LchTableA.insertRow();
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
    const cell6 = newRow.insertCell(5);
    const cell7 = newRow.insertCell(6);
    const cell8 = newRow.insertCell(7);
    const cell9 = newRow.insertCell(8);
    if (i <= 3) {
      cell1.classList.add("first-team");
    } else if (i == 4) {
      cell1.classList.add("third-team");
    } else if (i == 5) {
      cell1.classList.add("six-team");
    } else if (i >= 17) {
      cell1.classList.add("looser-team");
    }
    cell1.textContent = i + 1;
    cell2.classList.add("club-name");
    cell2.innerHTML = `<img width="30" src="${data[i].team_badge}"> ${data[i].team_name}`;
    cell3.textContent = data[i].overall_league_payed;
    cell4.textContent = data[i].overall_league_W;
    cell5.textContent = data[i].overall_league_D;
    cell6.textContent = data[i].overall_league_L;
    cell7.textContent = data[i].overall_league_GF;
    cell8.textContent = data[i].overall_league_GA;
    cell9.textContent = data[i].overall_league_PTS;
  }
}

function handleButtonClickReviewSeriaA() {
  const buttonReview = document.querySelector(".btn-review");
  const buttonStatistics = document.querySelector(".btn-statistics");
  buttonReview.removeEventListener("click", handleButtonClickReviewSeriaA);
  buttonStatistics.addEventListener("click", handleButtonClickStatisticsSeriaA);
  buttonStatistics.classList.remove("active");
  buttonReview.classList.add("active");
  showTableSeriaA();
}

function handleButtonClickStatisticsSeriaA() {
  const buttonReview = document.querySelector(".btn-review");
  const buttonStatistics = document.querySelector(".btn-statistics");
  buttonStatistics.removeEventListener(
    "click",
    handleButtonClickStatisticsSeriaA
  );
  buttonReview.addEventListener("click", handleButtonClickReviewSeriaA);
  buttonReview.classList.remove("active");
  buttonStatistics.classList.add("active");
  const mainContainer2 = document.querySelector(".main-container2");
  mainContainer2.innerHTML = `
            <div class="table-container">
              <table class="table standing-table champions-league--players">
                  <tr class="table-head">
                      <th class="table-head--item table-player--1" scope="col">#</th>
                      <th class="table-head--item table-player--2" scope="col">Игрок</th>
                      <th class="table-head--item table-player--3" scope="col">Команда</th>
                      <th class="table-head--item table-player--5" scope="col">Голы</th>
                  </tr>
              </table>
            </div>`;
  getPlayersSeriaA(URL_GET_PLAYERS_SERIA_A);
}

async function getPlayersSeriaA(url) {
  const response = await fetch(url);
  const data = await response.json();
  fillTablePlayersSeriaA(data);
}

async function fillTablePlayersSeriaA(data) {
  const tablePlayersLch = document.querySelector(".champions-league--players");
  const arrayPlayersInfoPromices = [];
  const arrayTeamsInfoPromices = [];
  for (let i = 0; i < 10; i++) {
    arrayPlayersInfoPromices.push(getPlayer(data[i].player_key));
    arrayTeamsInfoPromices.push(getTeam(data[i].team_key));
  }
  const arrayPlayersInfo = await Promise.all(arrayPlayersInfoPromices);
  const arrayTeamsInfo = await Promise.all(arrayTeamsInfoPromices);
  for (let i = 0; i < 10; i++) {
    const newRow = tablePlayersLch.insertRow();
    newRow.classList.add("td-players");
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    cell1.classList.add("table-players-item");
    cell2.classList.add("table-players-item");
    cell3.classList.add("table-players-item");
    cell4.classList.add("table-players-item");
    cell2.classList.add("table-players--2");
    cell3.classList.add("table-players--3");
    cell1.textContent = i + 1;
    const playerPhoto = arrayPlayersInfo[i][0].player_image;
    const teamPhoto = arrayTeamsInfo[i][0].team_badge;

    cell2.innerHTML = `<img width="100" src="${playerPhoto}" onerror="this.onerror=null; this.src='https://ofstats.com/img/player_logo/55109e2e-d399-4e8e-a3d0-47707300927f.png'"> <p>${data[i].player_name}</p>`;
    cell3.innerHTML = `<img width="100" src="${teamPhoto}"> <p>${data[i].team_name}</p>`;
    cell4.textContent = `${data[i].goals}`;
  }
}

function showTableLaLiga() {
  const mainTag = document.querySelector("main");
  mainTag.innerHTML = `<div class="main-container1">
                        <aside class="aside">
                          <div class="aside-img">
                            <img src="https://ofstats.com/img/league_logo/8947bfd2-53f4-4a39-bca4-62ee2acc42c9.png" alt="">
                          </div>
                          <div class="aside-name">
                            <p class="aside-title--text">Название</p>
                            <p class="aside-text">La Liga</p>
                          </div>
                          <div class="aside-season">
                            <p class="aside-title--text">Текущий сезон</p>
                            <p class="aside-text">2023/2024</p>
                          </div>
                          <div class="aside-country">
                            <p class="aside-title--text">Страна</p>
                            <p class="aside-text">Spain</p>
                          </div>
                          <div class="cup">
                            <img class="cup-img" src="https://espanarusa.com/files/autoupload/43/71/12/hs1fsaeo40696.jpg" alt="">
                          </div>
                        </aside>
                        <article class="article">
                          <section class="section">
                            <div class="review">
                              <button class="btn btn-review">
                                <p class="btn-text">Обзор</p>
                              </button>

                              <button class="btn btn-statistics">
                                <p class="btn-text">Бомбардиры</p>
                              </button>
                            </div>
                          </section>
                          <div class="main-container2">
                            <div class="table-container">
                              <p class="table-container--name">Группа</p>
                              <table class="table standing-table champions-league--tableA">
                                  <tr class="table-head">
                                      <th class="table-head--item table-head--1" scope="col">#</th>
                                      <th class="table-head--item table-head--2" scope="col">Команда</th>
                                      <th class="table-head--item table-head--5" scope="col">И</th>
                                      <th class="table-head--item table-head--5" scope="col">В</th>
                                      <th class="table-head--item table-head--5" scope="col">Н</th>
                                      <th class="table-head--item table-head--5" scope="col">П</th>
                                      <th class="table-head--item table-head--5" scope="col">+</th>
                                      <th class="table-head--item table-head--5" scope="col">-</th>
                                      <th class="table-head--item table-head--5" scope="col">О</th>
                                  </tr>
                              </table>
                            </div>
                          </div>
                        </article>
                      </div>`;

  getTableLaLiga(URL_GET_STANDINGS_LA_LIGA);
  const buttonReview = document.querySelector(".btn-review");
  const buttonStatistics = document.querySelector(".btn-statistics");
  buttonStatistics.addEventListener("click", handleButtonClickStatisticsLaLiga);
  buttonReview.classList.add("active");
}

async function getTableLaLiga(url) {
  const response = await fetch(url);
  const data = await response.json();
  fillTableLaLiga(data);
}

function fillTableLaLiga(data) {
  const LchTableA = document.querySelector(".champions-league--tableA");

  for (let i = 0; i < 20; i++) {
    const newRow = LchTableA.insertRow();
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
    const cell6 = newRow.insertCell(5);
    const cell7 = newRow.insertCell(6);
    const cell8 = newRow.insertCell(7);
    const cell9 = newRow.insertCell(8);
    if (i <= 3) {
      cell1.classList.add("first-team");
    } else if (i == 4) {
      cell1.classList.add("third-team");
    } else if (i == 5) {
      cell1.classList.add("six-team");
    } else if (i >= 17) {
      cell1.classList.add("looser-team");
    }
    cell1.textContent = i + 1;
    cell2.classList.add("club-name");
    cell2.innerHTML = `<img width="30" src="${data[i].team_badge}"> ${data[i].team_name}`;
    cell3.textContent = data[i].overall_league_payed;
    cell4.textContent = data[i].overall_league_W;
    cell5.textContent = data[i].overall_league_D;
    cell6.textContent = data[i].overall_league_L;
    cell7.textContent = data[i].overall_league_GF;
    cell8.textContent = data[i].overall_league_GA;
    cell9.textContent = data[i].overall_league_PTS;
  }
}

function handleButtonClickReviewLaLiga() {
  const buttonReview = document.querySelector(".btn-review");
  const buttonStatistics = document.querySelector(".btn-statistics");
  buttonReview.removeEventListener("click", handleButtonClickReviewLaLiga);
  buttonStatistics.addEventListener("click", handleButtonClickStatisticsLaLiga);
  buttonStatistics.classList.remove("active");
  buttonReview.classList.add("active");
  showTableLaLiga();
}

function handleButtonClickStatisticsLaLiga() {
  const buttonReview = document.querySelector(".btn-review");
  const buttonStatistics = document.querySelector(".btn-statistics");
  buttonStatistics.removeEventListener(
    "click",
    handleButtonClickStatisticsLaLiga
  );
  buttonReview.addEventListener("click", handleButtonClickReviewLaLiga);
  buttonReview.classList.remove("active");
  buttonStatistics.classList.add("active");
  const mainContainer2 = document.querySelector(".main-container2");
  mainContainer2.innerHTML = `
            <div class="table-container">
              <table class="table standing-table champions-league--players">
                  <tr class="table-head">
                      <th class="table-head--item table-player--1" scope="col">#</th>
                      <th class="table-head--item table-player--2" scope="col">Игрок</th>
                      <th class="table-head--item table-player--3" scope="col">Команда</th>
                      <th class="table-head--item table-player--5" scope="col">Голы</th>
                  </tr>
              </table>
            </div>`;
  getPlayersLaLiga(URL_GET_PLAYERS_LA_LIGA);
}

async function getPlayersLaLiga(url) {
  const response = await fetch(url);
  const data = await response.json();
  fillTablePlayersLaLiga(data);
}

async function fillTablePlayersLaLiga(data) {
  const tablePlayersLch = document.querySelector(".champions-league--players");
  const arrayPlayersInfoPromices = [];
  const arrayTeamsInfoPromices = [];
  for (let i = 0; i < 10; i++) {
    arrayPlayersInfoPromices.push(getPlayer(data[i].player_key));
    arrayTeamsInfoPromices.push(getTeam(data[i].team_key));
  }
  const arrayPlayersInfo = await Promise.all(arrayPlayersInfoPromices);
  const arrayTeamsInfo = await Promise.all(arrayTeamsInfoPromices);
  for (let i = 0; i < 10; i++) {
    const newRow = tablePlayersLch.insertRow();
    newRow.classList.add("td-players");
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    cell1.classList.add("table-players-item");
    cell2.classList.add("table-players-item");
    cell3.classList.add("table-players-item");
    cell4.classList.add("table-players-item");
    cell2.classList.add("table-players--2");
    cell3.classList.add("table-players--3");
    cell1.textContent = i + 1;
    const playerPhoto = arrayPlayersInfo[i][0].player_image;
    const teamPhoto = arrayTeamsInfo[i][0].team_badge;

    cell2.innerHTML = `<img width="100" src="${playerPhoto}" onerror="this.onerror=null; this.src='https://ofstats.com/img/player_logo/55109e2e-d399-4e8e-a3d0-47707300927f.png'"> <p>${data[i].player_name}</p>`;
    cell3.innerHTML = `<img width="100" src="${teamPhoto}"> <p>${data[i].team_name}</p>`;
    cell4.textContent = `${data[i].goals}`;
  }
}

function showTableBundesLiga() {
  const mainTag = document.querySelector("main");
  mainTag.innerHTML = `<div class="main-container1">
                        <aside class="aside">
                          <div class="aside-img">
                            <img src="https://ofstats.com/img/league_logo/b0b6d606-6e10-4a1d-9f74-885826642e7e.png" alt="">
                          </div>
                          <div class="aside-name">
                            <p class="aside-title--text">Название</p>
                            <p class="aside-text">Bundesliga</p>
                          </div>
                          <div class="aside-season">
                            <p class="aside-title--text">Текущий сезон</p>
                            <p class="aside-text">2023/2024</p>
                          </div>
                          <div class="aside-country">
                            <p class="aside-title--text">Страна</p>
                            <p class="aside-text">Germany</p>
                          </div>
                          <div class="cup">
                            <img class="cup-img" src="https://photobooth.cdn.sports.ru/preset/post/e/bb/e0af1756c4088a24684dcc3eb318c.jpeg" alt="">
                          </div>
                        </aside>
                        <article class="article">
                          <section class="section">
                            <div class="review">
                              <button class="btn btn-review">
                                <p class="btn-text">Обзор</p>
                              </button>

                              <button class="btn btn-statistics">
                                <p class="btn-text">Бомбардиры</p>
                              </button>
                            </div>
                          </section>
                          <div class="main-container2">
                            <div class="table-container">
                              <p class="table-container--name">Группа</p>
                              <table class="table standing-table champions-league--tableA">
                                  <tr class="table-head">
                                      <th class="table-head--item table-head--1" scope="col">#</th>
                                      <th class="table-head--item table-head--2" scope="col">Команда</th>
                                      <th class="table-head--item table-head--5" scope="col">И</th>
                                      <th class="table-head--item table-head--5" scope="col">В</th>
                                      <th class="table-head--item table-head--5" scope="col">Н</th>
                                      <th class="table-head--item table-head--5" scope="col">П</th>
                                      <th class="table-head--item table-head--5" scope="col">+</th>
                                      <th class="table-head--item table-head--5" scope="col">-</th>
                                      <th class="table-head--item table-head--5" scope="col">О</th>
                                  </tr>
                              </table>
                            </div>
                          </div>
                        </article>
                      </div>`;

  getTableBundesLiga(URL_GET_STANDINGS_BUNDES_LIGA);
  const buttonReview = document.querySelector(".btn-review");
  const buttonStatistics = document.querySelector(".btn-statistics");
  buttonStatistics.addEventListener(
    "click",
    handleButtonClickStatisticsBundesLiga
  );
  buttonReview.classList.add("active");
}

async function getTableBundesLiga(url) {
  const response = await fetch(url);
  const data = await response.json();
  fillTableBundesLiga(data);
}

function fillTableBundesLiga(data) {
  const LchTableA = document.querySelector(".champions-league--tableA");

  for (let i = 0; i < 18; i++) {
    const newRow = LchTableA.insertRow();
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
    const cell6 = newRow.insertCell(5);
    const cell7 = newRow.insertCell(6);
    const cell8 = newRow.insertCell(7);
    const cell9 = newRow.insertCell(8);
    if (i <= 3) {
      cell1.classList.add("first-team");
    } else if (i == 4) {
      cell1.classList.add("third-team");
    } else if (i == 5) {
      cell1.classList.add("six-team");
    } else if (i == 15) {
      cell1.classList.add("playoff-team");
    } else if (i >= 16) {
      cell1.classList.add("looser-team");
    }
    cell1.textContent = i + 1;
    cell2.classList.add("club-name");
    cell2.innerHTML = `<img width="30" src="${data[i].team_badge}"> ${data[i].team_name}`;
    cell3.textContent = data[i].overall_league_payed;
    cell4.textContent = data[i].overall_league_W;
    cell5.textContent = data[i].overall_league_D;
    cell6.textContent = data[i].overall_league_L;
    cell7.textContent = data[i].overall_league_GF;
    cell8.textContent = data[i].overall_league_GA;
    cell9.textContent = data[i].overall_league_PTS;
  }
}

function handleButtonClickReviewBundesLiga() {
  const buttonReview = document.querySelector(".btn-review");
  const buttonStatistics = document.querySelector(".btn-statistics");
  buttonReview.removeEventListener("click", handleButtonClickReviewBundesLiga);
  buttonStatistics.addEventListener(
    "click",
    handleButtonClickStatisticsBundesLiga
  );
  buttonStatistics.classList.remove("active");
  buttonReview.classList.add("active");
  showTableBundesLiga();
}

function handleButtonClickStatisticsBundesLiga() {
  const buttonReview = document.querySelector(".btn-review");
  const buttonStatistics = document.querySelector(".btn-statistics");
  buttonStatistics.removeEventListener(
    "click",
    handleButtonClickStatisticsBundesLiga
  );
  buttonReview.addEventListener("click", handleButtonClickReviewBundesLiga);
  buttonReview.classList.remove("active");
  buttonStatistics.classList.add("active");
  const mainContainer2 = document.querySelector(".main-container2");
  mainContainer2.innerHTML = `
            <div class="table-container">
              <table class="table standing-table champions-league--players">
                  <tr class="table-head">
                      <th class="table-head--item table-player--1" scope="col">#</th>
                      <th class="table-head--item table-player--2" scope="col">Игрок</th>
                      <th class="table-head--item table-player--3" scope="col">Команда</th>
                      <th class="table-head--item table-player--5" scope="col">Голы</th>
                  </tr>
              </table>
            </div>`;
  getPlayersBundesLiga(URL_GET_PLAYERS_BUNDES_LIGA);
}

async function getPlayersBundesLiga(url) {
  const response = await fetch(url);
  const data = await response.json();
  fillTablePlayersBundesLiga(data);
}

async function fillTablePlayersBundesLiga(data) {
  const tablePlayersLch = document.querySelector(".champions-league--players");
  const arrayPlayersInfoPromices = [];
  const arrayTeamsInfoPromices = [];
  for (let i = 0; i < 10; i++) {
    arrayPlayersInfoPromices.push(getPlayer(data[i].player_key));
    arrayTeamsInfoPromices.push(getTeam(data[i].team_key));
  }
  const arrayPlayersInfo = await Promise.all(arrayPlayersInfoPromices);
  const arrayTeamsInfo = await Promise.all(arrayTeamsInfoPromices);
  for (let i = 0; i < 10; i++) {
    const newRow = tablePlayersLch.insertRow();
    newRow.classList.add("td-players");
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    cell1.classList.add("table-players-item");
    cell2.classList.add("table-players-item");
    cell3.classList.add("table-players-item");
    cell4.classList.add("table-players-item");
    cell2.classList.add("table-players--2");
    cell3.classList.add("table-players--3");
    cell1.textContent = i + 1;
    const playerPhoto = arrayPlayersInfo[i][0].player_image;
    const teamPhoto = arrayTeamsInfo[i][0].team_badge;

    cell2.innerHTML = `<img width="100" src="${playerPhoto}" onerror="this.onerror=null; this.src='https://ofstats.com/img/player_logo/55109e2e-d399-4e8e-a3d0-47707300927f.png'"> <p>${data[i].player_name}</p>`;
    cell3.innerHTML = `<img width="100" src="${teamPhoto}"> <p>${data[i].team_name}</p>`;
    cell4.textContent = `${data[i].goals}`;
  }
}

function showTableLigue1() {
  const mainTag = document.querySelector("main");
  mainTag.innerHTML = `<div class="main-container1">
                        <aside class="aside">
                          <div class="aside-img">
                            <img src="https://ofstats.com/img/league_logo/f20ffaa4-6413-4754-83cd-e69151c0e7e3.png" alt="">
                          </div>
                          <div class="aside-name">
                            <p class="aside-title--text">Название</p>
                            <p class="aside-text">Ligue 1</p>
                          </div>
                          <div class="aside-season">
                            <p class="aside-title--text">Текущий сезон</p>
                            <p class="aside-text">2023/2024</p>
                          </div>
                          <div class="aside-country">
                            <p class="aside-title--text">Страна</p>
                            <p class="aside-text">France</p>
                          </div>
                          <div class="cup">
                            <img class="cup-img" src="https://www.readfootball.com/sites/default/files/images/379698.png" alt="">
                          </div>
                        </aside>
                        <article class="article">
                          <section class="section">
                            <div class="review">
                              <button class="btn btn-review">
                                <p class="btn-text">Обзор</p>
                              </button>

                              <button class="btn btn-statistics">
                                <p class="btn-text">Бомбардиры</p>
                              </button>
                            </div>
                          </section>
                          <div class="main-container2">
                            <div class="table-container">
                              <p class="table-container--name">Группа</p>
                              <table class="table standing-table champions-league--tableA">
                                  <tr class="table-head">
                                      <th class="table-head--item table-head--1" scope="col">#</th>
                                      <th class="table-head--item table-head--2" scope="col">Команда</th>
                                      <th class="table-head--item table-head--5" scope="col">И</th>
                                      <th class="table-head--item table-head--5" scope="col">В</th>
                                      <th class="table-head--item table-head--5" scope="col">Н</th>
                                      <th class="table-head--item table-head--5" scope="col">П</th>
                                      <th class="table-head--item table-head--5" scope="col">+</th>
                                      <th class="table-head--item table-head--5" scope="col">-</th>
                                      <th class="table-head--item table-head--5" scope="col">О</th>
                                  </tr>
                              </table>
                            </div>
                          </div>
                        </article>
                      </div>`;

  getTableLigue1(URL_GET_STANDINGS_LIGA_1);
  const buttonReview = document.querySelector(".btn-review");
  const buttonStatistics = document.querySelector(".btn-statistics");
  buttonStatistics.addEventListener("click", handleButtonClickStatisticsLigue1);
  buttonReview.classList.add("active");
}

async function getTableLigue1(url) {
  const response = await fetch(url);
  const data = await response.json();
  fillTableLigue1(data);
}

function fillTableLigue1(data) {
  const LchTableA = document.querySelector(".champions-league--tableA");

  for (let i = 0; i < 18; i++) {
    const newRow = LchTableA.insertRow();
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
    const cell6 = newRow.insertCell(5);
    const cell7 = newRow.insertCell(6);
    const cell8 = newRow.insertCell(7);
    const cell9 = newRow.insertCell(8);
    if (i <= 2) {
      cell1.classList.add("first-team");
    } else if (i == 3) {
      cell1.classList.add("liga1-third--team");
    } else if (i == 4) {
      cell1.classList.add("third-team");
    } else if (i == 5) {
      cell1.classList.add("six-team");
    } else if (i == 15) {
      cell1.classList.add("playoff-team");
    } else if (i >= 16) {
      cell1.classList.add("looser-team");
    }
    cell1.textContent = i + 1;
    cell2.classList.add("club-name");
    cell2.innerHTML = `<img width="30" src="${data[i].team_badge}"> ${data[i].team_name}`;
    cell3.textContent = data[i].overall_league_payed;
    cell4.textContent = data[i].overall_league_W;
    cell5.textContent = data[i].overall_league_D;
    cell6.textContent = data[i].overall_league_L;
    cell7.textContent = data[i].overall_league_GF;
    cell8.textContent = data[i].overall_league_GA;
    cell9.textContent = data[i].overall_league_PTS;
  }
}

function handleButtonClickReviewLigue1() {
  const buttonReview = document.querySelector(".btn-review");
  const buttonStatistics = document.querySelector(".btn-statistics");
  buttonReview.removeEventListener("click", handleButtonClickReviewLigue1);
  buttonStatistics.addEventListener("click", handleButtonClickStatisticsLigue1);
  buttonStatistics.classList.remove("active");
  buttonReview.classList.add("active");
  showTableLigue1();
}

function handleButtonClickStatisticsLigue1() {
  const buttonReview = document.querySelector(".btn-review");
  const buttonStatistics = document.querySelector(".btn-statistics");
  buttonStatistics.removeEventListener(
    "click",
    handleButtonClickStatisticsLigue1
  );
  buttonReview.addEventListener("click", handleButtonClickReviewLigue1);
  buttonReview.classList.remove("active");
  buttonStatistics.classList.add("active");
  const mainContainer2 = document.querySelector(".main-container2");
  mainContainer2.innerHTML = `
            <div class="table-container">
              <table class="table standing-table champions-league--players">
                  <tr class="table-head">
                      <th class="table-head--item table-player--1" scope="col">#</th>
                      <th class="table-head--item table-player--2" scope="col">Игрок</th>
                      <th class="table-head--item table-player--3" scope="col">Команда</th>
                      <th class="table-head--item table-player--5" scope="col">Голы</th>
                  </tr>
              </table>
            </div>`;
  getPlayersLigue1(URL_GET_PLAYERS_LIGA_1);
}

async function getPlayersLigue1(url) {
  const response = await fetch(url);
  const data = await response.json();
  fillTablePlayersLigue1(data);
}

async function fillTablePlayersLigue1(data) {
  const tablePlayersLch = document.querySelector(".champions-league--players");
  const arrayPlayersInfoPromices = [];
  const arrayTeamsInfoPromices = [];
  for (let i = 0; i < 10; i++) {
    arrayPlayersInfoPromices.push(getPlayer(data[i].player_key));
    arrayTeamsInfoPromices.push(getTeam(data[i].team_key));
  }
  const arrayPlayersInfo = await Promise.all(arrayPlayersInfoPromices);
  const arrayTeamsInfo = await Promise.all(arrayTeamsInfoPromices);
  for (let i = 0; i < 10; i++) {
    const newRow = tablePlayersLch.insertRow();
    newRow.classList.add("td-players");
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    cell1.classList.add("table-players-item");
    cell2.classList.add("table-players-item");
    cell3.classList.add("table-players-item");
    cell4.classList.add("table-players-item");
    cell2.classList.add("table-players--2");
    cell3.classList.add("table-players--3");
    cell1.textContent = i + 1;
    const playerPhoto = arrayPlayersInfo[i][0].player_image;
    const teamPhoto = arrayTeamsInfo[i][0].team_badge;

    cell2.innerHTML = `<img width="100" src="${playerPhoto}" onerror="this.onerror=null; this.src='https://ofstats.com/img/player_logo/55109e2e-d399-4e8e-a3d0-47707300927f.png'"> <p>${data[i].player_name}</p>`;
    cell3.innerHTML = `<img width="100" src="${teamPhoto}"> <p>${data[i].team_name}</p>`;
    cell4.textContent = `${data[i].goals}`;
  }
}

function showTableRPL() {
  const mainTag = document.querySelector("main");
  mainTag.innerHTML = `<div class="main-container1">
                        <aside class="aside">
                          <div class="aside-img">
                            <img src="https://ofstats.com/img/league_logo/17ab7737-cef9-4499-83f5-65ea76bac676.png" alt="">
                          </div>
                          <div class="aside-name">
                            <p class="aside-title--text">Название</p>
                            <p class="aside-text">Russian Premier League</p>
                          </div>
                          <div class="aside-season">
                            <p class="aside-title--text">Текущий сезон</p>
                            <p class="aside-text">2023/2024</p>
                          </div>
                          <div class="aside-country">
                            <p class="aside-title--text">Страна</p>
                            <p class="aside-text">Russia</p>
                          </div>
                          <div class="cup">
                            <img class="cup-img" src="https://m.premierliga.ru/netcat_files/userfiles/o_chempionate/RPL%20Champions%20Trophy.jpg" alt="">
                          </div>
                        </aside>
                        <article class="article">
                          <section class="section">
                            <div class="review">
                              <button class="btn btn-review">
                                <p class="btn-text">Обзор</p>
                              </button>

                              <button class="btn btn-statistics">
                                <p class="btn-text">Бомбардиры</p>
                              </button>
                            </div>
                          </section>
                          <div class="main-container2">
                            <div class="table-container">
                              <p class="table-container--name">Группа</p>
                              <table class="table standing-table champions-league--tableA">
                                  <tr class="table-head">
                                      <th class="table-head--item table-head--1" scope="col">#</th>
                                      <th class="table-head--item table-head--2" scope="col">Команда</th>
                                      <th class="table-head--item table-head--5" scope="col">И</th>
                                      <th class="table-head--item table-head--5" scope="col">В</th>
                                      <th class="table-head--item table-head--5" scope="col">Н</th>
                                      <th class="table-head--item table-head--5" scope="col">П</th>
                                      <th class="table-head--item table-head--5" scope="col">+</th>
                                      <th class="table-head--item table-head--5" scope="col">-</th>
                                      <th class="table-head--item table-head--5" scope="col">О</th>
                                  </tr>
                              </table>
                            </div>
                          </div>
                        </article>
                      </div>`;

  getTableRPL(URL_GET_STANDINGS_RPL);
  const buttonReview = document.querySelector(".btn-review");
  const buttonStatistics = document.querySelector(".btn-statistics");
  buttonStatistics.addEventListener("click", handleButtonClickStatisticsRPL);
  buttonReview.classList.add("active");
}

async function getTableRPL(url) {
  const response = await fetch(url);
  const data = await response.json();
  fillTableRPL(data);
}

function fillTableRPL(data) {
  const LchTableA = document.querySelector(".champions-league--tableA");

  for (let i = 0; i < 16; i++) {
    const newRow = LchTableA.insertRow();
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
    const cell6 = newRow.insertCell(5);
    const cell7 = newRow.insertCell(6);
    const cell8 = newRow.insertCell(7);
    const cell9 = newRow.insertCell(8);

    if (i == 12 || i == 13) {
      cell1.classList.add("playoff-team");
    } else if (i >= 14) {
      cell1.classList.add("looser-team");
    }
    cell1.textContent = i + 1;
    cell2.classList.add("club-name");
    cell2.innerHTML = `<img width="30" src="${data[i].team_badge}"> ${data[i].team_name}`;
    cell3.textContent = data[i].overall_league_payed;
    cell4.textContent = data[i].overall_league_W;
    cell5.textContent = data[i].overall_league_D;
    cell6.textContent = data[i].overall_league_L;
    cell7.textContent = data[i].overall_league_GF;
    cell8.textContent = data[i].overall_league_GA;
    cell9.textContent = data[i].overall_league_PTS;
  }
}

function handleButtonClickReviewRPL() {
  const buttonReview = document.querySelector(".btn-review");
  const buttonStatistics = document.querySelector(".btn-statistics");
  buttonReview.removeEventListener("click", handleButtonClickReviewRPL);
  buttonStatistics.addEventListener("click", handleButtonClickStatisticsRPL);
  buttonStatistics.classList.remove("active");
  buttonReview.classList.add("active");
  showTableRPL();
}

function handleButtonClickStatisticsRPL() {
  const buttonReview = document.querySelector(".btn-review");
  const buttonStatistics = document.querySelector(".btn-statistics");
  buttonStatistics.removeEventListener("click", handleButtonClickStatisticsRPL);
  buttonReview.addEventListener("click", handleButtonClickReviewRPL);
  buttonReview.classList.remove("active");
  buttonStatistics.classList.add("active");
  const mainContainer2 = document.querySelector(".main-container2");
  mainContainer2.innerHTML = `
            <div class="table-container">
              <table class="table standing-table champions-league--players">
                  <tr class="table-head">
                      <th class="table-head--item table-player--1" scope="col">#</th>
                      <th class="table-head--item table-player--2" scope="col">Игрок</th>
                      <th class="table-head--item table-player--3" scope="col">Команда</th>
                      <th class="table-head--item table-player--5" scope="col">Голы</th>
                  </tr>
              </table>
            </div>`;
  getPlayersRPL(URL_GET_PLAYERS_RPL);
}

async function getPlayersRPL(url) {
  const response = await fetch(url);
  const data = await response.json();
  fillTablePlayersRPL(data);
}

async function fillTablePlayersRPL(data) {
  const tablePlayersLch = document.querySelector(".champions-league--players");
  const arrayPlayersInfoPromices = [];
  const arrayTeamsInfoPromices = [];
  for (let i = 0; i < 10; i++) {
    arrayPlayersInfoPromices.push(getPlayer(data[i].player_key));
    arrayTeamsInfoPromices.push(getTeam(data[i].team_key));
  }
  const arrayPlayersInfo = await Promise.all(arrayPlayersInfoPromices);
  const arrayTeamsInfo = await Promise.all(arrayTeamsInfoPromices);
  for (let i = 0; i < 10; i++) {
    const newRow = tablePlayersLch.insertRow();
    newRow.classList.add("td-players");
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    cell1.classList.add("table-players-item");
    cell2.classList.add("table-players-item");
    cell3.classList.add("table-players-item");
    cell4.classList.add("table-players-item");
    cell2.classList.add("table-players--2");
    cell3.classList.add("table-players--3");
    cell1.textContent = i + 1;
    const playerPhoto = arrayPlayersInfo[i][0].player_image;
    const teamPhoto = arrayTeamsInfo[i][0].team_badge;

    cell2.innerHTML = `<img width="100" src="${playerPhoto}" onerror="this.onerror=null; this.src='https://ofstats.com/img/player_logo/55109e2e-d399-4e8e-a3d0-47707300927f.png'"> <p>${data[i].player_name}</p>`;
    cell3.innerHTML = `<img width="100" src="${teamPhoto}"> <p>${data[i].team_name}</p>`;
    cell4.textContent = `${data[i].goals}`;
  }
}
