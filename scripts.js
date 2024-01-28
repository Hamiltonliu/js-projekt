/*
 *  Filename: scripts.js
 *  Description: Provided JS source code as material for Lab 2: HTML + JavaScript.
 *  Course Code: TNM115-2024VT
 *  Institution: LinkÃ¶ping University
 *
 *  Author: Nico Reski
 *  Version: 2024-01-23
 */

// ===== SOLAR SYSTEM DATA =====
// JSON object containing the information (data) about the solar system
// JSON object composed by: Nico Reski
// based on data available at: https://science.nasa.gov/solar-system/

// == Documentation for individual star/planet JSON objects ==
// id           -> unique identifier for a JSON object across the dataset
// name         -> textual name
// description  -> textual description
// time_day     -> length of 1 day on the respective planet, measured in (unit) earth days (1 complete self-rotation with respect to the sun)
// time_year    -> length of 1 year, measured in (unit) earth days (1 complete orbit around the sun)
// moons        -> moons of the respective planet; observe: value type varies!
// neighbors    -> array containing the ids of its neighbors
// image_src    -> filepath to image
// online_ref   -> link (url) for further reading
const solarSystemData = {
    version: "2024-01-23",
    data_source: "https://science.nasa.gov/solar-system/",
    star : {
        id: "s1",
        name: "Sun",
        description: "A star is a hot, glowing ball of gas. When you look up in the night sky, you can see countless twinkling stars. Can you see any stars during the daytime? Of course! The light of daytime comes from our closest star: the Sun.",
        neighbors: [ "p1" ],
        image_src: "media/sun.png",
        online_ref: "https://science.nasa.gov/sun/"
    },
    planets : [
        { 
            id: "p1",
            name: "Mercury",
            description: "Mercury is the smallest planet in our solar system. It's just a little bigger than Earth's Moon. Mercury itself, though, doesn't have any moons. It is the closest planet to the Sun, but it's actually not the hottest. Venus is hotter.",
            time_day: 59,
            time_year: 88,
            moons: null,
            neighbors: [ "s1", "p2" ],
            image_src: "media/mercury.png",
            online_ref: "https://science.nasa.gov/mercury/"
        },
        { 
            id: "p2",
            name: "Venus",
            description: "Venus looks like a very active planet. It has mountains and volcanoes. Venus is similar in size to Earth. Earth is just a little bit bigger.",
            time_day: 243,
            time_year: 225,
            moons: null,
            neighbors: [ "p1", "p3" ],
            image_src: "media/venus.png",
            online_ref: "https://science.nasa.gov/venus/"
        },
        { 
            id: "p3",
            name: "Earth",
            description: "Our home planet Earth is a rocky, terrestrial planet. It has a solid and active surface with mountains, valleys, canyons, plains and so much more. Earth is special because it is an ocean planet. Water covers 70% of Earth's surface.",
            time_day: 1,
            time_year: 365.25,
            moons: [ "Moon" ],
            neighbors: [ "p2", "p4" ],
            image_src: "media/earth.png",
            online_ref: "https://science.nasa.gov/earth/"
        },
        { 
            id: "p4",
            name: "Mars",
            description: "Mars is a cold desert world. The average temperature on Mars is minus 85 degrees Fahrenheit - way below freezing. It is half the size of Earth. Mars is sometimes called the Red Planet. It's red because of rusty iron in the ground.",
            time_day: 1.025,
            time_year: 687,
            moons: [ "Phobos", "Deimos" ],
            neighbors: [ "p3", "p5" ],
            image_src: "media/mars.png",
            online_ref: "https://science.nasa.gov/mars/"
        },
        { 
            id: "p5",
            name: "Jupiter",
            description: "Jupiter is the biggest planet in our solar system. It's similar to a star, but it never got massive enough to start burning. It is covered in swirling cloud stripes. It has big storms like the Great Red Spot, which has been going for hundreds of years. Jupiter is a gas giant and doesn't have a solid surface.",
            time_day: 0.417,
            time_year: 11.8,
            moons: 95,
            neighbors: [ "p4", "p6" ],
            image_src: "media/jupiter.png",
            online_ref: "https://science.nasa.gov/jupiter/"
        },
        { 
            id: "p6",
            name: "Saturn",
            description: "Saturn isn't the only planet to have rings, but it definitely has the most beautiful ones. The rings we see are made of groups of tiny ringlets that surround Saturn. They're made of chunks of ice and rock. Like Jupiter, Saturn is mostly a ball of hydrogen and helium.",
            time_day: 0.446,
            time_year: 29,
            moons: 146,
            neighbors: [ "p5", "p7" ],
            image_src: "media/saturn.png",
            online_ref: "https://science.nasa.gov/saturn/"
        },
        { 
            id: "p7",
            name: "Uranus",
            description: "Uranus is made of water, methane, and ammonia fluids above a small rocky center. Its atmosphere is made of hydrogen and helium like Jupiter and Saturn, but it also has methane. The methane makes Uranus blue.",
            time_day: 0.71,
            time_year: 84,
            moons: 27,
            neighbors: [ "p6", "p8" ],
            image_src: "media/uranus.png",
            online_ref: "https://science.nasa.gov/uranus/"
        },
        { 
            id: "p8",
            name: "Neptune",
            description: "Neptune is dark, cold, and very windy. It's the last of the planets in our solar system. It's more than 30 times as far from the sun as Earth is. Neptune is very similar to Uranus. It's made of a thick fog of water, ammonia, and methane over an Earth-sized solid center.",
            time_day: 0.71,
            time_year: 165,
            moons: 14,
            neighbors: [ "p7" ],
            image_src: "media/neptune.png",
            online_ref: "https://science.nasa.gov/neptune/"
        }
    ]
};



document.addEventListener("DOMContentLoaded", function(){
    console.log("HTML DOM tree loaded, and ready for manipulation.");
    document.body.style.backgroundColor = "#1C1C1C";
    createHeader();
    createStartPage();
    createPlanets();


});

// ===== PROVIDED JS SOURCE CODE    -- ABOVE   =====
// ===== JS LAB 2 IMPLEMENTATION -- BENEATH =====

function createHeader(){
    const numberedList = document.createElement("ol");
    const head = document.createElement("header");
    head.style.top = "0";
    head.style.left = "0";
    head.style.position = "fixed";
    head.style.width = "100%";
    head.style.margin = "0";
    head.style.padding = "10px";
    head.style.backgroundColor="#4A4A4A";

    
    numberedList.style.Width="100%";
    numberedList.style.display="flex";
    numberedList.style.flexWrap="wrap";
    numberedList.style.justifyContent="center";
    numberedList.style.margin="0px";
    numberedList.style.padding="0px";





    for(let i = 0; i < solarSystemData.planets.length; i++){
        const listItem = document.createElement("button");

        listItem.id= "button" + i;
        listItem.addEventListener("click", function(){
            showPlanet(i);
        });

        listItem.style.background = "#fff" ;
        listItem.style.backfaceVisibility = "hidden" ;
        listItem.style.borderRadius = ".375rem" ;
        listItem.style.borderStyle = "solid" ;
        listItem.style.borderWidth = ".125rem" ;
        listItem.style.boxSizing = "border-box" ;
        listItem.style.color = "#212121" ;
        listItem.style.cursor = "pointer" ;
        listItem.style.fontFamily = "Circular,Helvetica,sans-serif" ;
        listItem.style.fontSize = "1.125rem" ;
        listItem.style.fontWeight = "550" ;
        listItem.style.lineHeight = "1.3" ;
        listItem.style.margin = "5px" ;
        listItem.style.width = "8%" ;
        listItem.style.alignContent = "center" ;
        listItem.style.height = "100px" ;




        const itemText = document.createTextNode(solarSystemData.planets[i].name);
        listItem.appendChild(itemText);
        numberedList.appendChild(listItem);
    };

    const listItem = document.createElement("button");

    listItem.id = "button" + solarSystemData.planets.length;
    listItem.addEventListener("click", function(){
        showPlanet(8);
    });

    listItem.style.background = "#fff" ;
    listItem.style.backfaceVisibility = "hidden" ;
    listItem.style.borderRadius = ".375rem" ;
    listItem.style.borderStyle = "solid" ;
    listItem.style.borderWidth = ".125rem" ;
    listItem.style.boxSizing = "border-box" ;
    listItem.style.color = "#212121" ;
    listItem.style.cursor = "pointer" ;
    listItem.style.fontFamily = "Circular,Helvetica,sans-serif" ;
    listItem.style.fontSize = "1.125rem" ;
    listItem.style.fontWeight = "550" ;
    listItem.style.lineHeight = "1.3" ;
    listItem.style.margin = "5px" ;
    listItem.style.width = "8%" ;
    listItem.style.alignContent = "center" ;
    listItem.style.height = "100px" ;
    
    const itemText = document.createTextNode(solarSystemData.star.name);

    listItem.appendChild(itemText);
    numberedList.appendChild(listItem);

    const listItem2 = document.createElement("button");

    listItem2.id = "button" + solarSystemData.planets.length;
    listItem2.addEventListener("click", function(){
        showAll();
    });

    listItem2.style.background = "#fff" ;
    listItem2.style.backfaceVisibility = "hidden" ;
    listItem2.style.borderRadius = ".375rem" ;
    listItem2.style.borderStyle = "solid" ;
    listItem2.style.borderWidth = ".125rem" ;
    listItem2.style.boxSizing = "border-box" ;
    listItem2.style.color = "#212121" ;
    listItem2.style.cursor = "pointer" ;
    listItem2.style.fontFamily = "Circular,Helvetica,sans-serif" ;
    listItem2.style.fontSize = "1.125rem" ;
    listItem2.style.fontWeight = "550" ;
    listItem2.style.lineHeight = "1.3" ;
    listItem2.style.margin = "5px" ;
    listItem2.style.width = "8%" ;
    listItem2.style.alignContent = "center" ;
    listItem2.style.height = "100px" ;
    
    const Item2Text = document.createTextNode("Show all");

    listItem2.appendChild(Item2Text);
    numberedList.appendChild(listItem2);

    

    head.appendChild(numberedList);

    document.body.appendChild(head);
};

function createStartPage(){
    const headDiv = document.createElement("div");
    headDiv.id = "headDiv";
    headDiv.style.display = "flex";
    headDiv.style.flexDirection = "column";
    headDiv.style.Width = "100%";
    headDiv.style.marginTop = "150px";
    headDiv.style.alignItems = "center";


    const headLine = document.createElement("h1");
    const content = document.createTextNode("Welcome!"); 
    headLine.appendChild(content);

    headLine.style.margin = "50px";
    headLine.style.color = "white";
    headLine.style.fontStyle = "bold";

    const par = document.createElement("h2");

    par.appendChild(document.createTextNode("Click on any planet or star for more information!")) ;

    par.style.color = "white";
    par.style.maxWidth = "100%";
    headLine.style.fontSize = "50px";

    headDiv.appendChild(headLine);
    headDiv.appendChild(par);


    document.body.appendChild(headDiv) ;
}

function hideStartPage(){
    const hp = document.getElementById("headDiv");
    hp.style.display = "none";
}

function showPlanet(i){
    hideStartPage();
    const pl = document.getElementById("pPage" + i);
    pl.style.display = "flex";
    pl.style.flexDirection = "column" ;
    pl.style.alignItems = "center" ;

    if(i == 8) {
        for(let y = 0; y < solarSystemData.planets.length; y++){
            const pl2 = document.getElementById("pPage" + y);
            pl2.style.display = "none";
            
        }
    }
    else{
        for(let y = 0; y < solarSystemData.planets.length; y++){
            if(i != y){
                const pl2 = document.getElementById("pPage" + y);
                pl2.style.display = "none";
            }
        }
        const pl2 = document.getElementById("pPage8");
        pl2.style.display = "none";
    }
}

function createPlanets(){
    const sunDiv = document.createElement("div");
    sunDiv.id = "pPage8" ;
    sunDiv.style.marginTop = "150px";
    const sunImg = document.createElement("img") ;
    sunImg.src = solarSystemData.star.image_src ;
    const title1 = document.createElement("h1") ;
    title1.appendChild(document.createTextNode("The Sun")) ;
    const sunP = document.createElement("p") ;
    sunP.appendChild(document.createTextNode(solarSystemData.star.description)) ;
    const neib = document.createElement("p");
    neib.appendChild(document.createTextNode("The Sun has the neighbour mercury"));
    
    sunImg.style.width = "30%" ;

    title1.style.color = "white" ;
    title1.style.fontSize = "60px" ;

    sunP.style.color = "white" ;
    sunP.style.fontSize = "20px" ;
    sunP.style.width = "50%";

    neib.style.color = "white";
    neib.style.fontSize = "20px";

    sunDiv.appendChild(sunImg) ;
    sunDiv.appendChild(title1) ;
    sunDiv.appendChild(sunP) ;
    sunDiv.appendChild(neib);

    sunDiv.style.display = "none";

    document.body.appendChild(sunDiv) ;

    for(let i = 0; i < solarSystemData.planets.length; i++){
        const pDiv = document.createElement("div") ;
        pDiv.id = ("pPage" + i);
        pDiv.style.marginTop = "150px";
        const pImg = document.createElement("img") ;
        pImg.src = solarSystemData.planets[i].image_src ;
        const pTitle = document.createElement("h1") ;
        pTitle.appendChild(document.createTextNode(solarSystemData.planets[i].name)) ;
        const pContent = document.createElement("p") ;
        pContent.appendChild(document.createTextNode(solarSystemData.planets[i].description)) ;
        pContent.style.width = "50%";

        pImg.style.width = "30%" ;

        pTitle.style.color = "white";
        pTitle.style.fontSize = "60px" ;

        pContent.style.color = "white" ;
        pContent.style.fontSize = "20px" ;

        pDiv.appendChild(pImg) ;
        pDiv.appendChild(pTitle) ;
        pDiv.appendChild(pContent) ;



        if(solarSystemData.planets[i].moons != null){

            const moonP = document.createElement("p") ;

            if(solarSystemData.planets[i].moons.length == undefined){
                moonP.appendChild(document.createTextNode(solarSystemData.planets[i].name + " has " + solarSystemData.planets[i].moons + " moons"))
            }
            else{
                if(solarSystemData.planets[i].moons.length > 1){
                    moonP.appendChild(document.createTextNode(solarSystemData.planets[i].name + " has " + solarSystemData.planets[i].moons.length + " moons: ")) ;
                }
                else{
                    moonP.appendChild(document.createTextNode(solarSystemData.planets[i].name + " has 1 moon: ")) ;
                }

                for(let y = 0; y < solarSystemData.planets[i].moons.length; y++){
                    const moonItem = document.createTextNode(solarSystemData.planets[i].moons[y] + " ");
                    moonP.appendChild(moonItem);
                }
            }

            

            moonP.style.color = "white" ;
            moonP.style.fontSize = "20px" ;

            pDiv.appendChild(moonP) ;
        }

        const dayTime = document.createElement("p");
        dayTime.appendChild(document.createTextNode("A day on " + solarSystemData.planets[i].name + " is about " + (24 * solarSystemData.planets[i].time_day).toFixed(2) + " hours")) ;
        dayTime.style.color = "white";
        dayTime.style.fontSize = "20px";

        pDiv.appendChild(dayTime) ;

        const yearTime = document.createElement("p");
        yearTime.appendChild(document.createTextNode("A year on " + solarSystemData.planets[i].name + " is about " + solarSystemData.planets[i].time_year + " days")) ;
        yearTime.style.color = "white";
        yearTime.style.fontSize = "20px";

        pDiv.appendChild(yearTime);


        const neighbour = document.createElement("p");

        if(i == 0){
            neighbour.appendChild(document.createTextNode(solarSystemData.planets[i].name + " has the neighbours the Sun and " + solarSystemData.planets[i+1].name));
        }
        else if(i == (solarSystemData.planets.length - 1)){
            neighbour.appendChild(document.createTextNode(solarSystemData.planets[i].name + " has the neighbour " + solarSystemData.planets[i-1].name));
        }
        else{
            neighbour.appendChild(document.createTextNode(solarSystemData.planets[i].name + " has the neighbours " + solarSystemData.planets[i-1].name + " and " + solarSystemData.planets[i+1].name));
        }
        neighbour.style.color = "white";
        neighbour.style.fontSize = "20px";

        pDiv.appendChild(neighbour);

        pDiv.style.display = "none";

        document.body.appendChild(pDiv);
    }
}

function showAll(){
    const pl = document.getElementById("pPage8");
    pl.style.display = "flex";
    pl.style.flexDirection = "column" ;
    pl.style.alignItems = "center" ;
    for(let i = 0; i < solarSystemData.planets.length; i++){
        const pl2 = document.getElementById("pPage" + i);
        pl2.style.display = "flex";
        pl2.style.flexDirection = "column" ;
        pl2.style.alignItems = "center" ;
    }
}