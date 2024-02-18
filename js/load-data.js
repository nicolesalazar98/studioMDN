// esperar a que cargue la pagina
window.onload = () => {
  loadAllSongs();
};
let audioMp3;
let selectedSong;
// la clase constructora ya tiene definido los parametros de entrada
class Song {
  constructor(id, title, artist, duration, album, year, gender, urlSong, cover) {
    this.id = id;
    this.title = title;
    this.artist = artist;
    this.duration = duration;
    this.album = album;
    this.year = year;
    this.gender = gender;
    this.urlSong = urlSong;
    this.cover = cover;
  }
}
// en la variable SONGS instanciamos 2 objetos de prueba con los valores necesarios
// no es necesario definir nuevamente los atributos, va solo los valores en el constructor
const SONGS = [
  new Song('1', 'Take On Me', 'a-ha', null, 'Hunting High and Low', 1985, 'Synth pop, New wave', 'assets/music/1A-ha-Take-On-Me.mp3', 'assets/principlesImages/1a-ha-TakeOnMe.jpg'),
  new Song('2', 'Azul', 'Zoe', null, 'Aztlan', 2018, 'Alternativa', 'assets/music/2Azul-Zoe.mp3', 'assets/principlesImages/2zoe_azul-portada.jpg'),
  new Song('3', 'Kahalid-Lovely', 'Billie Eilish', null, '13 Reasons Why-2s', 2018, 'Pop', 'assets/music/3Billie-Eilish_-Khalid-_lovely.mp3', 'assets/principlesImages/lovely billie eilish.jpg'),
  new Song('4', 'Cant Get You out of My Head (Cover)', 'AnnenMayKantereit x Parcels', null, 'Remix', 2019, 'Indie-rock', 'assets/music/Cant Get You out of My Head (Cover).mp3', 'assets/principlesImages/Cant Get You out of My Head CoverAnnenMayKantereit x Parcels.jpg'),
  new Song('5', 'De la noche a la mañana', 'Elefante', null, 'El que busca encuentra', 2012, 'Funk, Electropop', 'assets/music/5De-la-noche-a-la-manana-Elefante.mp3', 'assets/principlesImages/5De la noche a la mañana -Elefante.jpg'),
  new Song('6', 'Boyfriend', 'Dove Cameron', null, 'Boyfriend', 2022, 'Indie-rock', 'assets/music/6Dove-Cameron-Boyfriend.mp3', 'assets/principlesImages/boyfriend dove camero.jpg'),
  new Song('7', 'EME', 'Bardo José, Miel', null, 'EME', 2021, 'Dance-electro', 'assets/music/7EME-miel.mp3', 'assets/principlesImages/7EME -miel.jpg'),
  new Song('8', 'Somebody That I Used To Know (feat. Kimbra)', 'Gotye', null, 'Making Mirrors', 2011, 'Indie-rock', 'assets/music/9Gotye-Somebody-That-I-Used-To-Know.mp3', 'assets/principlesImages/9Gotye - Somebody That I Used To Know.jpg'),
  new Song('9', 'Super Lady', 'GI-DLE', null, 'two', 2024, 'K-pop', 'assets/music/8G-IDLE_Super-Lady.mp3', 'assets/principlesImages/8G)I-DLE) - Super Lady.jpeg'),
  new Song('10', 'Hasta la raiz', 'Natalia Fourcade', null, 'Hasta la raíz', 2019, 'Indie-rock', 'assets/music/10Hasta la raiz -Natalia lafourcade.mp3', 'assets/principlesImages/hastaraiz-16b.jpg'),
  new Song('11', 'I hate you I love you', 'Gnash', null, 'I hate you I love you', 2016, 'Dance/Electrónica', 'assets/music/11 hate you, I love you -gnash.mp3', 'assets/principlesImages/i hate you i love you.jpg'),
  new Song('12', 'IU(아이유)', 'eight(에잇)', null, 'eight', 2020, 'Indie-rock', 'assets/music/12IU_eight.mp3', 'assets/principlesImages/12IU(아이유) _ eight(에잇).jpg'),
  new Song('13', 'Love Dive', 'IVE 아이브', null, 'Wave', 2021, 'K-Pop ', 'assets/music/13IVELOVE.mp3', 'assets/principlesImages/love dive.jpg'),
  new Song('14', 'Peaches', 'Jack Black', null, 'Super Mario Movie', 2022, 'Pop', 'assets/music/14Jack Black Peaches.mp3', 'assets/principlesImages/14Jack BlackPeaches.jpg'),
  new Song('15', 'Mi traicionero amor', 'Jarawi', null, 'Mi traicionero amor', 2023, 'folklore', 'assets/music/15Jarawi - Mi traicionero amor.mp3', 'assets/principlesImages/15jirawi.jpg'),
  new Song('16', 'Todos tenemos un amor', 'La mosca Tse-Tse', null, 'Buenos muchachos', 2001, 'Rock en español', 'assets/music/16La Mosca Tse-Tse - Todos Tenemos Un Amor.mp3', 'assets/principlesImages/16La Mosca Tse-Tse - Todos Tenemos Un Amor.jpg'),
  new Song('17', 'Lo malo de ser bueno', 'Cuarteto de nos', null, 'Porfiado', 2012, 'Rock en español', 'assets/music/17Lo malo de ser bueno -Cuarteto de nos.mp3', 'assets/principlesImages/17Lo malo de ser bueno -Cuarteto de nos.jpg'),
  new Song('18', 'Lost on you', 'LP', null, 'Lost on You', 2016, 'Indie rock', 'assets/music/18lp- lost on you.mp3', 'assets/principlesImages/18lp_lost_on_you-portada.jpg'),
  new Song('19', 'Starry Night', 'MAMAMOO(마마무)', null, 'Yellow Flower', 2018, 'k-Pop', 'assets/music/19MAMAMOO-Starry Night.mp3', 'assets/principlesImages/19MAMAMOO(마마무) _ Starry Night.jpg'),
  new Song('20', 'While Your Lips Are Still Red', 'Nightwish', null, 'While Your Lips Are Still Red', 2007, 'Heavy metal', 'assets/music/20Nightwish- While Your Lips Are Still Red.mp3', 'assets/principlesImages/21Nightwish- While Your Lips Are Still Red.jpg'),
  new Song('21', 'Payphone', 'Maroon 5 ', null, 'Overexposed', 2013, 'Pop', 'assets/music/21Payphone -Maroon 5.mp3', 'assets/principlesImages/22Payphone -Maroon 5.jpg'),
  new Song('22', 'Photograph', 'Ed Sheeran ', null, 'X', 2018, 'Flok-Pop', 'assets/music/22Photograph - Ed Sheeran.mp3', 'assets/principlesImages/23Photograph - Ed Sheeran.jpg'),
  new Song('23', 'Reflexiones', 'Esto es eso ', null, 'Ecuafornia', 2020, 'Tropipop', 'assets/music/25Reflexiones -Esto es eso.mp3', 'assets/principlesImages/25Reflexiones -Esto es eso.jpg'),
  new Song('24', 'Lonely Day', 'System Of A Down ', null, 'Hypnotize', 2005, 'Metal alternativo', 'assets/music/26System Of A Down - Lonely Day.mp3', 'assets/principlesImages/26System Of A Down - Lonely Day.png'),
  new Song('25', 'INVU', 'TAEYEON 태연 ', null, 'INVU', 2018, 'k-Pop', 'assets/music/27TAEYEON INVU.mp3', 'assets/principlesImages/invu.jpg'),
  new Song('26', 'In Hell I ll Be In Good Company', 'The Dead South ', null, 'Good Company', 2015, 'Folk', 'assets/music/28The Dead South - In Hell Ill Be In Good Company.mp3', 'assets/principlesImages/28The Dead South-In Hell Ill Be In Good Company.jpg'),
  new Song('27', 'Tu falta de querer ', 'Mon Laferte ', null, 'Mon Laferte vol. 1', 2015, 'Pop rock', 'assets/music/29Tu falta de querer -Mon Laferte.mp3', 'assets/principlesImages/tu falta de querer.jpg'),
  new Song('28', 'Inside Out', 'Zedd, Griff', null, 'Inside Out', 2019, 'Pop', 'assets/music/30Zedd, Griff - Inside Out.mp3', 'assets/principlesImages/30Zedd, Griff - Inside Out.jpg'),
  new Song('29', 'Walk the moon', 'Shut Up and Dance', null, 'Talking Is Hard', 2014, 'Pop', 'assets/music/Walk The Moon-Shut Up And Dance.mp3', 'assets/principlesImages/The Moon - Shut Up And Dance.jpg'),
  new Song('30', 'Reality', 'Lost Frequencies', null, '538 Hitzone 75', 2015, 'Pop', 'assets/music/Reality.mp3', 'assets/principlesImages/reality.jpg'),
];

const MAIN_SONG_ICONS = ['fa fa-play-circle', 'fa fa-heart', 'fa fa-solid fa-plus'];
const MAIN_PLAYLIST_ICONS = ['fa fa-play-circle', 'fa fa-heart', 'fa fa-solid fa-minus'];
const MAIN_FAVORITOS_ICONS = ['fa fa-play-circle', 'fa fa-heart-o', 'fa fa-solid fa-plus'];

// leer todas las canciones
function loadAllSongs() {
  // tomar lista principal de canciones
  const list = document.getElementById('main_song_list');
  SONGS.forEach((song) => {
    // crear elemento li para cada cancion
    const songElement = document.createElement('li');
    songElement.className = 'song';
    // crear elemento strong para el titulo de la cancion y agregarlo al li
    const songTitle = document.createElement('strong');
    songTitle.innerHTML = song.title;
    songElement.appendChild(songTitle);
    // crear elemento button para el boton de reproduccion y agregarlo al li
    MAIN_SONG_ICONS.forEach((iconClass) => {
      const icon = document.createElement('i');
      icon.id = song.id;
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

// tocar cancion
function playSongSelected(song) {
  selectedSong = song;
  // validar si existe una reproduccion
  if (audioMp3) {
    audioMp3.pause();
    audioMp3.currentTime = 0;
  }
  audioMp3 = new Audio(song.urlSong);
  // preguntar q mostrar tiempo transcurrido o tiempo total de la cancion
  // audioMp3.addEventListener('loadedmetadata', function () {
  //   // Obtener la duración de la canción
  //   song.currentTime = audioMp3.duration;//currentTime
  // });
  song.currentTime = audioMp3.duration;
  audioMp3.volume = 0.5;
  audioMp3.play();
  // mostrar informacion cancion
  // seccion cover
  const imgAlbum = document.getElementById('imgAlbum');
  imgAlbum.src = song.cover;
  const reaccion = document.getElementById('reaccion');
  reaccion.style = 'flex';
  const songAlbum = document.getElementById('songAlbum');
  songAlbum.innerHTML = song.album;
  const songYear = document.getElementById('songYear');
  songYear.innerHTML = song.year;
  const songGender = document.getElementById('songGender');
  songGender.innerHTML = song.gender;
  // seccion botones inferior
  const idSong = document.getElementById('idSong');
  idSong.innerHTML = song.id;
  const artist = document.getElementById('artist');
  artist.innerHTML = song.artist;
  const actualSong = document.getElementById('song');
  actualSong.innerHTML = song.title;
  const currentTime = document.getElementById('currentTime');
  currentTime.innerHTML = song.currentTime;
}

// evento que se llama desde la seccion canciones
function handleIconClick(song, iconClass) {
  if (iconClass === 'fa fa-play-circle') {
    playSongSelected(song);
  } else if (iconClass === 'fa fa-heart') {
    const list = document.getElementById('my_favorites');
    // agregar a favoritos si no existe la cancion en la lista
    let existeCancion = Array.from(list.children).find(child => child.id === song.id);
    if (!existeCancion) {
      agregarAFavoritos(song, list);
    }
  } else {
    const list = document.getElementById('my_playlist');
    // agregar al playlista si no existe la cancion en la lista
    let existeCancion = Array.from(list.children).find(child => child.id === song.id);
    if (!existeCancion) {
      agregarAPlayList(song, list);
    }
  }
}

function agregarAPlayList(song, list) {
  const songElement = document.createElement('li');
  songElement.id = song.id;
  songElement.className = 'song';
  // crear elemento strong para el titulo de la cancion y agregarlo al li
  const songTitle = document.createElement('strong');
  songTitle.innerHTML = song.title;
  songElement.appendChild(songTitle);
  MAIN_PLAYLIST_ICONS.forEach((iconClass) => {
    const icon = document.createElement('i');
    icon.id = song.id;
    icon.className = iconClass;
    // agregar evento
    icon.addEventListener('click', () => handleIconPlayListClick(song, iconClass));
    // agregar icono al li
    songElement.appendChild(icon);
  });
  // agregar li al ul principal de canciones
  list.appendChild(songElement);
}

function agregarAFavoritos(song, list) {
  const songElement = document.createElement('li');
  songElement.id = song.id;
  songElement.className = 'song';
  // crear elemento strong para el titulo de la cancion y agregarlo al li
  const songTitle = document.createElement('strong');
  songTitle.innerHTML = song.title;
  songElement.appendChild(songTitle);
  MAIN_FAVORITOS_ICONS.forEach((iconClass) => {
    const icon = document.createElement('i');
    icon.id = song.id;
    icon.className = iconClass;
    // agregar evento
    icon.addEventListener('click', () => handleIconFavoriteClick(song, iconClass));
    // agregar icono al li
    songElement.appendChild(icon);
  });
  // agregar li al ul principal de canciones
  list.appendChild(songElement);
}

// evento que se llama desde la seccion playlist
function handleIconPlayListClick(song, iconClass) {
  if (iconClass === 'fa fa-play-circle') {
    playSongSelected(song);
  } else if (iconClass === 'fa fa-heart') {
    const list = document.getElementById('my_favorites');
    // agregar a favoritos si no existe la cancion en la lista
    let existeCancion = Array.from(list.children).find(child => child.id === song.id);
    if (!existeCancion) {
      agregarAFavoritos(song, list);
    }
  } else {
    const list = document.getElementById('my_playlist');
    // eliminar del playlist
    let existeCancion = Array.from(list.children).find(child => child.id === song.id);
    if (existeCancion) {
      // eliminar de la lista la cancion
      list.removeChild(existeCancion);
    }
  }
}

// evento que se llama desde la seccion favoritos
function handleIconFavoriteClick(song, iconClass) {
  if (iconClass === 'fa fa-play-circle') {
    playSongSelected(song);
  } else if (iconClass === 'fa fa-heart-o') {
    const list = document.getElementById('my_favorites');
    // eliminar de favoritos
    let existeCancion = Array.from(list.children).find(child => child.id === song.id);
    if (existeCancion) {
      // eliminar de la lista la cancion
      list.removeChild(existeCancion);
    }
  } else {
    const list = document.getElementById('my_playlist');
    // agregar al playlista si no existe la cancion en la lista
    let existeCancion = Array.from(list.children).find(child => child.id === song.id);
    if (!existeCancion) {
      agregarAPlayList(song, list);
    }
  }
}

// agregar a favoritos desde la seccion informacion
function agregarAFavoritosDesdeInformacion() {
  if (selectedSong) {
    const list = document.getElementById('my_favorites');
    // agregar a favoritos si no existe la cancion en la lista
    let existeCancion = Array.from(list.children).find(child => child.id === selectedSong.id);
    if (!existeCancion) {
      agregarAFavoritos(selectedSong, list);
    }
  }
}

const play = document.getElementById('play');
const stop = document.getElementById('stop');
const pause = document.getElementById('pause');
const mute = document.getElementById('mute');
const sound = document.getElementById('sound');
const next = document.getElementById('next');
const preview = document.getElementById('preview');

play.addEventListener('click', () => {
  if (audioMp3) {
    audioMp3.play();
  }
});

stop.addEventListener('click', () => {
  if (audioMp3) {
    audioMp3.pause();
    audioMp3.currentTime = 0;
  }
});

pause.addEventListener('click', () => {
  if (audioMp3) {
    audioMp3.pause();
  }
});

mute.addEventListener('click', () => {
  if (audioMp3) {
    audioMp3.volume = 0;
  }
});

sound.addEventListener('click', () => {
  if (audioMp3) {
    audioMp3.volume = 0.5;
  }
});

next.addEventListener('click', () => {
  if (selectedSong) {
    // buscar la posicion del arreglo
    const index = SONGS.findIndex(song => song.id === selectedSong.id);
    // si no encuentra la cancion devuelve -1
    if (index !== -1) {
      let indexTemp;
      if (index === SONGS.length - 1) { // obtiene la ultima posicion del arreglo
        indexTemp = 0;
      } else {
        indexTemp = index + 1;
      }
      prevNextSongSelected(indexTemp);
    }
  }
});

preview.addEventListener('click', () => {
  if (selectedSong) {
    // buscar la posicion del arreglo
    const index = SONGS.findIndex(song => song.id === selectedSong.id);
    if (index !== -1) {
      let indexTemp;
      if (index === 0) {
        indexTemp = SONGS.length - 1; // obtiene la ultima posicion del arreglo
      } else {
        indexTemp = index - 1;
      }
      // index === 0 ? SONGS.length - 1 : index - 1;
      prevNextSongSelected(indexTemp);
    }
  }
});

function prevNextSongSelected(index) {
  console.log(index);
  if (index !== -1) {
    let song = SONGS[index];
    if (song) {
      playSongSelected(song);
    }
  }
}