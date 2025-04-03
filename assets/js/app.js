const accordionItem = document.querySelectorAll('.accordionItem')
accordionItem.forEach(item => {
    item.addEventListener('click', () => {
        const accordionActive = document.querySelector('.accordionItem.active');
        item.classList.toggle('active');
        accordionActive && accordionActive.classList.remove('active')
    })
})