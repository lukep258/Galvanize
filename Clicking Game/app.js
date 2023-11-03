let body = document.getElementsByTagName('body')[0];
body.style.margin = "auto";
body.style.height = "100px";
body.style.width = "100px";

let button = document.createElement('button');
body.appendChild(button);
button.setAttribute('type','submit');
button.textContent = 'click here';

let clear = document.createElement('button');
body.appendChild(clear);
clear.setAttribute('type','submit');
clear.textContent = 'start time';

function leaderboard(){
    if(document.getElementsByTagName('ol').length===1){
        let ol = body.getElementsByTagName('ol')[0];
        body.removeChild(ol);
    }
    let ol = document.createElement('ol');
    body.appendChild(ol);
    ol.textContent = "Leaderboard"
    list.push(score);
    let lasthighest = 0;
    for(let i=0;i<list.length&&i<10;i++){
        console.log(lasthighest);
        lasthighest = nextHighest(lasthighest,list);
        let li = document.createElement('li');
        ol.appendChild(li);
        li.textContent = lasthighest.toString();
    }
    console.log(list);
}
function nextHighest(highest){
    let next = 0;
    for(let i=list.indexOf(highest);i<list.length;i++){
        if(list[i]!=highest&&list[i]>=next){
            next = list[i];
            list[i]=list[list.indexOf(highest)+1];
            list[list.indexOf(highest)+1]=next;
        }
    }
    return next;
}
const clickhere = function(){
    clickCount+=1;
}
const clickpersecond = function(){
    time +=500;
    if(Math.floor(clickCount*60/(time/1000))>score){
        score = Math.floor(clickCount*60/(time/1000));
    }
    button.textContent = Math.floor(clickCount*60/(time/1000))+"per minute";
    if(time>10000){
        time=0;
        clickCount=0;
    }
}
const clearall = function(){
    leaderboard();
    clickCount = 0;
    time = 0;
    score = 0;
}

let score = 0;
let clickCount = 0;
let time = 0;

let list = [];

button.addEventListener('click',clickhere);
clear.addEventListener('click',clearall)
window.setInterval(clickpersecond,500);
// 
// button.removeEventListener("click", removeclick);