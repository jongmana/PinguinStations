document.cookie = "SameSite=Strict; Secure";

navigator.serviceWorker.register('/serviceWorker.js').then(
    function (reg) {
        console.log(':-)', reg);
    },
    function (err) {
        console.log(':-(', err);
    }
);

let pinguinStations = [];

pinguinStations.indie = document.querySelector("#audio-pinguinIndie");
pinguinStations.classic = document.querySelector("#audio-pinguinClassic");

function stopAllStations() {
    Object.keys(pinguinStations).forEach(station => {
        pinguinStations[station].pause();
    });    
}

document.querySelector('#btn-stop').addEventListener('click', stopAllStations);

document.querySelector("#btn-pinguinIndie").addEventListener('click', event => {
    stopAllStations();
    pinguinStations.indie.play();
});

document.querySelector("#btn-pinguinClassic").addEventListener('click', event => {
    stopAllStations();
     pinguinStations.classic.play();
});
