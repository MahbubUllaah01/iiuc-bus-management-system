// Demonstration data only. These are NOT verified IIUC bus routes or schedules.
const sampleRoutes = [
  {
    name: "Sample Route A",
    start: "Sample starting point",
    end: "IIUC campus (demo label)",
    departure: "08:00 AM (sample)",
    stops: ["Sample Stop 1", "Sample Stop 2"],
    status: "Mock data"
  },
  {
    name: "Sample Route B",
    start: "Sample starting point",
    end: "IIUC campus (demo label)",
    departure: "08:30 AM (sample)",
    stops: ["Sample Stop 3", "Sample Stop 4"],
    status: "Mock data"
  },
  {
    name: "Sample Route C",
    start: "Sample starting point",
    end: "IIUC campus (demo label)",
    departure: "09:00 AM (sample)",
    stops: ["Sample Stop 5", "Sample Stop 6"],
    status: "Mock data"
  }
];

const routeList = document.querySelector("#route-list");
const searchInput = document.querySelector("#route-search");

function createTextElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  element.textContent = text;
  return element;
}

function renderRoutes(routes) {
  routeList.replaceChildren();

  if (routes.length === 0) {
    routeList.append(createTextElement("p", "", "No sample routes match your search."));
    return;
  }

  for (const route of routes) {
    const card = createTextElement("article", "route-card", "");
    card.append(createTextElement("span", "route-tag", route.status));
    card.append(createTextElement("h3", "", route.name));
    card.append(createTextElement("p", "", `From: ${route.start}`));
    card.append(createTextElement("p", "", `To: ${route.end}`));
    card.append(createTextElement("p", "", `Departure: ${route.departure}`));
    card.append(createTextElement("p", "", `Stops: ${route.stops.join(", ")}`));
    routeList.append(card);
  }
}

searchInput.addEventListener("input", (event) => {
  const query = event.target.value.trim().toLowerCase();
  const filteredRoutes = sampleRoutes.filter((route) => {
    const searchableText = [
      route.name,
      route.start,
      route.end,
      ...route.stops
    ].join(" ").toLowerCase();

    return searchableText.includes(query);
  });

  renderRoutes(filteredRoutes);
});

renderRoutes(sampleRoutes);
