document.getElementById("convert").addEventListener("click", () => {
  let mode = document.getElementById("mode").value;
  let input = document.getElementById("user-input").value;
  let output = "";

  switch (mode) {
    case "decrypt":
      // por fazer
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
