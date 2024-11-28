const nodeH1 = document.getElementById("h1");
const nodeH1Id = nodeH1.getAttribute("id");

const nodeSection = document.getElementById("a");
const nodeP1 = nodeSection.querySelector("p");
nodeP1.setAttribute("id", "P1");

const nodeDiv2 = document.getElementById("container2");
const nodeUl = nodeDiv2.querySelector("ul");
nodeUl.removeAttribute("id");

const listItems = document.querySelectorAll(".list");

listItems.forEach((item, index) => {
  item.textContent = `List Baru ${index + 1}`;
});
