const episodeData = [
  {
    title: "Episode 2",
    date: "July 12, 2018",
    description: "Lefty wonders about the possibilities of an artifact he found, but he needs his friends Corny Falco and Pavlovena to help identify what it is and what it does. Meanwhile the people of the Ark decide to build defenses to protect against the dangers of The Zone, when trouble strikes!<br><br>Original music composed by Max Beyer, and a big thanks to these other artists for their music found at freesound.org:<br><br>Sirkoto51 - Anime Fight Music Loop <br><br> #1 Neehnahw - Konflict",
    audio: "http://static1.squarespace.com/static/51f14daae4b0e3adff18a86a/t/5b46106b6d2a73ffbacd9539/1531318470818/Episode+2.mp3/original/Episode+2.mp3"
  },
  {
    title: "Episode 1",
    date: "July 12, 2018",
    description: "In this setup episode of The Notorious RPG, 4 Minneapolis friends and improvisers create their mutant characters in a dystopian post-apocalyptic future.  Join in the campaign as Patrick (Lefty), Maggie (Pavlovena) and Brandon (Corny Falco), led by Game Master Max, venture into the unknown.<br><br>Original music composed by Max Beyer.",
    audio: "http://static1.squarespace.com/static/51f14daae4b0e3adff18a86a/t/5b460f280e2e72b22160548c/1531318139855/Episode+1.mp3/original/Episode+1.mp3"
  }
];

function episodeTemplate(episode) {
  return `
      <h3>${episode.title}</h3>
      <p><i>${episode.date}</i></p>
      <p>${episode.description}</p>
      <audio controls="controls" src="${episode.audio}">
        Your browser does not support the HTML5 audio element.
      </audio>
      <hr>
  `;
}

document.getElementById("episode-template").innerHTML = `
   ${episodeData.map(episodeTemplate).join("")}
  `
  ;
