document.addEventListener('DOMContentLoaded', () => {
    const imageList = document.querySelector('.image-list');
    const prevButton = document.querySelector('.prev-slide');
    const nextButton = document.querySelector('.next-slide');

    function slide(direction) {
        const currentScroll = imageList.scrollLeft;
        const imageWidth = imageList.clientWidth;
        const scrollAmount = direction === 'next' ? currentScroll + imageWidth : currentScroll - imageWidth;

        imageList.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }

    prevButton.addEventListener('click', () => {
        slide('prev');
    });

    nextButton.addEventListener('click', () => {
        slide('next');
    });

    const secondImageList = document.querySelector('.content#products-pricing .image-list');
    const secondPrevButton = document.querySelector('.content#products-pricing .prev-slide');
    const secondNextButton = document.querySelector('.content#products-pricing .next-slide');

    function secondSlide(direction) {
        const currentScroll = secondImageList.scrollLeft;
        const imageWidth = secondImageList.clientWidth;
        const scrollAmount = direction === 'next' ? currentScroll + imageWidth : currentScroll - imageWidth;

        secondImageList.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }

    secondPrevButton.addEventListener('click', () => {
        secondSlide('prev');
    });

    secondNextButton.addEventListener('click', () => {
        secondSlide('next');
    });
});
