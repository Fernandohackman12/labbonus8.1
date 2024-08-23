function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeBackgroundColor() {
  document.body.style.backgroundColor = getRandomColor();
}

function getMachineName() {
  return new Promise((resolve, reject) => {
    // Simulate fetching machine name (replace with actual fetching logic if necessary)
    setTimeout(() => {
      resolve(window.location.hostname);
    }, 1000);
  });
}

function createList(numItems) {
  const listContainer = document.getElementById("list-container");
  listContainer.innerHTML = ""; // Clear any existing list

  const ul = document.createElement("ul");
  for (let i = 1; i <= numItems; i++) {
    const li = document.createElement("li");
    li.textContent = `Item ${i}`;
    li.style.color = getRandomColor(); // Assign a random color
    ul.appendChild(li);
  }
  listContainer.appendChild(ul);
}

function handleCreateList() {
  let validInput = false;
  let number;

  while (!validInput) {
    number = prompt("Please enter a number between 21 and 99.");

    if (number === null) {
      // Handle case where user cancels prompt
      return;
    }

    number = Number(number);

    if (!isNaN(number) && number >= 21 && number <= 99) {
      validInput = true;
    } else {
      alert("Invalid input. Please enter a number between 21 and 99.");
    }
  }

  createList(number);
}

document.addEventListener("DOMContentLoaded", () => {
  changeBackgroundColor();
  setInterval(changeBackgroundColor, 3000); // Change background color every 3 seconds

  getMachineName().then((machineName) => {
    document.getElementById("machine-name").textContent = machineName;
  }); // I added a click event listener to the button
  const createListButton = document.getElementById("create-list-btn");
  if (createListButton) {
    createListButton.addEventListener("click", handleCreateList);
  } else {
    console.error('Button with id "create-list-btn" not found.');
  }
});
