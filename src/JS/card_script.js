// Date dinamice pentru mai mulți jucători
const players = [
    {
      firstName: "Cristiano",
      lastName: "Ronaldo",
      image: "/image/ronaldo.png",
      stats: [
        { label: "ACCURACY", value: 98 },
        { label: "REACH", value: 20 },
        { label: "CAPTURE", value: 30 },
        { label: "BLOCK", value: 50 },
      ],
    },
    {
      firstName: "Lionel",
      lastName: "Messi",
      image: "/image/messi.jpg",
      stats: [
        { label: "ACCURACY", value: 95 },
        { label: "REACH", value: 25 },
        { label: "CAPTURE", value: 35 },
        { label: "BLOCK", value: 45 },
      ],
    },
    {
      firstName: "Kylian",
      lastName: "Mbappé",
      image: "/image/mbape.jpg",
      stats: [
        { label: "ACCURACY", value: 92 },
        { label: "REACH", value: 30 },
        { label: "CAPTURE", value: 40 },
        { label: "BLOCK", value: 60 },
      ],
    },
    {
      firstName: "Cristiano",
      lastName: "Ronaldo",
      image: "/image/ronaldo.png",
      stats: [
        { label: "ACCURACY", value: 98 },
        { label: "REACH", value: 20 },
        { label: "CAPTURE", value: 30 },
        { label: "BLOCK", value: 50 },
      ],
    },
    
  ];
  
  // Selectăm containerul principal
  const cardsContainer = document.getElementById("cards-container");
  
  // Generăm carduri pentru fiecare jucător
  players.forEach(player => {
    // Creăm cardul
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <div class="profile-pic">
        <img src="${player.image}" alt="${player.firstName} ${player.lastName}">
      </div>
      <h2>${player.firstName}</h2>
      <h3>${player.lastName}</h3>
      <div class="stats">
        ${player.stats
          .map(
            stat => `
          <div class="stat">
            <span>${stat.label}</span>
            <span>${stat.value}</span>
          </div>
        `
          )
          .join("")}
      </div>
    `;
    // Adăugăm cardul în container
    cardsContainer.appendChild(card);
  });
  