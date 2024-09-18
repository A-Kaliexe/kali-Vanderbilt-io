const footer = document.createElement("footer");

/* Date-Year */
const today = new Date();
const thisYear = today.getFullYear();

let copyright = document.createElement("p");
copyright.innerHTML = `&copy; Kali Vanderbilt ${thisYear}`;

footer.appendChild(copyright);
const rightContent = document.querySelector(".right-content");
rightContent.appendChild(footer);

/* Skills */
const skills = ["JavaScript", "HTML", "CSS", "Canva", "GitHub"];
const skillsSection = document.querySelector("#Skills");
const skillsList = document.createElement("ul");

skills.forEach((skillText) => {
  const skill = document.createElement("li");
  skill.innerText = skillText;
  skillsList.appendChild(skill);
});

skillsSection.appendChild(skillsList);

/*Form*/
const messageForm = document.querySelector('[name="leave_message"]');
messageForm.addEventListener("submit", function (event) {
  event.preventDefault(); //form stops refreshing automatically
  const usersName = event.target.usersName.value;
  const usersEmail = event.target.usersEmail.value;
  const usersMessage = event.target.usersMessage.value;

  console.log("Name:", usersName);
  console.log("Email:", usersEmail);
  console.log("Message:", usersMessage);

  const messageSection = document.querySelector("#messages");
  const messageList = messageSection.querySelector("ul");
  const newMessage = document.createElement("li");
  newMessage.innerHTML = `
    <a href="mailto:${usersEmail}">${usersName}</a>
    <span>${usersMessage}</span>
  `;

  const removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.setAttribute("type", "button");
  removeButton.addEventListener("click", function () {
    const entry = removeButton.parentNode;
    if (entry) {
      entry.remove();
    }
  });

  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);

  messageForm.reset();
});

//Fetch Request
fetch("https://api.github.com/users/A-Kaliexe/repos")
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Request failed");
    }
  })
  .then((data) => {
    console.log("Fetched data:", data);
    const repositories = data;

    const projectSection = document.getElementById("Projects");
    const projectList = projectSection.querySelector("ul");

    repositories.forEach((repo) => {
      const project = document.createElement("li");
      project.innerText = repo.name;
      projectList.appendChild(project);
    });
  })
  .catch((error) => {
    console.log("Error:", error);
  });
