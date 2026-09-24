const base = import.meta.env.BASE_URL.replace(/\/$/, '');
const audio = (file) => `${base}/audio/${file}`;

const playlist = [
  { title: 'Placeholder track 1', artist: 'Replace me', src: audio('placeholder-1.wav') },
  { title: 'Placeholder track 2', artist: 'Replace me', src: audio('placeholder-2.wav') },
];

export default playlist;
