const reviewList = [
    {
        id : 1,
        name : "SAMSUNG LIONS",
        type : "SS",
        img : "./img/15.jpg",
        text : "LEE JAE HYEON"
    },
    {
        id : 2,
        name : "SAMSUNG LIONS",
        type : "1B",
        img : "./img/24.jpg",
        text : "KIM JAE HYUK"
    },
    {
        id : 3,
        name : "SAMSUNG LIONS",
        type : "3B",
        img : "./img/30.jpg",
        text : "KIM YOUNG WOONG"
    }
]
const mainImg = document.querySelector("#main-img");
const foodName = document.querySelector("#food-name");
const type = document.querySelector("#type");
const info = document.querySelector("#info");

const preBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");

let currentIndex = 1;

window.addEventListener("DOMContentLoaded", function() {
    let item = reviewList[currentIndex];
    mainImg.src = item.img;
    foodName.textContent = item.name;
    type.textContent = item.type;
    info.textContent = item.text;
});

function showReview(index) {
    const item = reviewList[index];
    mainImg.src = item.img;
    foodName.textContent = item.name;
    type.textContent = item.type;
    info.textContent = item.text;
}

preBtn.addEventListener("click", function() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = reviewList.length -1
    }
    showReview(currentIndex);
})

nextBtn.addEventListener("click", function() {
    currentIndex++;
    if (currentIndex >= reviewList.length) {
        currentIndex = 0
    }
    showReview(currentIndex);
})