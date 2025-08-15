const sliderData = [
    {id: 1, img: '/images/bg_2.jpg'},
    {id: 2, img: '/images/bg_1.jpg'},
    {id: 3, img: '/images/bg_3.jpg'},
];

const slider = document.querySelector('.slider');
slider.innerHTML = '';

sliderData.forEach(item => {
    const card = document.createElement('article');
    card.className = 'card';
    const img = document.createElement('img');
    img.src = item.img;
    img.alt = `Слайд ${item.id}`;
    card.appendChild(img);
    slider.appendChild(card);
});

const prevBtn = document.querySelector('.btn_prev')
const prevNext = document.querySelector('.btn_next')
prevBtn.addEventListener('click', () => {
    slider.scrollBy({
        left: -slider.clientWidth,
        behavior: 'smooth'
    })
})
prevNext.addEventListener('click', () => {
    slider.scrollBy({
        left: slider.clientWidth,
        behavior: 'smooth'
    })
})
document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav");

    burger.addEventListener("click", () => {
        nav.classList.toggle("open");
        const expanded = burger.getAttribute("aria-expanded") === "true";
        burger.setAttribute("aria-expanded", !expanded);
    });
});


/*hero*/
const coffeeOffers = [
    {id: 1, img: '/icons/cup_2.svg'},
    {id: 2, img: '/icons/cup_2.svg'},
    {id: 3, img: '/icons/cup_2.svg'},
    {id: 4, img: '/icons/cup_2.svg'},


]
const coffeeOffer = document.querySelector('.coffee-offers');
coffeeOffer.innerHTML = '';
coffeeOffers.forEach((item) => {
    const cardItem = document.createElement('article')
    cardItem.className = 'card_offers';
    const img = document.createElement('img');
    img.src = item.img
    img.className='card_img'
    img.alt = `offers ${item.id}`;
    cardItem.appendChild(img);
    coffeeOffer.appendChild(cardItem)
})



document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav");
    const navClose = document.querySelector(".nav-close");

    const updateBurgerVisibility = () => {
        if (window.innerWidth > 768) {

            burger.style.display = "none";
            nav.classList.remove("open");
            burger.setAttribute("aria-expanded", "false");
        } else {

            burger.style.display = nav.classList.contains("open") ? "none" : "block";
        }
    };

    burger.addEventListener("click", () => {
        nav.classList.add("open");
        burger.setAttribute("aria-expanded", "true");
        updateBurgerVisibility();
    });

    navClose.addEventListener("click", () => {
        nav.classList.remove("open");
        burger.setAttribute("aria-expanded", "false");
        updateBurgerVisibility();
    });

    window.addEventListener("resize", updateBurgerVisibility);

    updateBurgerVisibility();
});

