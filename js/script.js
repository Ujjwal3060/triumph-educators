const reviews = [
  {
    text: "A precious environment for learning that makes students brilliant at studies and motivates them to try new things.",
    name: "— Aniket Kumar, Class 10"
  },
  {
    text: "Triumph Educators provides excellent teaching with clear explanations and strong concepts.",
    name: "— Ashutosh Yadav, Class 8"
  },
  {
    text: "Excellent and worth-it efforts done by educators for clearing every concept.",
    name: "— Yatharth Singh, Class 10"
  },
  {
    text: "I am very satisfied with my performance after joining Triumph Educators.",
    name: "— Rishika Raj, Class 8"
  }
];

let i = 0;

setInterval(() => {
  const card = document.querySelector(".review-card");

  card.classList.remove("fade");
  void card.offsetWidth; // restart animation
  card.classList.add("fade");

  document.getElementById("review-text").innerText = reviews[i].text;
  document.getElementById("review-name").innerText = reviews[i].name;

  i = (i + 1) % reviews.length;
}, 4000);
