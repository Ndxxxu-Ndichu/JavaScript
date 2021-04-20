// local reviews data
const reviews = [
  {
    id: 1,
    name: "Clark Kent",
    job: "Superman",
    img:
      "https://i.cdn.newsbytesapp.com/images/l176_11011553006253.jpg",
    text:
      "I think a hero is an odinary individual who finds strength to persevere and endure in spite of overwhelming obstacles",
  },
  {
    id: 2,
    name: "Bruce Wayne",
    job: "Batman",
    img:
      "https://i.pinimg.com/originals/26/34/d2/2634d2b67715b0dbcfb7aff9fc3d959a.jpg",
    text:
      "It's not who i am underneath, but what i do that defines me",
  },
  {
    id: 3,
    name: "Diana Prince",
    job: "Wonder Woman",
    img:
      "https://1.bp.blogspot.com/-uUejF-_gVF4/X075gM7Km6I/AAAAAAABLsM/bNF5nMXewk8n-ApqkCgBekGE8VH-l-Z6wCPcBGAsYHg/s3174/wonderwoman-news-hero-190524-v1.jpg",
    text:
      "Bonds of love never make the wearer weaker - they give him/her greater strength",
  },
  {
    id: 4,
    name: "Jack Napier",
    job: "The Joker",
    img:
      "https://i.pinimg.com/originals/98/b3/90/98b39052c3f7cffbdd1123431e9ef3ea.jpg",
    text:
      "For people you are just like a toy, they will stop loving you after they get bored ",
  },
];
//select items
const img = document.getElementById("person-img");
const author= document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

//set starting item
let currentItem = 0;

//load initial item
window.addEventListener("DOMContentLoaded", function(){
  showPerson(currentItem);
});

//show person based on item

function showPerson(person) {
  const item = reviews[person];
  img.src = item.img
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

//show next person
nextBtn.addEventListener('click', function (){
  currentItem ++;
  if(currentItem > reviews.length - 1){
    currentItem = 0
  }
  showPerson(currentItem);
});

//show prev person  

prevBtn.addEventListener('click', function (){
  currentItem --;
  if(currentItem < 0 ){
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
  
});

//random button
randomBtn.addEventListener('click', function(){
  currentItem = Math.floor(Math.random() * reviews.length);
  
  showPerson(currentItem)
  
})