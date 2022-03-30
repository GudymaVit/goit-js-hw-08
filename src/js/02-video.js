import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const STOREGE_KEY = "videoplayer-current-time";
    
const onPlay = function(data) {
    localStorage.setItem(STOREGE_KEY, data.seconds);
};
player.on("timeupdate", throttle(onPlay, 1000));


const saveTime = localStorage.getItem(STOREGE_KEY);
if (saveTime) {
    player.setCurrentTime(saveTime);
}