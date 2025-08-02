document.addEventListener('DOMContentLoaded', () => {
  fetch('/api/games')
    .then(response => response.json())
    .then(games => {
      const container = document.getElementById('game-container');

      if (games.length === 0) {
        container.innerHTML = '<p>No games available.</p>';
        return;
      }

      games.forEach(game => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
          <h3>${game.sport} - Hosted by ${game.host}</h3>
          <p><strong>Location:</strong> ${game.location}</p>
          <p><strong>Time:</strong> ${game.time}</p>
        `;
        container.appendChild(card);
      });
    })
    .catch(err => {
      console.error('Failed to load games:', err);
      document.getElementById('game-container').innerHTML = '<p>Error loading games.</p>';
    });
});
