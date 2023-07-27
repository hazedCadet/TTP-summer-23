const { readFile } = require("fs").promises;

const mostFrequentWord = (text) => {
  const words = text.toLowerCase().match(/[^_\W]+/g);
  const tally = {};
  let mostFrequentWord = null;

  words.forEach((word) => {
    tally[word] = (tally[word] || 0) + 1;
    if (!tally[mostFrequentWord] || tally[word] > tally[mostFrequentWord])
      mostFrequentWord = word;
  });
  return mostFrequentWord;
};

const findPassword = async () => {
  // Your code goes here
  const poem1 = await readFile("poems/starting-poem.txt", "utf-8");
  const poem2 = await readFile("poems/happy.txt", "utf-8");
  const poem3 = await readFile("poems/you.txt", "utf-8");
  console.log(mostFrequentWord(poem1))
  console.log(mostFrequentWord(poem2))
  console.log(mostFrequentWord(poem3))

  try {
    const poem1 = await readFile("poems/starting-pem.txt", "utf-8");
  } catch (error) {
    console.log("Something went wrong when loading poem1:", error.stack);
    return; // so we don't try to read the other files and cause more errors
  }
};

findPassword();
