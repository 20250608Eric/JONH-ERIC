document.querySelectorAll('.carousel-container').forEach(container => {
            const track = container.querySelector('.carousel-track');
            const slides = container.querySelectorAll('.carousel-slide');
            const prevBtn = container.querySelector('.prev-btn');
            const nextBtn = container.querySelector('.next-btn');
            
            let currentIndex = 0;
            const totalSlides = slides.length;

            function updateSlide() {
                track.style.transform = `translateX(-${currentIndex * 100}%)`;
            }

            nextBtn.addEventListener('click', () => {
                currentIndex = (currentIndex + 1) % totalSlides;
                updateSlide();
            });

            prevBtn.addEventListener('click', () => {
                currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
                updateSlide();
            });
        });