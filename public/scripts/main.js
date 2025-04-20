// scripts/main.js
const events = [
    { name: "Music Night", date: "25 Apr 2025", location: "London" },
    { name: "Tech Conference", date: "10 May 2025", location: "Manchester" }
  ];
  
  const eventList = document.getElementById("event-list");
  
  events.forEach(event => {
    const div = document.createElement("div");
    div.className = "bg-white p-4 rounded shadow";
    div.innerHTML = `<h3 class="text-lg font-semibold">${event.name}</h3>
                     <p>${event.date} – ${event.location}</p>`;
    eventList.appendChild(div);
  });
  