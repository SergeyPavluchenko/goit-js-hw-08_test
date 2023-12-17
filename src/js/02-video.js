import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
console.log(iframe);

const player = new Player(iframe);
console.log(player);

function onPlay(currntTime) {
  console.log(currntTime.seconds);
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(currntTime.seconds)
  );
}

const getTime = JSON.parse(localStorage.getItem('videoplayer-current-time'));
console.log(getTime);

player.setCurrentTime(getTime || 0);

player.on('timeupdate', throttle(onPlay, 1000));
