import { Howl } from 'howler';

const audioFile = './src/components/audio/win.mp3';

const audioWin = new Howl({
  src: [audioFile],
  loop: true,
  volume: 0.2,
});

export default audioWin;