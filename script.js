// Initialize the map
var map = L.map('map', {
    center: [50.064546423603595, 19.940803796023513],
    zoom: 14,
    minZoom: 3, // Set the minimum zoom level
});

// Create a tile layer and add it to the map
var terrainLayer = L.tileLayer('https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=cQFhX3jbbnedRQlL4bb1', {
    attribution: '&copy; <a href="https://www.maptiler.com/" target="_blank">MapTiler</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap contributors</a>'
}).addTo(map);


var RedheartIcon = L.icon({
    iconUrl: './icons/icon.png',
    iconSize: [25, 25]
});

var BlueheartIcon = L.icon({
    iconUrl: './icons/iconBlue.png',
    iconSize: [25, 25]
});

var GreenheartIcon = L.icon({
    iconUrl: './icons/iconGreen.png',
    iconSize: [25, 25]
});

var YellowheartIcon = L.icon({
    iconUrl: './icons/iconYellow.png',
    iconSize: [25, 25]
});

var PinkheartIcon = L.icon({
    iconUrl: './icons/iconPink.png',
    iconSize: [25, 25]
});

let markersArray = [];

var marker1 = L.marker([50.064546423603595, 19.940803796023513], {
    icon: RedheartIcon
}).addTo(map).bindPopup(`
    <p>This is the place where I saw you for the first time. You looked amazing and even though i was awkward you made me feel really good. You also bought me tea which made me fall for you...</p>
    <div>
        
    </div>
`);

markersArray.push(marker1);

let marker2 = L.marker([50.06861067511593, 19.905313297425742], {
    icon: BlueheartIcon
}).addTo(map).bindPopup(`
    <p>This is the place where we had our first kiss. It was also your first time drinking ouzo...</p>
    <div>
       <img src="./images/socks.jpg" style="width: 100%; display: block; margin: auto;"> 
    </div>
`);

markersArray.push(marker2);

let marker3 = L.marker([50.06672863383658, 19.938786983932154], {
    icon: GreenheartIcon
}).addTo(map).bindPopup(`
    <p>This was our second date?! It was all downhill from there... Can't get better than our bunny date...</p>
    <div>
       <img src="./images/bunnies.png" style="width: 100%; display: block; margin: auto; margin-top: 10px;"> 

    </div>
`);

markersArray.push(marker3);

let marker4 = L.marker([50.05546212030457, 19.93214930681944], {
    icon: YellowheartIcon
}).addTo(map).bindPopup(`
    <p>This is where we did bicycle together:)</p>
    <div>
       <img src="./images/bicycles.png" style="width: 100%;  display: block; margin: auto;"> 
    </div>
`);

markersArray.push(marker4);

let marker5 = L.marker([50.061941127548536, 19.90780470781268], {
    icon: RedheartIcon
}).addTo(map).bindPopup(`
    <p>This is where we rollerbladed for the first time:)</p>
    <p>I was so scared but suprisingly you were a perfect teacher and I only fell 200 times...</p>
    <div>
       
    </div>
`);

markersArray.push(marker5);

let marker6 = L.marker([51.10887903978614, 17.038468654509543], {
    icon: GreenheartIcon
}).addTo(map).bindPopup(`
    <p>This was our first trip. I'll never forget this trip because it really brought us closer. (We have to go back there)</p>
    <div>
        <img src="./images/wroclaw2.jpg" style="width: 100%; display: block; margin: auto;"> 
        <img src="./images/wroclaw1.png" style="width: 100%; display: block; margin: auto; margin-top: 10px;">   
    </div>
`);

markersArray.push(marker6);

let marker7 = L.marker([50.06260977334228, 19.928790895322024], {
    icon: PinkheartIcon
}).addTo(map).bindPopup(`
    <p>This was our first sleepover. No clue how we didn't get a fine... We watched After Life and we cuddled...</p>
    <div>
       <img src="./images/room.png" style="width: 100%; display: block; margin: auto;">
    </div>
`);

markersArray.push(marker7);

let marker8 = L.marker([50.0679852707229, 20.01475755509682], {
    icon: BlueheartIcon
}).addTo(map).bindPopup(`
    <p>First time trying rollerskating... we tried no...?!</p>
    <div>
       
    </div>
`);

markersArray.push(marker8);

let marker9 = L.marker([50.0630102969585, 19.90340873912342], {
    icon: GreenheartIcon
}).addTo(map).bindPopup(`
    <p>First time we both said the L word...</p>
    <p>-I love you...</p>
    <p>-What did you say?</p>
    <p>-I love you...</p>
    <p>-I love you too...</p>
    <div>
       
    </div>
`);
markersArray.push(marker9);

let marker10 = L.marker([50.068452888038905, 19.904244997294548], {
    icon: PinkheartIcon
}).addTo(map).bindPopup(`
    <p>Juwenalia time...Here I was hugging you and just adoring while my girl was singing:)</p>
    
    <div>
       
    </div>
`);


markersArray.push(marker10);

let marker11 = L.marker([50.07078919954674, 19.936664050178887], {
    icon: YellowheartIcon
}).addTo(map).bindPopup(`
    <p>This is where I had my first wow moment... When I realized you were special. We drunk ouzo and were singing for the whole night:)</p>
    
    <div>
       
    </div>
`);


markersArray.push(marker11);


// <img src="./images/room.png" style="width: 250px; height: 250px; display: block; margin: auto;">


let randomMemoryBtn = document.getElementById('random');

//Implement showing a random memory
randomMemoryBtn.onclick = function () {
    let randomNumber = getRandomNumber(markersArray.length);
    let randomMarker = markersArray[randomNumber];

    map.flyTo([randomMarker.getLatLng().lat, randomMarker.getLatLng().lng], 17, {
        duration: 2.5
    });
    randomMarker.openPopup();

}

function changeView(element) {
    // Get latitude and longitude from the data attributes
    const lat = parseFloat(element.getAttribute('data-lat'));
    const lon = parseFloat(element.getAttribute('data-lon'));

    // Loop through markersArray to find the matching marker
    for (let marker of markersArray) {
        // Check if the marker's position matches the data attributes
        console.log(marker.getLatLng().lat === lat && marker.getLatLng().lng === lon);
        if (marker.getLatLng().lat === lat && marker.getLatLng().lng === lon) {
            // Set the map view to the marker's position
            // Set the map view to the new coordinates

            map.flyTo([lat, lon], 17, {
                duration: 2.5 // duration in seconds for the flyTo animation
            });
            marker.openPopup();
            break; // Exit the loop once the marker is found
        }
    }
}

let lastNumber = null;

function getRandomNumber(n) {
    let randomNumber;

    do {
        randomNumber = Math.floor(Math.random() * n);
    } while (randomNumber === lastNumber);

    lastNumber = randomNumber;
    return randomNumber;
}