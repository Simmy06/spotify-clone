console.log("Welcome to Spotify");

//Intialise the variables
let songIndex = 0;

let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItems'));



let songs = [

    
        {songName: "Prefect", filepath: "songs/1.mp3", coverPath: "covers/1.jpg"},
        {songName: "Until I Found You", filepath: "songs/2.mp3", coverPath: "covers/2.jpg"},
        {songName: "Choo Loo", filepath: "songs/3.mp3", coverPath: "covers/3.webp"},
        {songName: "Jhanjar", filepath: "songs/4.mp3", coverPath: "covers/4.jpg"},
        {songName: "Maan Meri Jaan", filepath: "songs/5.mp3", coverPath: "covers/5.jpg"},
        {songName: "Tere Hawale", filepath: "songs/6.mp3", coverPath: "covers/6.jpg"},
        {songName: "Mera Naam Dil", filepath: "songs/7.mp3", coverPath: "covers/7.jpg"},
        {songName: "Shiv Sama Rahe", filepath: "songs/8.mp3", coverPath: "covers/8.jpg"},
        {songName: "Daru Badnam", filepath: "songs/9.mp3", coverPath: "covers/9.jpg"},
]


songItems.forEach((element, i)=>
{
    
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
}
)


let audioElement= new Audio('songs/1.mp3');

//audioElement.play();


//Handle play/pause click
masterPlay.addEventListener('click', ()=>
{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
       audioElement.play(); 
       masterPlay.classList.remove('fa-play-circle');
       masterPlay.classList.add('fa-pause-circle');
       gif.style.opacity = 1;
    }
    else
    {
        audioElement.pause(); 
       masterPlay.classList.remove('fa-pause-circle');
       masterPlay.classList.add('fa-play-circle');
       gif.style.opacity = 0;
    }
})

//Listen to events
audioElement.addEventListener('timeupdate', ()=>
{
//update seeker
progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>
{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;

})  

const makeAllPlays= ()=>{
   Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>
{
    element.classList.remove('  fa-circle-play');
    element.classList.add(' fa-circle-pause');
})
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>
{
element.addEventListener('click', (e)=>{

   
    makeAllPlays();
    e.target.classList.remove('  fa-circle-play');
    e.target.classList.add(' fa-circele-pause');
    audioElement.src = 'songs/3.mp3';
    audioElement.currentTime = 0;
    audioElement.play();

})
}
)