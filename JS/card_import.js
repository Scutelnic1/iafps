document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const sidebar1 = document.getElementById('sidebar1');
    const content1 = document.getElementById('content1');

    if (!sidebar || !sidebar1 || !content1) {
        console.error('Nu s-au găsit toate elementele necesare în DOM.');
        return;
    }


    const createCard = (player) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <div class="profile-pic">
                <img src="${player.image}" alt="${player.firstName} ${player.lastName}">
            </div>
            <h2>${player.firstName}</h2>
            <h3>${player.lastName}</h3>
            <div class="stats">
                ${player.stats.map(stat => `
                    <div class="stat">
                        <span>${stat.label}</span>
                        <span>${stat.value}</span>
                    </div>
                `).join('')}
            </div>
        `;
        return card;
    };


    const createCard1 = (player) => {
        const card = document.createElement('div');
        card.classList.add('cardd');
        card.innerHTML = `
            <div class="profile-pic">
                <img src="${player.image}" alt="${player.firstName} ${player.lastName}">
            </div>
            <h2>${player.firstName}</h2>
            <h3>${player.lastName}</h3>
            <div class="stats">
                ${player.stats.map(stat => `
                    <div class="stat">
                        <span>${stat.label}</span>
                        <span>${stat.value}</span>
                    </div>
                `).join('')}
            </div>
        `;
        return card;
    };

    const players = [
        { firstName: "Cristiano", lastName: "Ronaldo", image: "/image/ronaldo.png", stats: [ { label: "ACCURACY", value: 98 }, { label: "REACH", value: 20 }, { label: "CAPTURE", value: 30 }, { label: "BLOCK", value: 50 } ] },
        { firstName: "Lionel", lastName: "Messi", image: "/image/messi.jpg", stats: [ { label: "ACCURACY", value: 95 }, { label: "REACH", value: 25 }, { label: "CAPTURE", value: 35 }, { label: "BLOCK", value: 45 } ] },
        { firstName: "Kylian", lastName: "Mbappé", image: "/image/mbape.jpg", stats: [ { label: "ACCURACY", value: 92 }, { label: "REACH", value: 30 }, { label: "CAPTURE", value: 40 }, { label: "BLOCK", value: 60 } ] },
        { firstName: "Neymar", lastName: "Jr", image: "/image/neymar.jpg", stats: [ { label: "ACCURACY", value: 96 }, { label: "REACH", value: 22 }, { label: "CAPTURE", value: 28 }, { label: "BLOCK", value: 48 } ] },
        { firstName: "Kevin", lastName: "De Bruyne", image: "/image/Kevin.jpg", stats: [ { label: "ACCURACY", value: 93 }, { label: "REACH", value: 27 }, { label: "CAPTURE", value: 38 }, { label: "BLOCK", value: 42 } ] },
        { firstName: "Robert", lastName: "Lewandowski", image: "/image/levandovschi.jpg", stats: [ { label: "ACCURACY", value: 97 }, { label: "REACH", value: 26 }, { label: "CAPTURE", value: 32 }, { label: "BLOCK", value: 55 } ] }
    ];

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    const shuffledPlayers = shuffleArray([...players, ...players]);
    const half = Math.ceil(shuffledPlayers.length / 2);
    const shuffledPlayersLeft = shuffledPlayers.slice(0, half);
    const shuffledPlayersRight = shuffledPlayers.slice(half);

    shuffledPlayersLeft.forEach(player => {
        sidebar.appendChild(createCard(player));
    });

    shuffledPlayersRight.forEach(player => {
        sidebar1.appendChild(createCard1(player));
    });
});
