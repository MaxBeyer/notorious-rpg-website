const episodeData = [

  {
    title: "Episode 4",
    date: "August 8, 2018",
    description: "<p>Lefty, Corny, and Pavlovena venture into the Zone.  They cross a bridge and find their friend Weezle is in trouble.  Meanwhile, a building nearby somehow has electricity.</p><p>Original music composed by Max Beyer, and a big thanks to Neehnahw from freesound.org for the use of their work Konflict.</p>",
    audio: "http://media.blubrry.com/thenotoriousrpg/static1.squarespace.com/static/51f14daae4b0e3adff18a86a/t/5b6c4f460ebbe85efff45ca4/1533824914396/Episode+4+Final.mp3/original/Episode+4+Final.mp3"
  },
  {
    title: "Episode 3",
    date: "July 27, 2018",
    description: "Corny Falco gets stuck in his suit, Pavlovena has a run in with her favorite enforcer, and Lefty feels guilty after pocketing the direction finder instead of securing it in the Dawn Vault. He attempts to recruit his friends to venture out into the Zone to find more items of value to make up for his perceived selfishness.",
    audio: "http://media.blubrry.com/thenotoriousrpg/static1.squarespace.com/static/51f14daae4b0e3adff18a86a/t/5b5c7c081ae6cf84851a7164/1532787797843/Episode+3+%281%29.mp3/original/Episode+3+%281%29.mp3"
  },
  {
    title: "Episode 2",
    date: "July 12, 2018",
    description: "Lefty wonders about the possibilities of an artifact he found, but he needs his friends Corny Falco and Pavlovena to help identify what it is and what it does. Meanwhile the people of the Ark decide to build defenses to protect against the dangers of The Zone, when trouble strikes!<br><br>Original music composed by Max Beyer, and a big thanks to these other artists for their music found at freesound.org:<br><br>Sirkoto51 - Anime Fight Music Loop <br><br> neehnahw - Konflict",
    audio: "http://media.blubrry.com/thenotoriousrpg/static1.squarespace.com/static/51f14daae4b0e3adff18a86a/t/5b46106b6d2a73ffbacd9539/1531318470818/Episode+2.mp3/original/Episode+2.mp3"
  },
  {
    title: "Episode 1",
    date: "July 12, 2018",
    description: "In this setup episode of The Notorious RPG, 4 Minneapolis friends and improvisers create their mutant characters in a dystopian post-apocalyptic future.  Join in the campaign as Patrick (Lefty), Maggie (Pavlovena) and Brandon (Corny Falco), led by Game Master Max, venture into the unknown.<br><br>Original music composed by Max Beyer.",
    audio: "http://media.blubrry.com/thenotoriousrpg/static1.squarespace.com/static/51f14daae4b0e3adff18a86a/t/5b460f280e2e72b22160548c/1531318139855/Episode+1.mp3/original/Episode+1.mp3"
  }
];

function episodeTemplate(episode) {
  return `
      <h3>${episode.title}</h3>
      <p><i>${episode.date}</i></p>
      <p>${episode.description}</p>
      <audio controls="controls" src="${episode.audio}">
        Whoopsie Doopsie, an error occured!
      </audio>
      <hr class="darker">
  `;
}

document.getElementById("episode-template").innerHTML = `
   ${episodeData.map(episodeTemplate).join("")}
  `
  ;
