// ===========faq=============
const accordionItem = document.querySelectorAll('.accordionItem')
accordionItem.forEach(item => {
    item.addEventListener('click', () => {
        const accordionActive = document.querySelector('.accordionItem.active');
        item.classList.toggle('active');
        accordionActive && accordionActive.classList.remove('active')
    })
})

// ==========swiper==========
const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,
    slidesPerView: 3,
    speed: 3000,
    spaceBetween: 31,
    autoplayDisableOnInteraction: true,
    autoplay: {
        delay: 0,
    },
    centerSlides: true,
    breakpoints: {
        1440.98: {
            slidesPerView: 3.4,
        },
        1024.98: {
            slidesPerView: 3,
        },
        768.98: {
            slidesPerView: 2.5,
        },
        640.98: {
            slidesPerView: 2,
        },
        300: {
            slidesPerView: 1.5,
        },
    },
});

//   ============tabs============
const tabs = document.querySelectorAll(".tabs");
const contents = document.querySelectorAll(".tabsInfo");

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        const isActiveTab = document.querySelector(".tabs.active");
        if (isActiveTab) {
            isActiveTab.classList.remove(
                "active",
                "bg-transparent",
                "text-[#00afe1]",
                "border-[#00afe1]"
            );
        }
        contents.forEach((content) => content.classList.add("hidden"));
        contents.forEach((content) => content.classList.remove("flex"));
        tab.classList.add(
            "active",
            "bg-transparent",
            "text-[#00afe1]",
            "border-[#00afe1]"
        );

        const target = tab.getAttribute("data-target");
        const targetContent = document.getElementById(target);
        targetContent && targetContent.classList.remove("hidden");
        targetContent && targetContent.classList.add("flex");
    });
});

// ==========memberships==========
function moveBlueBtn(direction) {
    const blueBtn = document.getElementById("blueBtn");
    if (direction === "left") {
        blueBtn.style.transform = "translateX(0)";
    } else if (direction === "right") {
        blueBtn.style.transform = "translateX(98%)";
    }
}

// Back to top
let backTopBtn = document.querySelector(".back-top-btn");

backTopBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
window.onscroll = () => (backTopBtn.style.opacity = window.scrollY > 150 ? 1 : 0);
