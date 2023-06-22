import { Howl } from 'howler';

const audioFile = './src/components/audio/slot.mp3';

const audioJackspot = new Howl({
  src: [audioFile],
  loop: true,
  volume: 0.9,
});

export default audioJackspot;