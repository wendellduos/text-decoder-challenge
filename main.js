/* Encrypt and Decrypyt modes triggered on "convert" button click */
document.getElementById("convert").addEventListener("click", () => {
  let mode = document.getElementById("mode").value;
  let input = document.getElementById("user-input").value;
  let output = "";

  switch (mode) {
    case "decrypt":
      let n = 0;

      while (n < input.length) {
        output += input[n];

        if (input[n] === "i" || input[n] === "o" || input[n] === "u") {
          n += 4;
        } else if (input[n] === "e") {
          n += 5;
        } else if (input[n] === "a") {
          n += 2;
        } else {
          n++;
        }
      }

      break;

    default:
      for (i = 0; i < input.length; i++) {
        switch (input[i]) {
          case "e":
            output += "enter";
            break;
          case "i":
            output += "imes";
            break;
          case "a":
            output += "ai";
            break;
          case "o":
            output += "ober";
            break;
          case "u":
            output += "ufat";
            break;
          default:
            output += input[i];
        }
      }
  }

  document.getElementById("output").innerText = output;
});

/* Clear input field functionality */
document.getElementById("clear-input").addEventListener("click", () => {
  document.getElementById("user-input").value = "";
});

/* Copy to clipboard functionality */
document.getElementById("copy-output").addEventListener("click", () => {
  navigator.clipboard.writeText(document.getElementById("output").value);
});
