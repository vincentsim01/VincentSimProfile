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

theleftSkillSet.addEventListener("mouseover",showskillright);

var SkillBar = document.getElementsByClassName("SkillBar");

var skillOl=document.getElementsByClassName("skillOl");


SkillBar.addEventListener("mouseover",alerting);

skillOl.addEventListener("mouseover",alerting);


function showskillright(){
    therightSkillSetContainer.classList.remove("none");
}


function alerting(){
    alert("why not working!!!!!!!!!!!!!!!!");
}


