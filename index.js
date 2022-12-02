let x = new Date();
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const todayElement = document.getElementById("today");
const toggleEle = document.getElementById("toggle");
let sidebar = document.getElementById("sidebar");
todayElement.textContent =
  String(days[x.getDay()]) +
  "," +
  [x.getDate(), months[x.getMonth()], x.getFullYear()].join(" ");

let daysElement = document.getElementById("days");
for (let i = -5; i < 5; i++) {
  let y = new Date(x.getFullYear(), x.getMonth(), x.getDate() + i);
  let dateElement = document.createElement("li");
  dateElement.classList.add("d-flex", "flex-column");

  let dayElement = document.createElement("p");
  dayElement.classList.add("m-0");
  dayElement.textContent = days[y.getDay()];
  dateElement.appendChild(dayElement);

  let anchorElement = document.createElement("a");
  let anchorTextElement = document.createElement("p");
  anchorTextElement.textContent = y.getDate();
  anchorTextElement.classList.add("date");
  anchorElement.appendChild(anchorTextElement);
  dateElement.appendChild(anchorElement);
  //console.log(dateElement);

  if (days[y.getDay()] === "Sun") {
    anchorTextElement.classList.add("holiday");
    dayElement.style.color = "#9ca1a7";
  }

  if (i === 0) {
    anchorTextElement.classList.add("today");
  }

  daysElement.appendChild(dateElement);
}

toggleEle.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});
