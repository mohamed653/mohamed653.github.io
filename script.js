// A function that creates a text writer effect
function textWriter(text, element, delay) {
  let output = "";
  let index = 0;
  function writeChar() {
    output += text.charAt(index);
    element.innerHTML = output;
    index++;
    if (index < text.length) {
      setTimeout(writeChar, delay);
    } else {
      // If the text is finished, call the reset function after 7 seconds
      setTimeout(reset, 7000);
    }
  }
  // A function that resets the output and calls the textWriter function again
  function reset() {
    output = "";
    index = 0;
    writeChar();
  }
  writeChar();
}

// Select the h2 element from the document
let h2 = document.querySelector("h2");
// Split the h2's innerHTML into two parts by the <br> tag
let parts = h2.innerHTML.split("<br>");
// Select the second part as the title
let title = parts[1];
// Remove the span tags from the title
title = title.replace(/<span>|<\/span>/g, "");
// Set the h2's innerHTML to the first part only
h2.innerHTML = parts[0] + "<br>";
// Create a span element for the title and append it to the h2 element
let titleSpan = document.createElement("span");
titleSpan.classList.add("title");
h2.appendChild(titleSpan);
// Call the textWriter function for the title with a delay
textWriter(title, titleSpan, 50);