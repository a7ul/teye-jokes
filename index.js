const http = require("http");
const fetch = require("node-fetch");
const port = process.env.PORT || 3000;

const fetchADadJoke = async () => {
  const response = await fetch("https://icanhazdadjoke.com", {
    headers: {
      Accept: "application/json"
    }
  });
  const joke = await response.json();
  return joke.joke;
};

const server = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  const joke = await fetchADadJoke();
  res.end(joke);
});

server.listen(port, () => {
  console.log(`Server running at :${port}`);
});
