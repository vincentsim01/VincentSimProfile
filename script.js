var changeImageButton=document.getElementById("photoChange");
var afterImageChange=document.getElementById("afterImageChange");

const ImageArray = ["Normal.jpg","Suit.jpg"];

changeImageButton.addEventListener("click",function(){


    var image=document.getElementById("theProfileImage");
    image.classList.add("newImage");
    image.src=image.src.replace("Normal.jpg","mickey.jpg");

    setTimeout(removeImage,5000);

    


//     const newButton = document.createElement("button");

//     const newContent = document.createTextNode("Click here for more magic");

//     // add the text node to the newly created div
//     newButton.appendChild(newContent);

//    afterImageChange.appendChild(newButton);
//    newButton.className="secondMagicButton";


});
/*
var secondMagicButton = document.getElementsByClassName("secondMagicButton");
secondMagicButton.addEventListener("click", alert("secondMagicButton")
);
*/


function removeImage(){

    alert("ZAP. Walt Disney said this image is copyrighted!");


    var image=document.getElementById("theProfileImage");
    image.src=image.src.replace("mickey.jpg","Normal.jpg");
    image.classList.remove("newImage");


}

let i=0;

var aboutMePictureButton=document.getElementById("aboutMePictureButton");

var aboutMePicture = document.getElementById("theAboutMePicture");

var arrayAboutMePicture=["./Image/SG.JPG","./Image/SG2.JPG","./Image/SG3.JPG","./Image/SG4.JPG","./Image/SG5.JPG"];
var AboutMePictureAttribute=aboutMePicture.getAttribute("src");

console.log(AboutMePictureAttribute);
console.log(arrayAboutMePicture[1]);

aboutMePictureButton.addEventListener("click",function(){
    if(i>=arrayAboutMePicture.length-1){
        aboutMePicture.setAttribute("src",arrayAboutMePicture[0]);
        i=0;

    }else if(i<arrayAboutMePicture.length-1){
        i=i+1;

        aboutMePicture.setAttribute("src",arrayAboutMePicture[i]);
    }


    

});


var googleadsicon=document.getElementById("googleadsicon");
var therightSkillSetContainer=document.getElementById("therightSkillSetContainer");
var theleftSkillSet=document.getElementById("theleftSkillSet");

var skillOl=document.getElementsByClassName("skillOl");
// theleftSkillSet.addEventListener("mouseover",showskillright);
// theleftSkillSet.addEventListener("mouseout",notshowskillright);


var skillbar=document.querySelector(".SkillBar");

// skillbar.addEventListener("click",alerting);
// skillbar.addEventListener("mouseover",alerting);



// function showskillright(){
//     therightSkillSetContainer.classList.remove("none");
// }

// function notshowskillright(){
//     therightSkillSetContainer.classList.add("none");

// }

var skillzet=[
    {name:"Digital Marketing",
    description:"Vincent is a digital marketing specialist",
    image:"Image/dm.jpg"}
    ,
    {name:"Google Ads",
    description:"Vincent is a Google Ads specialist",
    image:"Image/googleadsicon.png"}
    ,
    {name:"Facebook Ads",
    description:"Vincent is a Facebook Ads specialist",
    image:"Image/fbads.png"}
    ,
    {name:"SEO",
    description:"Vincent is a SEO specialist",
    image:"Image/seo.jpg"}
    ,
    {name:"Photo Editing",
    description:"Vincent is a Photo Editing specialist",
    image:"Image/photoedit.jpg"}
    ,
    {name:"Video Editing",
    description:"Vincent is a Video Editing specialist",
    image:"Image/photoedit.jpg"}
    ,
    {name:"Math",
    description:"Vincent is a Math specialist",
    image:"Image/math.png"}
    ,
    {name:"Website Editing",
    description:"Vincent is a Website Editing specialist",
    image:"Image/www.png"}
    ,
    {name:"Wordpress",
    description:"Vincent is a Wordpress specialist",
    image:"Image/Wordpress.png"}

];

var healing=document.getElementById("healing");

var therightskill=document.getElementById("therightSkill");

var gambar=document.getElementById("gambar");
var deskripsi=document.getElementById("deskripsi");

//dm

var dm=document.getElementById("dm");
dm.addEventListener("mouseover", dmfunc);
dm.addEventListener("mouseout", dmfunc2);


function dmfunc(){

    therightSkillSetContainer.classList.remove("none");
    var textarray=skillzet[0].name;
    healing.innerHTML=textarray;
    gambar.innerHTML=`<img src="${skillzet[0].image}" width="20%"></img>`;
    deskripsi.innerHTML=skillzet[0].description;
}

function dmfunc2(){
    therightSkillSetContainer.classList.add("none");
};


//googleads

var googleads=document.getElementById("googleads");
googleads.addEventListener("mouseover", googleadsfunc);
googleads.addEventListener("mouseout", googleadsfunc2);


function googleadsfunc(){

    therightSkillSetContainer.classList.remove("none");
    var textarray=skillzet[1].name;
    healing.innerHTML=textarray;
    gambar.innerHTML=`<img src="${skillzet[1].image}" width="20%"></img>`;
    deskripsi.innerHTML=skillzet[1].description;
}

function googleadsfunc2(){
    therightSkillSetContainer.classList.add("none");
};


//fbads

var fbads=document.getElementById("fbads");
fbads.addEventListener("mouseover", fbadsfunc);
fbads.addEventListener("mouseout", fbadsfunc2);


function fbadsfunc(){

    therightSkillSetContainer.classList.remove("none");
    var textarray=skillzet[2].name;
    healing.innerHTML=textarray;
    gambar.innerHTML=`<img src="${skillzet[2].image}" width="20%"></img>`;
    deskripsi.innerHTML=skillzet[2].description;
}

function fbadsfunc2(){
    therightSkillSetContainer.classList.add("none");
};

//seo

var fbads=document.getElementById("seo");
seo.addEventListener("mouseover", seofunc);
seo.addEventListener("mouseout", seofunc2);


function seofunc(){

    therightSkillSetContainer.classList.remove("none");
    var textarray=skillzet[3].name;
    healing.innerHTML=textarray;
    gambar.innerHTML=`<img src="${skillzet[3].image}" width="20%"></img>`;
    deskripsi.innerHTML=skillzet[3].description;
}

function seofunc2(){
    therightSkillSetContainer.classList.add("none");
};

//photoedit

var photoedit=document.getElementById("photoedit");
photoedit.addEventListener("mouseover", photoeditfunc);
photoedit.addEventListener("mouseout", photoeditfunc2);


function photoeditfunc(){

    therightSkillSetContainer.classList.remove("none");
    var textarray=skillzet[4].name;
    healing.innerHTML=textarray;
    gambar.innerHTML=`<img src="${skillzet[4].image}" width="20%"></img>`;
    deskripsi.innerHTML=skillzet[4].description;
}

function photoeditfunc2(){
    therightSkillSetContainer.classList.add("none");
};

//videoedit

var videoedit=document.getElementById("videoedit");
videoedit.addEventListener("mouseover", videoeditfunc);
videoedit.addEventListener("mouseout", videoeditfunc2);


function videoeditfunc(){

    therightSkillSetContainer.classList.remove("none");
    var textarray=skillzet[5].name;
    healing.innerHTML=textarray;
    gambar.innerHTML=`<img src="${skillzet[5].image}" width="20%"></img>`;
    deskripsi.innerHTML=skillzet[5].description;
}

function videoeditfunc2(){
    therightSkillSetContainer.classList.add("none");
};


//math

var math=document.getElementById("math");
math.addEventListener("mouseover", mathfunc);
math.addEventListener("mouseout", mathfunc2);


function mathfunc(){

    therightSkillSetContainer.classList.remove("none");
    var textarray=skillzet[6].name;
    healing.innerHTML=textarray;
    gambar.innerHTML=`<img src="${skillzet[6].image}" width="20%"></img>`;
    deskripsi.innerHTML=skillzet[6].description;
}

function mathfunc2(){
    therightSkillSetContainer.classList.add("none");
};

//webdesign

var webdesign=document.getElementById("webdesign");
webdesign.addEventListener("mouseover", webdesignfunc);
webdesign.addEventListener("mouseout", webdesignfunc2);


function webdesignfunc(){

    therightSkillSetContainer.classList.remove("none");
    var textarray=skillzet[7].name;
    healing.innerHTML=textarray;
    gambar.innerHTML=`<img src="${skillzet[7].image}" width="20%"></img>`;
    deskripsi.innerHTML=skillzet[7].description;
}

function webdesignfunc2(){
    therightSkillSetContainer.classList.add("none");
};


//wordpress

var wordpress=document.getElementById("wordpress");
wordpress.addEventListener("mouseover", wordpressfunc);
wordpress.addEventListener("mouseout", wordpressfunc2);


function wordpressfunc(){

    therightSkillSetContainer.classList.remove("none");
    var textarray=skillzet[8].name;
    healing.innerHTML=textarray;
    gambar.innerHTML=`<img src="${skillzet[8].image}" width="20%"></img>`;
    deskripsi.innerHTML=skillzet[8].description;
}

function wordpressfunc2(){
    therightSkillSetContainer.classList.add("none");
};





function alerting(){
    alert("why not working!!!!!!!!!!!!!!!!");
}


function geolocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition)
    }else{
        x.innerText = "Geo Not Supported"
    }
}

let x = document.getElementById('out');
let y = document.getElementById('weather');

function showPosition(data){
    console.log(data)
    let lat = data.coords.latitude;
    let lon = data.coords.longitude;
    x.innerText = `Latitude is ${lat} and longitude is ${lon}`
    const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`;
    //api calling
    fetch(url,{method:'GET'})
    //return promise
    .then((res) =>  res.json())
    //resolve the promise
    .then((data) => {
        console.log(data)
        let cityName = data.city.name;
        let temp = data.list[0].temp.day+" °C"
        y.innerText=`Weather of ${cityName} is ${temp}`
    })
}


