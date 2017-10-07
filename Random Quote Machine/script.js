var quotes = [
  'Wake me... when you need me. -Master Chief',
  'I have defied gods and demons. I am your shield; I am your sword. I know you; your past, your future. This is the way the world ends. -Cortana',
  "Child of my enemy, why have you come? I offer no forgiveness for father's sins cast to his son. -Gravemind",
  "Don't make a girl a promise... if you know you can't keep it. -Cortana",
  "Crazy fool. Why do you always jump? One of these days you're gonna land on something as stubborn as you are, and I don't do bits and pieces. -Sgt. Avery Johnson",
  "Do not be afraid. I am peace; I am salvation. -Gravemind",
  "Because of you, Arbiter, my kids can't get enough gas! Or nipple! How does that make you feeeeel?! -Grunt",
  "In my day we didn't have no fancy shmansy tanks, we had sticks and a rock for the whole platoon! And we had to share the rock! -Sgt. Avery Johnson",
  "When the game is over, the king and pawn go into the same box -Cortana",
  "Take my advice Rookie, you ever fall for a woman, make sure she's got balls. -Edward Buck"
]

function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber];

}

$(".twitter-share").click(function(){
   $(this).attr("href", 'https://twitter.com/intent/tweet?text=' + quoteDisplay);
 });
