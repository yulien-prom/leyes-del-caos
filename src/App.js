const play = '<path class="play" fill="#ffffff" d="M3 2l10 6-10 6z"></path>'
const pause = '<path class="pause" fill="#ffffff" d="M2 2h5v12h-5zM9 2h5v12h-5z"></path>'

let tracks = [
    { src: './assets/audios-expo/biangelis1.opus', img: './assets/images/espacio.jpg', title: 'Teoría del Caos', artist: 'Biangelis Flores', totalTime: '00:34' },
    { src: './assets/audios-expo/biangelis2.opus', img: './assets/images/chaos.jpg', title: 'Teoría del Caos', artist: 'Biangelis Flores', totalTime: '00:53' },
    { src: './assets/audios-expo/biangelis3.opus', img: './assets/images/tornado.jpg', title: 'Teoría del Caos', artist: 'Biangelis Flores', totalTime: '00:58' },
    { src: './assets/audios-expo/biangelis4.opus', img: './assets/images/as.jpg', title: 'Teoría del Caos', artist: 'Biangelis Flores', totalTime: '00:35' },
    { src: './assets/audios-expo/biangelis5.opus', img: './assets/images/nature.jpg', title: 'Teoría del Caos', artist: 'Biangelis Flores', totalTime: '00:18' },
    { src: './assets/audios-expo/biangelis6.opus', img: './assets/images/UGotThat.jpg', title: 'Teoría del Caos', artist: 'Biangelis Flores', totalTime: '00:15' },
    { src: './assets/audios-expo/biangelis7.opus', img: './assets/images/OldTownRoad.jpeg', title: 'Teoría del Caos', artist: 'Biangelis Flores', totalTime: '00:20' },
    { src: './assets/audios-expo/biangelis8.opus', img: './assets/images/GodsPlan.jpg', title: 'Teoría del Caos', artist: 'Biangelis Flores', totalTime: '00:21' },
    { src: './assets/audios-expo/biangelis9.opus', img: './assets/images/universe.jpg', title: 'Teoría del Caos', artist: 'Biangelis Flores', totalTime: '00:16' },
    { src: './assets/audios-expo/biangelis10.opus', img: './assets/images/NoGuidance.jpg', title: 'Teoría del Caos', artist: 'Biangelis Flores', totalTime: '00:17' },
    { src: './assets/audios-expo/oliver1.mp3', img: './assets/images/images1.jpg', title: 'Teoría del Caos', artist: 'Oliver Fernandez', totalTime: '2:30' },
    { src: './assets/audios-expo/oliver2.mp3', img: './assets/images/RightBack.jpg', title: 'Teoría del Caos', artist: 'Oliver Fernandez', totalTime: '1:00' },
    { src: './assets/audios-expo/oliver3.mp3', img: './assets/images/stressedout.jpg', title: 'Teoría del Caos', artist: 'Oliver Fernandez', totalTime: '00:53' },
    { src: './assets/audios-expo/oliver4.mp3', img: './assets/images/WalkItTalkIt.jpg', title: 'Teoría del Caos', artist: 'Oliver Fernandez', totalTime: '00:37' },
    { src: './assets/audios-expo/oliver5.mp3', img: './assets/images/steven.jpg', title: 'Teoría del Caos', artist: 'Oliver Fernandez', totalTime: '1:11' },
    { src: './assets/audios-expo/oliver6.mp3', img: './assets/images/digital.jpg', title: 'Teoría del Caos', artist: 'Oliver Fernandez', totalTime: '1:20' },
    { src: './assets/audios-expo/oliver7.mp3', img: './assets/images/WalkItTalkIt.jpg', title: 'Teoría del Caos', artist: 'Oliver Fernandez', totalTime: '00:56' },
    { src: './assets/audios-expo/oliver8.mp3', img: './assets/images/WalkItTalkIt.jpg', title: 'Teoría del Caos', artist: 'Oliver Fernandez', totalTime: '4:37' },
    { src: './assets/audios-expo/leyes del caos victor.M4A', img: './assets/images/hlr.jpg', title: 'Teoría del Caos Y otras perspectivas', artist: 'Victor Duarte', totalTime: '5:29' },
]

let $playlist = document.getElementById('playlist')
for (let i = 0; i < tracks.length; i++) {
    let item = document.createElement('li')
    let src = tracks[i].src
    let title = tracks[i].title
    let artist = tracks[i].artist
    let total = tracks[i].totalTime
    addSong(src, title, artist, total)
}

$playlist.children[0].classList.add('playing')

let myAudioPlayer = new MultimediaPlayer('#main audio', tracks, {
    play: document.querySelector('#btn-repro'),
    next: document.querySelector('#next'),
    back: document.querySelector('#back'),
    shuffle: document.querySelector('#shuffle'),
    title: document.querySelector('#title'),
    artist: document.querySelector('#artist'),
    album: document.querySelector('#album'),
    currentTime: document.querySelector('.currentTime'),
    totalTime: document.querySelector('.totalTime'),
    cover: document.querySelector('#top'),
    playlistMenu: document.querySelector('#playlist'),
    progressBar: document.querySelector('.progressBar'),
    loading: document.querySelector('.loading'),
});


// $btnRepro.onclick = (e) => {
//     if ($btnRepro.classList.contains('btn-play')) {
//         $btnRepro.removeChild($btnRepro.firstChild);
//         $btnRepro.classList.remove('btn-play')
//         $btnRepro.classList.add('btn-pause')

//         // $stressedOut.play()
//         console.log('Play')
//     } else {
//         $btnRepro.removeChild($btnRepro.firstChild);
//         $btnRepro.innerHTML = play
//         $btnRepro.classList.remove('btn-pause')
//         $btnRepro.classList.add('btn-play')

//         // $stressedOut.pause()
//         console.log('Pause')
//     }
// }

let $cora = document.getElementById('cora')
$cora.onclick = (e) => {
    let $coraColor = document.querySelector('.cora-color')
    $coraColor.classList.toggle('pressed')
    $coraColor.classList.toggle('unpressed')
}

let $shuffle = document.getElementById('shuffle')
$shuffle.onclick = (e) => {
    let $shuffleColor = document.querySelector('.shuffle-color')
    $shuffleColor.classList.toggle('pressed')
    $shuffleColor.classList.toggle('unpressed')
}

let $repeat = document.getElementById('repeat')
$repeat.onclick = (e) => {
    let $repeatColor = document.querySelector('.repeat-color')
    $repeatColor.classList.toggle('pressed')
    $repeatColor.classList.toggle('unpressed')
}

let $menu = document.querySelector('.menu');
$menu.onclick = (e) => {
    document.querySelector('#main').classList.toggle('show');
    document.querySelector('#playlist').classList.toggle('show');
}

//Drag & Drop functions
function allowDrop(ev) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.

}
let source;
let srcIndex;
function drag(ev) {
    source = this;
    ev.dataTransfer.setData("text/plain", this.innerHTML);
    ev.dataTransfer.effectAllowed = "move";
    srcIndex = [...ev.target.parentNode.children].indexOf(ev.target);
}

let availableFormats = ['mp3', 'm4a', 'mp4', 'wav'];
function verifyType(file) {
    let res = file.type.split("/")[1];
    let response = false;
    availableFormats.forEach(element => {
        if (element == res) {
            response = true;
        }
    });
    return response;

}

function dropFiles(ev) {
    ev.preventDefault();
    let box = document.getElementById('playlist');
    let files = ev.dataTransfer.files;

    if (files.length > 0) {
        for (let i = 0; i < files.length; i++) {
            let file = files[i];
            let blob = file.slice(file.size - 128, file.size);
            let reader = new FileReader();
            console.log(files[i])

            reader.onload = function (evt) {
                let buff = evt.target.result;
                let dataView = new DataView(buff)
                let src = URL.createObjectURL(files[i]);
                let title = readString(dataView, 3, 30)
                let artist = readString(dataView, 33, 30)
                console.log('TAG:', readString(dataView, 0, 3));
                console.log('title: ', readString(dataView, 3, 30)); // title
                console.log('artist: ', readString(dataView, 33, 30)); // artist
                console.log('album: ', readString(dataView, 63, 30)); // album
                console.log('year: ', readString(dataView, 93, 4)); // year
                if (verifyType(file)) {
                    addSong(src, title, artist)
                    let obj = {
                        src: src,
                        img: null,
                        title: title,
                        artist: artist,
                        totalTime: null
                    }
                    tracks.push(obj)
                    myAudioPlayer.addPlaylistListener();
                    console.log('Formato compatible')
                } else {
                    console.log('Formato no compatible')
                    let popup = document.createElement('div')
                    popup.innerHTML = "<span>Formato no compatible <br> Compatible con: mp3, mp4, m4a y wav</span>";
                    popup.classList.add('popup')
                    $playlist.appendChild(popup)
                    setTimeout(function () {
                        $playlist.removeChild(popup);
                    }, 4000)

                }


            }
            reader.readAsArrayBuffer(blob);
        }
    } else {
        if (ev.target.localName === 'li') {
            console.log('ARRASTRANDO: ' + srcIndex)

            let index = [...ev.target.parentNode.children].indexOf(ev.target);
            ev.target.insertAdjacentElement('beforebegin', source)
            // source.innerHTML = ev.target.innerHTML;
            // ev.target.innerHTML = ev.dataTransfer.getData("text/plain");
            console.log('NUEVA POSICIÓN: ' + index)
            updateCT(ev.target);
        }
    }


}


function readString(dataView, offset, length) {
    let str = '';
    for (let i = offset; i < offset + length; i++) {
        str += String.fromCharCode(dataView.getUint8(i));
    }
    return str;
}

function addSong(src, title, artist, total) {
    let item = document.createElement('li')
    item.setAttribute('data-index', $playlist.children.length)
    addDnD(item)
    item.src = src
    item.innerHTML = `<span><span class="title" data-index="${$playlist.children.length}">${title}</span> -
                                                <span class="artist">${artist}</span></span>`;
    $playlist.appendChild(item);

}

function addDnD(el) {
    console.log('added')
    el.setAttribute('draggable', 'true')
    el.addEventListener('dragstart', drag, false);
}

// function handleDrop(e) {

//     if (e.stopPropagation) {
//         e.stopPropagation(); // Stops some browsers from redirecting.
//     }

//     // Don't do anything if dropping the same column we're dragging.
//     if (source != this) {
//         // Set the source column's HTML to the HTML of the column we dropped on.
//         //alert(this.outerHTML);
//         //dragSrcEl.innerHTML = this.innerHTML;
//         //this.innerHTML = e.dataTransfer.getData('text/html');
//         let dropHTML = e.dataTransfer.getData('text/html');
//         // this.parentNode.removeChild(source);
//         this.insertAdjacentHTML('beforebegin', dropHTML);
//         console.log(this.previousSibling)
//         let dropElem = this.previousSibling;
//         addDnD(dropElem);

//     }
// }

function updateCT(element) {
    let playing = document.querySelector('.playing');
    let index = [...playing.parentNode.children].indexOf(playing);
    myAudioPlayer.currentTrack = index;
}

function getIndex(n) {
    let playlist = document.querySelector('#playlist');
    if (n < playlist.children.length) {
        let index = playlist.children[n].dataset.index;
        return index;
    } else {
        return 0;
    }
}