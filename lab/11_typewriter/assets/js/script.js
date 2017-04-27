var container = document.getElementById('container');

var letters = {
    KeyA: {url: "assets/media/01.png",
        id: "A"}, 
    KeyB: {url: "assets/media/02.png",
        id: "B"},
    KeyC: {url: "assets/media/03.png",
        id: "C"},
    KeyD: {url: "assets/media/04.png",
        id: "D"},
    KeyE: {url: "assets/media/05.png",
        id: "E"},
    KeyF: {url: "assets/media/06.png",
        id: "F"},
    KeyG: {url: "assets/media/07.png",
        id: "G"},
    KeyH: {url: "assets/media/08.png",
        id: "H"},
    KeyI: {url: "assets/media/09.png",
        id: "I"},
    KeyJ: {url: "assets/media/10.png",
        id: "J"},
    KeyK: {url: "assets/media/11.png",
        id: "K"},
    KeyL: {url: "assets/media/12.png",
        id: "L"},
    KeyM: {url: "assets/media/13.png",
        id: "M"},
    KeyN: {url: "assets/media/14.png",
        id: "N"},
    KeyO: {url: "assets/media/15.png",
        id: "O"},
    KeyP: {url: "assets/media/16.png",
        id: "P"},
    KeyQ: {url: "assets/media/17.png",
        id: "Q"},
    KeyR: {url: "assets/media/18.png",
        id: "R"},
    KeyS: {url: "assets/media/19.png",
        id: "S"},
    KeyT: {url: "assets/media/20.png",
        id: "T"},
    KeyU: {url: "assets/media/21.png",
        id: "U"},
    KeyV: {url: "assets/media/22.png",
        id: "V"},
    KeyW: {url: "assets/media/23.png",
        id: "W"},
    KeyX: {url: "assets/media/24.png",
        id: "X"},
    KeyY: {url: "assets/media/25.png",
        id: "Y"},
    KeyZ: {url: "assets/media/26.png",
        id: "Z"}
    //a: {url: "assets/media/27.png",
        //id: "a"}
};

var bgHue = 0;

for (key in letters) {
    var img = document.createElement('img');
    img.src = letters[key].url;
    img.id = letters[key].id;
    container.appendChild(img);
};

document.addEventListener("keydown", function(event) {
   if (event.keyCode >= 65 && event.keyCode <= 90) {

        /*var img = document.getElementById(letters[event.code].id);
        img.src = letters[event.code].id;
        container.appendChild(img);*/

       // if (event.shiftKey == true) {
        var img = document.getElementById(letters[event.code].id);
        img.src = letters[event.code].id;
        container.appendChild(img);
    }
    //else if (event.keyCode)
});

/*
var letters = {
    KeyA: {url: "assets/media/01.png",
        id: "puzzle"}, 
    KeyB: {url: "assets/media/02.png",
        id: "puzzle"},
    KeyC: {url: "assets/media/03.png",
        id: "puzzle"},
    KeyD: {url: "assets/media/04.png",
        id: "puzzle"},
    KeyE: {url: "assets/media/05.png",
        id: "puzzle"},
    KeyF: {url: "assets/media/06.png",
        id: "puzzle"},
    KeyG: {url: "assets/media/07.png",
        id: "puzzle"},
    KeyH: {url: "assets/media/08.png",
        id: "puzzle"},
    KeyI: {url: "assets/media/09.png",
        id: "puzzle"},
    KeyJ: {url: "assets/media/10.png",
        id: "puzzle"},
    KeyK: {url: "assets/media/11.png",
        id: "puzzle"},
    KeyL: {url: "assets/media/12.png",
        id: "puzzle"},
    KeyM: {url: "assets/media/13.png",
        id: "puzzle"},
    KeyN: {url: "assets/media/14.png",
        id: "puzzle"},
    KeyO: {url: "assets/media/15.png",
        id: "puzzle"},
    KeyP: {url: "assets/media/16.png",
        id: "puzzle"},
    KeyQ: {url: "assets/media/17.png",
        id: "puzzle"},
    KeyR: {url: "assets/media/18.png",
        id: "puzzle"},
    KeyS: {url: "assets/media/19.png",
        id: "puzzle"},
    KeyT: {url: "assets/media/20.png",
        id: "puzzle"},
    KeyU: {url: "assets/media/21.png",
        id: "puzzle"},
    KeyV: {url: "assets/media/22.png",
        id: "puzzle"},
    KeyW: {url: "assets/media/23.png",
        id: "puzzle"},
    KeyX: {url: "assets/media/24.png",
        id: "puzzle"},
    KeyY: {url: "assets/media/25.png",
        id: "puzzle"},
    KeyZ: {url: "assets/media/26.png",
        id: "puzzle"}
};

/*
    Keya: {url: "assets/media/27.png",
        id: "puzzle"},
    Keyb: {url: "assets/media/28.png",
        id: "puzzle"},
    Keyc: {url: "assets/media/29.png",
        id: "puzzle"},
    Keyd: {url: "assets/media/30.png",
        id: "puzzle"},
    Keye: {url: "assets/media/31.png",
        id: "puzzle"},
    Keyf: {url: "assets/media/32.png",
        id: "puzzle"},
    Keyg: {url: "assets/media/33.png",
        id: "puzzle"},
    Keyh: {url: "assets/media/34.png",
        id: "puzzle"},
    Keyi: {url: "assets/media/35.png",
        id: "puzzle"},
    Keyj: {url: "assets/media/36.png",
        id: "puzzle"},
    Keyk: {url: "assets/media/37.png",
        id: "puzzle"},
    Keyl: {url: "assets/media/38.png",
        id: "puzzle"},
    Keym: {url: "assets/media/39.png",
        id: "puzzle"},
    Keyn: {url: "assets/media/40.png",
        id: "puzzle"},


KeyA: {url: "assets/media/27.png",
        id: "puzzle"}, 
    KeyB: {url: "assets/media/28.png",
        id: "puzzle"},
    KeyC: {url: "assets/media/29.png",
        id: "puzzle"},
    KeyD: {url: "assets/media/30.png",
        id: "puzzle"},
    KeyE: {url: "assets/media/31.png",
        id: "puzzle"},
    KeyF: {url: "assets/media/32.png",
        id: "puzzle"},
    KeyG: {url: "assets/media/33.png",
        id: "puzzle"},
    KeyH: {url: "assets/media/34.png",
        id: "puzzle"},
    KeyI: {url: "assets/media/35.png",
        id: "puzzle"},
    KeyJ: {url: "assets/media/36.png",
        id: "puzzle"},
    KeyK: {url: "assets/media/37.png",
        id: "puzzle"},
    KeyL: {url: "assets/media/38.png",
        id: "puzzle"},
    KeyM: {url: "assets/media/39.png",
        id: "puzzle"},
    KeyN: {url: "assets/media/40.png",
        id: "puzzle"},
    KeyO: {url: "assets/media/41.png",
        id: "puzzle"},
    KeyP: {url: "assets/media/42.png",
        id: "puzzle"},
    KeyQ: {url: "assets/media/43.png",
        id: "puzzle"},
    KeyR: {url: "assets/media/44.png",
        id: "puzzle"},
    KeyS: {url: "assets/media/45.png",
        id: "puzzle"},
    KeyT: {url: "assets/media/46.png",
        id: "puzzle"},
    KeyU: {url: "assets/media/47.png",
        id: "puzzle"},
    KeyV: {url: "assets/media/48.png",
        id: "puzzle"},
    KeyW: {url: "assets/media/49.png",
        id: "puzzle"},
    KeyX: {url: "assets/media/50.png",
        id: "puzzle"},
    KeyY: {url: "assets/media/51.png",
        id: "puzzle"},
    KeyZ: {url: "assets/media/52.png",
        id: "puzzle"}

/*
document.addEventListener(“keydown”, function(event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        var img = document.createElement(“img”);
        //img.classList.add(“letter”);
        img.src = letters[event.code].url;
        container.appendChild(img);
    }
});
/* 
var bgHue = 0;

for (key in letters) {
    bgHue += Math.floor( 360/ (Object.keys(letters).length) );
    letters[key].bgColor = "hsl(" + bgHue + ", 100%, 50%)";
};
*/
/*
document.addEventListener('keydown', function(event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {

        var div = document.createElement('div');
        div.classList.add('letter');


        // add capital class
/*
        if (event.shiftKey == true) {
            div.classList.add('capital')
        }

        div.style.backgroundColor = letters[event.code].bgColor
        container.appendChild(div);

/*
document.addEventListener('keydown', function(event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        
        var img = document.createElement('img');
        //img.classList.add(“letter”);
        img.src = letters[event.code].url;
        container.appendChild(img);
    }
});

        // eg: a,b, z
        // console.log("key: " + event.key); //lowercase (a)

        // eg: KeyA, KeyB, etc.
        // console.log("code: " + event.code); //capitals (keyA)
        
        // eg: 65, 68, etc.
        //console.log("code: " + event.keyCode); //numbers (65)
    
        // log the color
        // console.log("color: " + letters[event.code]);

        // change the background color
        // document.documentElement.style.backgroundColor = letters[event.code].bgColor;

        // add a letter to container
        // container.innerHTML += event.key;
/*

    } else if (event.keyCode == 32) {
        var div = document.createElement('div');
        div.classList.add('space');
        container.appendChild(div);
    } else if (event.keyCode == 8) {
        container.removeChild(container.lastChild);
    }
};

*/
