
  let count = 0;
  
  const mainDiv = document.getElementById("counter");
  const resetDiv = document.getElementById("reset-button");

 
  const minusButton = document.createElement("button");
  minusButton.classList.add("delta-buttons", "buttons-gen");
  minusButton.textContent = "-";
 
  const displayButton = document.createElement("button");
  displayButton.classList.add("counter-button", "buttons-gen");
  displayButton.textContent = count;
 
  const plusButton = document.createElement("button");
  plusButton.classList.add("delta-buttons", "buttons-gen");
  plusButton.textContent = "+";

  const resetButton = document.createElement("button");
  resetButton.classList.add("reset-button");
  resetButton.textContent = "Reset Counter";
 


  function counterDelta (delta) {
    count += delta;
    displayButton.textContent = count;
  }

  function resetCount() {
  count = 0;
  displayButton.textContent = count;
  }
 

  minusButton.addEventListener("click",
    () => counterDelta(-1));

  plusButton.addEventListener("click", 
    () => counterDelta(+1));

  resetButton.addEventListener("click",
    resetCount);
 

  mainDiv.appendChild(minusButton);
  mainDiv.appendChild(displayButton);
  mainDiv.appendChild(plusButton);

  resetDiv.appendChild(resetButton);