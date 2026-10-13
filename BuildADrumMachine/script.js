const dpads = document.querySelectorAll('.drum-pad');
const display = document.getElementById('display');
// const allowedK = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];  // Previous approach: explicit key whitelist


// const playAndShow = async (a, title) => {  // Async alternative: rejected by the freeCodeCamp test environment.
//     try {
//         a.currentTime = 0;
//         await a.play();
//         display.innerText = `Playing "${title}"`;
//     } catch (error) {
//         console.error('Audio playback failed:', error);
//     }
// };

const playAndShow = (a, title) => {
    a.currentTime = 0;
    a.play();
    display.innerText = `Playing "${title}"`;
}

const cleanTitle = t => t.replaceAll('-', ' ');


dpads.forEach(dp => {
    dp.addEventListener('click', () => {
        const a = dp.querySelector('.clip');
        playAndShow(a, cleanTitle(dp.id));
    });
});

document.addEventListener('keydown', event => {
    const a = document.getElementById(event.key.toUpperCase());
    if(a instanceof HTMLAudioElement){
        playAndShow(a, cleanTitle(a.parentElement.id));
    }
});

// document.addEventListener("keydown", (event) => {  // Previous approach: explicit key whitelist
//     const k = event.key.toUpperCase();
//     if(allowedK.includes(k)){
//         const a = document.getElementById(k);
//         playAndShow(a, cleanTitle(a.parentElement.id));
//     }
// });

