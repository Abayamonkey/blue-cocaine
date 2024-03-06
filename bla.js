let allnews=[];
function Display(){
    let newDiv="";
    for(let i=0;  i< allnews.length; i++){
newDiv += "<h1 class='title'>"+ (i+1) + ". " + allnews[i].title + "</h1>";
newDiv += "<p class='text' >"+ allnews[i].text + "</p>"+ "<hr>";
    }
    document.getElementById("news").innerHTML=newDiv;
}
function AddNews(){
let newTitle= document.getElementById("title").value;
let newBody= document.getElementById("text").value ;
let newNews = {
    title: newTitle,
    text: newBody,
};
allnews.push(newNews);
Display();
}
