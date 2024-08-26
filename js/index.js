const footer = document.createElement("footer");
/*Date-Year*/
const today = new Date();
const thisYear = today.getFullYear();

let copyright = document.createElement("p");
copyright.innerHTML = `&copy; Kali Vanderbilt ${thisYear}`;

footer.appendChild(copyright);
const rightContent = document.querySelector(".right-content");
rightContent.appendChild(footer);

/*Skills*/
const skills = ["JavaScript", "HTML", "CSS", "Canva", "GitHub"];
const skillsSection = document.querySelector("#Skills");
const skillsList = document.createElement("ul");

skills.forEach((skillText) => {
  const skill = document.createElement("li");
  skill.innerText = skillText;
  skillsList.appendChild(skill);
});

skillsSection.appendChild(skillsList);
