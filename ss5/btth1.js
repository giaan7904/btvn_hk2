  // Danh sách các từ cần đoán
  const words = ["apple", "banana", "orange", "blueberry", "kiwi", "peach"];
  let word = ""; // Từ cần đoán
  let guessedLetters = []; // Các chữ cái đã đoán
  let attempts = 7; // Số lần đoán còn lại

  function chooseWord() {
    return words[Math.floor(Math.random() * words.length)];
  }

  function displayWord() {
    const displayedWord = word.split('').map(letter => guessedLetters.includes(letter) ? letter : "*").join('');
    document.getElementById("word-container").innerHTML = `<p>${displayedWord}</p>`;
  }

  function guessLetter() {
    const guess = document.getElementById("guess-input").value.toLowerCase();

    if (guessedLetters.includes(guess)) {
      document.getElementById("message").textContent = "Bạn đã chọn chữ này rồi.";
    } else if (word.includes(guess)) {
      guessedLetters.push(guess);
      displayWord();
      if (!document.getElementById("word-container").textContent.includes("*")) {
        document.getElementById("message").textContent = `Chúc mừng! Bạn đã đoán được từ: ${word}`;
        document.getElementById("guess-input").disabled = true;
      } else {
        document.getElementById("message").textContent = "Đoán tốt!";
      }
    } else {
      guessedLetters.push(guess);
      attempts--;
      document.getElementById("attempts").textContent = attempts;
      document.getElementById("message").textContent = "Đoán sai.";
      if (attempts === 0) {
        document.getElementById("message").textContent = `Bạn đã thua . Chữ cần phải đoán là : ${word}`;
        document.getElementById("guess-input").disabled = true;
      }
    }
    document.getElementById("guess-input").value = "";
  }

  function playAgain() {
    word = chooseWord();
    guessedLetters = [];
    attempts = 7;
    document.getElementById("guess-input").disabled = false;
    document.getElementById("message").textContent = "";
    document.getElementById("attempts").textContent = attempts;
    displayWord();
  }