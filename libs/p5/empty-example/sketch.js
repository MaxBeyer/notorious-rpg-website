var xml;
console.log(xml);
function preload() {
  xml = loadXML('http://dangerboat.net/nrpg?format=rss');
}
console.log(xml);

function setup() {
  // put setup code here
}

function draw() {
  ellipse(50, 50, 80, 80);
}
