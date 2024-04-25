const quotes = [
  "The only way to do great work is to love what you do. – Steve Jobs",
  "It's not whether you get knocked down, it's whether you get up. – Vince Lombardi",
  "Believe you can and you're halfway there. – Theodore Roosevelt",
  "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
  "You miss 100% of the shots you don't take. – Wayne Gretzky",
];

function newQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerText = quotes[randomIndex];
}
