const canvas = document.getElementById("loveCanvas");
const ctx = canvas.getContext("2d");

function resizeLove() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeLove();
window.addEventListener("resize", resizeLove);

class Love {
    constructor() {
        this.reset();
    }

    reset() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + Math.random() * 200;
        this.size = Math.random() * 8 + 8;
        this.speed = Math.random() * 0.4 + 0.3;
        this.alpha = Math.random() * 0.5 + 0.5;
        this.swing = Math.random() * 1.5;
        this.angle = Math.random() * Math.PI * 2;
        this.rotate = Math.random() * 0.01 - 0.005;
        this.rotation = Math.random() * Math.PI;
    }

    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.scale(this.size / 20, this.size / 20);

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(-10, -10, -20, 5, 0, 20);
        ctx.bezierCurveTo(20, 5, 10, -10, 0, 0);

        ctx.fillStyle = `rgba(255,120,160,${this.alpha})`;
        ctx.shadowBlur = 20;
        ctx.shadowColor = "rgba(255,80,140,0.9)";
        ctx.fill();

        ctx.restore();
    }

    update() {
        this.y -= this.speed;
        this.angle += 0.02;
        this.x += Math.sin(this.angle) * this.swing;
        this.rotation += this.rotate;

        if (this.y < -50) this.reset();
        this.draw();
    }
}

const loves = [];
for (let i = 0; i < 35; i++) loves.push(new Love());

function animateLove() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    loves.forEach(l => l.update());
    requestAnimationFrame(animateLove);
}
animateLove();



const songs = [
    {
        title: "About you",
        artist: "The 1975",
        src: "SpotiDownloader.com - About You - The 1975.mp3",
        cover: "Lirik-lagu-About-You-The-1975.jpg"
    },
    {
        title: "Blue",
        artist: "Yung Kai",
        src: "spotifydown.com - blue.mp3",
        cover: "Blue.jpg"
    },
    {
        title: "Cinta luar biasa",
        artist: "Andmesh",
        src: "spotifydown.com - Cinta Luar Biasa.mp3",
        cover: "cinta luar biasa cover gambar.jpg"
    },
    {
        title: "Engga ngerti",
        artist: "Kahitna",
        src: "Kahitna - Engga Ngerti (Official Music Video).mp3",
        cover: "Engga ngerti kahitna cover gambaar.jpg"
    },
    {
        title: "Kasih putih",
        artist: "Glenn freadly",
        src: "SpotiDownloader.com - Kasih Putih - Yovie Widianto.mp3",
        cover: "Kasih putih.jpg"
    },
    {
        title: "Season",
        artist: "Wave to earth",
        src: "v4.www-y2mate.blog - wave to earth - seasons (320 KBps).mp3",
        cover: "wave to earth.jpg"
    },
    {
        title: "Untuk perempuan yang sedang di pelukan",
        artist: "Payung teduh",
        src: "Untuk Perempuan Yang Sedang Di Pelukan.mp3",
        cover: "cover lagu payung teduh.jpg"
    }
];

let currentSong = 0;
const audio = document.getElementById('audio');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const cover = document.getElementById('cover');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const playlist = document.getElementById('playlist');

function loadSong(index) {
    const song = songs[index];
    title.textContent = song.title;
    artist.textContent = song.artist;
    cover.src = song.cover;
    audio.src = song.src;
}

function playSong() {
    audio.play();
    playBtn.textContent = "pause";
}

function pauseSong() {
    audio.pause();
    playBtn.textContent = "play";
}

playBtn.addEventListener('click', () => {
    if (audio.paused) playSong();
    else pauseSong();
});

nextBtn.addEventListener('click', () => {
    currentSong = (currentSong + 1) % songs.length;
    loadSong(currentSong);
    playSong();
});

prevBtn.addEventListener('click', () => {
    currentSong = (currentSong - 1 + songs.length) % songs.length;
    loadSong(currentSong);
    playSong();
});

songs.forEach((song, index) => {
    const li = document.createElement('li');
    li.textContent = `${index + 1}. ${song.title}`;
    li.addEventListener("click", () => {
        currentSong = index;
        loadSong(currentSong);
        playSong();
    });
    playlist.appendChild(li);
});

loadSong(currentSong);





function printPhotos() {
  const container = document.getElementById('photos');
  container.innerHTML = '';

  const sound = document.getElementById('sound');
  if (sound) {
    sound.currentTime = 0;
    sound.play();
  }

  const images = ['Screenshot_20251004_172748_Gallery.jpg','Screenshot_20251004_172518_Gallery.jpg','Screenshot_20251004_174542_Gallery.jpg','Screenshot_20251004_174720_Gallery.jpg'];

  let i = images.length - 1;

function keluarkanFoto() {
  if (i < 0) return;

  const photo = document.createElement('div');
  photo.className = 'photo';
  photo.style.setProperty('--rot', `${Math.random() * 6 - 3}deg`);

  const img = document.createElement('img');
  img.src = images[i];

  const text = document.createElement('div');
  text.className = 'frame-text';
  text.innerText = 'Photobooth • ' + new Date().toLocaleDateString();

  photo.appendChild(img);
  photo.appendChild(text);
  container.prepend(photo);

  i--;
  setTimeout(keluarkanFoto, 1200);
}

keluarkanFoto();

}