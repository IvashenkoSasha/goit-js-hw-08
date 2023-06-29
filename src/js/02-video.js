import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo(iframe);
const KEY_TIME = 'videoplayer-current-time';

const LStime = localStorage.getItem(KEY_TIME);
player.setCurrentTime(LStime ?? 0);

player.on('timeupdate', throttle(updateTime, 1000));

function updateTime(data) {
    const currentTime = data.seconds;
    console.log(currentTime);
    localStorage.setItem(KEY_TIME, JSON.parse(currentTime));
}

// this only to fix a parcel
