



// RANDOM REVIEWS

    let reviews = [
        {
            id: 1,
            quote: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint a et nisi facilis necessitatibus distinctio, fuga nam corporis ullam mollitia.",
            username: "Kofi Mils"
        },
        {
            id: 2,
            quote: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint a et nisi facilis necessitatibus distinctio, fuga nam corporis ullam mollitia.",
            username: "Yaa Jackson"
        },
        {
            id: 3,
            quote: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint a et nisi facilis necessitatibus distinctio, fuga nam corporis ullam mollitia.",
            username: "Kobby Linux"
        },
        {
            id: 4,
            quote: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint a et nisi facilis necessitatibus distinctio, fuga nam corporis ullam mollitia.",
            username: "Ama West"
        },
        {
            id: 5,
            quote: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint a et nisi facilis necessitatibus distinctio, fuga nam corporis ullam mollitia.",
            username: "Ms. Constance"
        },
        {
            id: 6,
            quote: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint a et nisi facilis necessitatibus distinctio, fuga nam corporis ullam mollitia.",
            username: "Lily White"
        }
    ]

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
let quote = document.querySelector("#quote");
let author = document.querySelector("#author");

let currentItem =  0;

prevBtn.addEventListener("click",()=>{
    currentItem--;
    if(currentItem < 0){
        currentItem  = 0;
    }
    itemFinder();
})

nextBtn.addEventListener("click", ()=>{
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = reviews.length - reviews.length;
    }
    itemFinder();
})


function itemFinder(){
    quote.textContent = reviews[currentItem].quote;
    author.textContent = reviews[currentItem].username;
}