let screenCount = 0;

let page1 = document.getElementById("main");
let page2 = document.getElementById("details");
let page3 = document.getElementById("pass");
let page4 = document.getElementById("artist");
let page5 = document.getElementById("food");
let page6 = document.getElementById("games");
let page7 = document.getElementById("review");
let page8 = document.getElementById("all");

let pass = 0;

// let page3 = doc

page2.classList.add("hidden");
page3.classList.add("hidden");
page4.classList.add("hidden");
page5.classList.add("hidden");
page6.classList.add("hidden");
page7.classList.add("hidden");
page8.classList.add("hidden");


// console.log(page2);


function next(){
    screenCount++;
    if(screenCount == 1){
        page1.classList.add("hidden");
        page2.classList.remove("hidden");
    } else if(screenCount == 2){
        page2.classList.add("hidden");
        page3.classList.remove("hidden");
    } else if(screenCount == 3){
        page3.classList.add("hidden");
        page4.classList.remove("hidden");
    } else if(screenCount == 4){
        page4.classList.add("hidden");
        page5.classList.remove("hidden");
    } else if(screenCount == 5){
        page5.classList.add("hidden");
        page6.classList.remove("hidden");
    } else if(screenCount == 6){
        page6.classList.add("hidden");
        page7.classList.remove("hidden");
    } else if(screenCount == 7){
        page7.classList.add("hidden");
        page8.classList.remove("hidden");
    }
}

function back(){
    screenCount--;
    if(screenCount == 1){
        page2.classList.remove("hidden");
        page3.classList.add("hidden");
    } else if(screenCount == 2){
        page3.classList.remove("hidden");
        page4.classList.add("hidden");
    } else if(screenCount == 3){
        page4.classList.remove("hidden");
        page5.classList.add("hidden");
    } else if(screenCount == 4){
        page5.classList.remove("hidden");
        page6.classList.add("hidden");
    } else if(screenCount == 5){
        page6.classList.remove("hidden");
        page7.classList.add("hidden");
    } else {
        page7.classList.remove("hidden");
        page8.classList.add("hidden");
    }
    
}

function checkPreview(){
    
    let imgTag = document.getElementById("img-preview");
    let imgLink = document.getElementById("img-url").value;
    imgTag.src = imgLink;
}

function validateForm(){

    let nameField = document.getElementById("name").value;
    let rollField = document.getElementById("roll").value;
    let urlField = document.getElementById("img-url").value;

    var correct = 0;

    if((nameField == "") || (rollField == "") || (urlField == "")){
        correct = 0;
        alert("Kindly Enter all input fields");
    } else if(rollField.length != 9){
        correct = 0;
        alert("Kindly Enter the roll number properly");
    } else {
        correct = 1;
    }
    
    if(correct){
        next();
    }



}
