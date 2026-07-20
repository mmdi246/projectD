const output = document.getElementById("output");

const lines = [

"[BOOT] Initializing secure terminal...",
"",
"Loading encrypted kernel...",
"",
"[OK] Memory allocated",
"[OK] Firewall bypassed",
"",
"Connecting to remote host...",
"",
"IP : 185.XX.XX.XX",
"PORT : 443",
"",
"Authentication...",
"",
"SUCCESS",
"",
"Scanning device...",
"",
"Camera ............. FOUND",
"Microphone ......... FOUND",
"Gallery ............ FOUND",
"Messages ........... FOUND",
"Contacts ........... FOUND",
"GPS ................ FOUND",
"",
"Downloading files...",
"",
];

let i = 0;

function typeLine(){

if(i >= lines.length){

downloadSequence();

return;

}

let text = lines[i];

let p = document.createElement("div");

output.appendChild(p);

let j = 0;

let interval = setInterval(()=>{

if(j < text.length){

p.innerHTML += text.charAt(j);

j++;

}else{

clearInterval(interval);

i++;

setTimeout(typeLine,250);

}

},35);

}

function downloadSequence(){

let percent=0;

let bar=document.createElement("div");

output.appendChild(bar);

let t=setInterval(()=>{

percent++;

bar.innerHTML="Downloading files... "+percent+"%";

if(percent>=100){

clearInterval(t);

setTimeout(finalScan,700);

}

},60);

}

function finalScan(){

let txt=document.createElement("div");

output.appendChild(txt);

txt.innerHTML="";

let words=[

"Searching photos...",

"Searching memories...",

"Decrypting emotions...",

"Analyzing heart...",

"Searching target..."

];

let k=0;

let timer=setInterval(()=>{

txt.innerHTML+=words[k]+"<br>";

k++;

if(k>=words.length){

clearInterval(timer);

}

},900);

}

typeLine();
