var changeImageButton=document.getElementById("photoChange");
var afterImageChange=document.getElementById("afterImageChange");

const ImageArray = ["Normal.jpg","Suit.jpg"];

changeImageButton.addEventListener("click",function(){


    var image=document.getElementById("theProfileImage");
    image.classList.add("newImage");
    image.src=image.src.replace("Normal.jpg","Suit.jpg");

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

//setInterval(removeImage,5000);

function removeImage(){

    alert("ZAP. Grand Wizard Merlin Does Not Like This Picture!");


    var image=document.getElementById("theProfileImage");
    image.src=image.src.replace("Suit.jpg","Normal.jpg");
    image.classList.remove("newImage");


}


/*
function addBlurryImage(){
    changeImageButton.classList.remove("newImage");
    changeImageButton.classList.add("noImage");

}
*/

