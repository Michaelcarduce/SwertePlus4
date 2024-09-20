// document.addEventListener('DOMContentLoaded', function () {
//     const track = document.querySelector('.imageCarousel-track');
//     const slides = Array.from(track.children);
//     const nextButton = document.querySelector('.imageCarousel-button.right');
//     const prevButton = document.querySelector('.imageCarousel-button.left');
//     const dotsNav = document.querySelector('.imageCarousel-dots');
//     const dots = Array.from(dotsNav.children);
//     let currentIndex = 0;
//     const slideWidth = slides[0].getBoundingClientRect().width + 20; // includes gap

//     // Arrange slides next to each other
//     slides.forEach((slide, index) => {
//         slide.style.left = slideWidth * index + 'px';
//     });

//     const moveToSlide = (currentIndex) => {
//         track.style.transform = 'translateX(-' + currentIndex * slideWidth + 'px)';
//         dots.forEach(dot => dot.classList.remove('active'));
//         dots[currentIndex].classList.add('active');
//     };

//     const updateIndex = (index) => {
//         currentIndex = (index + slides.length) % slides.length;
//         moveToSlide(currentIndex);
//     };

//     const autoSlide = () => {
//         currentIndex = (currentIndex + 1) % slides.length;
//         moveToSlide(currentIndex);
//     };

//     let autoPlay = setInterval(autoSlide, 3000);

//     nextButton.addEventListener('click', () => {
//         updateIndex(currentIndex + 1);
//         clearInterval(autoPlay);
//         autoPlay = setInterval(autoSlide, 3000); // reset auto-play
//     });

//     prevButton.addEventListener('click', () => {
//         updateIndex(currentIndex - 1);
//         clearInterval(autoPlay);
//         autoPlay = setInterval(autoSlide, 3000); // reset auto-play
//     });

//     dotsNav.addEventListener('click', e => {
//         if (e.target.classList.contains('imageCarousel-dot')) {
//             const targetIndex = dots.findIndex(dot => dot === e.target);
//             updateIndex(targetIndex);
//             clearInterval(autoPlay);
//             autoPlay = setInterval(autoSlide, 3000); // reset auto-play
//         }
//     });

//     moveToSlide(currentIndex);
// });






// document.addEventListener('DOMContentLoaded', function () {
//     const track = document.querySelector('.imageCarousel-track');
//     const slides = Array.from(track.children);
//     const nextButton = document.querySelector('.imageCarousel-button.right');
//     const prevButton = document.querySelector('.imageCarousel-button.left');
//     const dotsNav = document.querySelector('.imageCarousel-dots');
//     const dots = Array.from(dotsNav.children);
//     let currentIndex = 0;

//     const calculateSlideWidth = () => {
//         return slides[0].getBoundingClientRect().width + 20; // Recalculate width based on screen size
//     };

//     let slideWidth = calculateSlideWidth();

//     // Recalculate slide width on window resize
//     window.addEventListener('resize', () => {
//         slideWidth = calculateSlideWidth();
//         moveToSlide(currentIndex); // Adjust the slide position
//     });

//     // Arrange slides next to each other
//     slides.forEach((slide, index) => {
//         slide.style.left = slideWidth * index + 'px';
//     });

//     const moveToSlide = (currentIndex) => {
//         slideWidth = calculateSlideWidth(); // Recalculate width before moving the slide
//         track.style.transform = 'translateX(-' + currentIndex * slideWidth + 'px)';
//         dots.forEach(dot => dot.classList.remove('active'));
//         dots[currentIndex].classList.add('active');
//     };

//     const updateIndex = (index) => {
//         currentIndex = (index + slides.length) % slides.length;
//         moveToSlide(currentIndex);
//     };

//     const autoSlide = () => {
//         currentIndex = (currentIndex + 1) % slides.length;
//         moveToSlide(currentIndex);
//     };

//     let autoPlay = setInterval(autoSlide, 3000);

//     nextButton.addEventListener('click', () => {
//         updateIndex(currentIndex + 1);
//         clearInterval(autoPlay);
//         autoPlay = setInterval(autoSlide, 3000); // reset auto-play
//     });

//     prevButton.addEventListener('click', () => {
//         updateIndex(currentIndex - 1);
//         clearInterval(autoPlay);
//         autoPlay = setInterval(autoSlide, 3000); // reset auto-play
//     });

//     dotsNav.addEventListener('click', e => {
//         if (e.target.classList.contains('imageCarousel-dot')) {
//             const targetIndex = dots.findIndex(dot => dot === e.target);
//             updateIndex(targetIndex);
//             clearInterval(autoPlay);
//             autoPlay = setInterval(autoSlide, 3000); // reset auto-play
//         }
//     });

//     moveToSlide(currentIndex);
// });







// document.addEventListener('DOMContentLoaded', function () {
//     const track = document.querySelector('.imageCarousel-track');
//     const slides = Array.from(track.children);
//     const slideCount = slides.length;
//     const nextButton = document.querySelector('.imageCarousel-button.right');
//     const prevButton = document.querySelector('.imageCarousel-button.left');
//     const dotsNav = document.querySelector('.imageCarousel-dots');
//     const dots = Array.from(dotsNav.children);
//     let currentIndex = 0;

//     // Function to clone the first and last set of slides
//     const cloneSlides = () => {
//         // Clone first set of slides and append
//         for (let i = 0; i < slideCount; i++) {
//             const cloneFirstSet = slides[i].cloneNode(true);
//             track.appendChild(cloneFirstSet);
//         }

//         // Clone last set of slides and prepend
//         for (let i = 0; i < slideCount; i++) {
//             const cloneLastSet = slides[i].cloneNode(true);
//             track.insertBefore(cloneLastSet, slides[0]);
//         }
//     };

//     cloneSlides(); // Call to clone slides

//     // Recalculate width based on screen size
//     const calculateSlideWidth = () => {
//         return slides[0].getBoundingClientRect().width + 20;
//     };

//     let slideWidth = calculateSlideWidth();

//     // Recalculate slide width on window resize
//     window.addEventListener('resize', () => {
//         slideWidth = calculateSlideWidth();
//         moveToSlide(currentIndex);
//     });

//     // Arrange all slides (including clones) next to each other
//     const arrangeSlides = () => {
//         const allSlides = Array.from(track.children); // Includes original and cloned slides
//         allSlides.forEach((slide, index) => {
//             slide.style.left = slideWidth * index + 'px';
//         });
//     };

//     arrangeSlides(); // Call to arrange the slides

//     // Move to slide with infinite scrolling
//     const moveToSlide = (index) => {
//         slideWidth = calculateSlideWidth(); // Recalculate width
//         track.style.transition = 'transform 0.5s ease';
//         track.style.transform = `translateX(-${(slideCount + index) * slideWidth}px)`;

//         dots.forEach(dot => dot.classList.remove('active'));
//         dots[currentIndex % slideCount].classList.add('active');
//     };

//     // Update index with looping functionality
//     const updateIndex = (newIndex) => {
//         currentIndex = (newIndex + slideCount) % slideCount;
//         moveToSlide(currentIndex);
//     };

//     // Auto-slide with reset for infinite looping
//     const autoSlide = () => {
//         currentIndex++;
//         moveToSlide(currentIndex);

//         // Reset when we reach the clone after the last slide
//         if (currentIndex >= slideCount) {
//             setTimeout(() => {
//                 track.style.transition = 'none'; // Disable transition for reset
//                 currentIndex = 0; // Reset index
//                 track.style.transform = `translateX(-${slideCount * slideWidth}px)`; // Go back to original position
//             }, 500); // Wait for the animation to finish
//         }
//     };

//     // Initial setup: move to the first cloned image set
//     track.style.transform = `translateX(-${slideCount * slideWidth}px)`;

//     // Auto-slide interval
//     let autoPlay = setInterval(autoSlide, 3000);

//     // Event listeners for buttons and dots navigation
//     nextButton.addEventListener('click', () => {
//         updateIndex(currentIndex + 1);
//         clearInterval(autoPlay);
//         autoPlay = setInterval(autoSlide, 3000); // Reset auto-play
//     });

//     prevButton.addEventListener('click', () => {
//         updateIndex(currentIndex - 1);
//         clearInterval(autoPlay);
//         autoPlay = setInterval(autoSlide, 3000); // Reset auto-play
//     });

//     dotsNav.addEventListener('click', (e) => {
//         if (e.target.classList.contains('imageCarousel-dot')) {
//             const targetIndex = dots.findIndex(dot => dot === e.target);
//             updateIndex(targetIndex);
//             clearInterval(autoPlay);
//             autoPlay = setInterval(autoSlide, 3000); // Reset auto-play
//         }
//     });
// });



document.addEventListener('DOMContentLoaded', function () {
    const track = document.querySelector('.imageCarousel-track');
    const slides = Array.from(track.children);
    const slideCount = slides.length;
    const nextButton = document.querySelector('.imageCarousel-button.right');
    const prevButton = document.querySelector('.imageCarousel-button.left');
    const dotsNav = document.querySelector('.imageCarousel-dots');
    const dots = Array.from(dotsNav.children);
    let currentIndex = 0;

    // Function to clone the first and last set of slides
    const cloneSlides = () => {
        // Clone first set of slides and append
        for (let i = 0; i < slideCount; i++) {
            const cloneFirstSet = slides[i].cloneNode(true);
            track.appendChild(cloneFirstSet);
        }

        // Clone last set of slides and prepend
        for (let i = 0; i < slideCount; i++) {
            const cloneLastSet = slides[i].cloneNode(true);
            track.insertBefore(cloneLastSet, slides[0]);
        }
    };

    cloneSlides(); // Call to clone slides

    // Recalculate width based on screen size
    const calculateSlideWidth = () => {
        return slides[0].getBoundingClientRect().width + 20;
    };

    let slideWidth = calculateSlideWidth();

    // Recalculate slide width on window resize
    window.addEventListener('resize', () => {
        slideWidth = calculateSlideWidth();
        moveToSlide(currentIndex);
    });

    // Arrange all slides (including clones) next to each other
    const arrangeSlides = () => {
        const allSlides = Array.from(track.children); // Includes original and cloned slides
        allSlides.forEach((slide, index) => {
            slide.style.left = slideWidth * index + 'px';
        });
    };

    arrangeSlides(); // Call to arrange the slides

    // Move to slide with infinite scrolling
    const moveToSlide = (index) => {
        slideWidth = calculateSlideWidth(); // Recalculate width
        track.style.transition = 'transform 0.5s ease';
        track.style.transform = `translateX(-${(slideCount + index) * slideWidth}px)`;

        // Ensure active dot is updated based on original slides
        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentIndex % slideCount].classList.add('active');
    };

    // Update index with looping functionality
    const updateIndex = (newIndex) => {
        currentIndex = (newIndex + slideCount) % slideCount;
        moveToSlide(currentIndex);
    };

    // Auto-slide with reset for infinite looping
    const autoSlide = () => {
        currentIndex++;
        moveToSlide(currentIndex);

        // Reset when we reach the clone after the last slide
        if (currentIndex >= slideCount) {
            setTimeout(() => {
                track.style.transition = 'none'; // Disable transition for reset
                currentIndex = 0; // Reset index
                track.style.transform = `translateX(-${slideCount * slideWidth}px)`; // Go back to original position
            }, 500); // Wait for the animation to finish
        }
    };

    // Initial setup: move to the first cloned image set
    track.style.transform = `translateX(-${slideCount * slideWidth}px)`;

    // Set initial active dot
    dots[currentIndex].classList.add('active');

    // Auto-slide interval
    let autoPlay = setInterval(autoSlide, 3000);

    // Event listeners for buttons and dots navigation
    nextButton.addEventListener('click', () => {
        updateIndex(currentIndex + 1);
        clearInterval(autoPlay);
        autoPlay = setInterval(autoSlide, 3000); // Reset auto-play
    });

    prevButton.addEventListener('click', () => {
        updateIndex(currentIndex - 1);
        clearInterval(autoPlay);
        autoPlay = setInterval(autoSlide, 3000); // Reset auto-play
    });

    dotsNav.addEventListener('click', (e) => {
        if (e.target.classList.contains('imageCarousel-dot')) {
            const targetIndex = dots.findIndex(dot => dot === e.target);
            updateIndex(targetIndex);
            clearInterval(autoPlay);
            autoPlay = setInterval(autoSlide, 3000); // Reset auto-play
        }
    });
});
