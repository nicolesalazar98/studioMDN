// esperar a que cargue la pagina
window.onload = () => {
  loadAllSongs();
};

const SONGS = [
  {
    name: 'Bohemian Rhapsody',
  },
  {
    name: 'Stairway to Heaven',
  },
  {
    name: 'Imagine',
  },
  {
    name: 'Hotel California',
  },
  {
    name: 'Hey Jude',
  },
  {
    name: 'Smells Like Teen Spirit',
  },
  {
    name: 'Wonderwall',
  },
  {
    name: 'Sweet Child o Mine',
  },
  {
    name: 'Like a Rolling Stone',
  },
  {
    name: 'Thriller',
  },
  {
    name: 'Billie Jean',
  },
  {
    name: 'No Woman, No Cry',
  },
  {
    name: 'Hallelujah',
  },
  {
    name: 'Hey Ya!',
  },
  {
    name: 'Born to Run',
  },
  {
    name: 'Purple Haze',
  },
  {
    name: 'Losing My Religion',
  },
  {
    name: 'Do not Stop Believin',
  },
  {
    name: 'Yesterday',
  },
  {
    name: 'I Will Always Love You',
  },
];

const MAIN_SONG_ICONS = ['far fa-play-circle', 'far fa-heart', 'fa fa-solid fa-plus'];

function loadAllSongs() {
  // tomar lista principal de canciones
  const list = document.getElementById('main_song_list');

  SONGS.forEach((song) => {
    // crear elemento li para cada cancion
    const songElement = document.createElement('li');
    songElement.className = 'song';
    // crear elemento strong para el titulo de la cancion y agregarlo al li
    const songTitle = document.createElement('strong');
    songTitle.innerHTML = song.name;
    songElement.appendChild(songTitle);
    // crear elemento button para el boton de reproduccion y agregarlo al li
    MAIN_SONG_ICONS.forEach((iconClass) => {
      const icon = document.createElement('i');
      icon.className = iconClass;
      // agregar evento
      icon.addEventListener('click', () => handleIconClick(song, iconClass));
      // agregar icono al li
      songElement.appendChild(icon);
    });
    // agregar li al ul principal de canciones
    list.appendChild(songElement);
  });
}

function handleIconClick(song, iconClass) {
  if (iconClass === 'far fa-play-circle') {
    alert('reproducir cancion ' + song.name);
    return;
  }

  if (iconClass === 'far fa-heart') {
    alert('agregar a favoritos ' + song.name);
    return;
  }

  alert('agregar a mi lista de reproduccion ' + song.name);
}
