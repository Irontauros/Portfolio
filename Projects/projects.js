document.addEventListener("DOMContentLoaded", function () {
    // Seleciona todos os carrosseis de imagens
    document.querySelectorAll(".images-carousel").forEach((carousel) => {
        const images = carousel.querySelectorAll(".images-display img");
        const leftArrow = carousel.querySelector(".left-arrow");
        const rightArrow = carousel.querySelector(".right-arrow");

        let currentIndex = 0; // Índice da imagem atual

        function updateCarousel() {
            images.forEach((img, index) => {
                img.style.display = index === currentIndex ? "block" : "none";
            });
        }

        leftArrow.addEventListener("click", () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateCarousel();
        });

        rightArrow.addEventListener("click", () => {
            currentIndex = (currentIndex + 1) % images.length;
            updateCarousel();
        });

        // Inicializa o carrossel exibindo a primeira imagem
        updateCarousel();
    });

    // Seleciona todos os carrosseis de vídeos
    document.querySelectorAll(".video-carousel").forEach((carousel) => {
        const videos = carousel.querySelectorAll(".video-display video");
        const leftArrow = carousel.querySelector(".left-arrow");
        const rightArrow = carousel.querySelector(".right-arrow");

        let currentIndex = 0; // Índice do vídeo atual

        function updateCarousel() {
            // Pausa o vídeo atual
            videos.forEach((video, index) => {
                video.style.display = index === currentIndex ? "block" : "none";
                if (index === currentIndex) {
                    video.play(); // Reproduz o vídeo atual
                } else {
                    video.pause(); // Pausa os outros vídeos
                }
            });
        }

        leftArrow.addEventListener("click", () => {
            currentIndex = (currentIndex - 1 + videos.length) % videos.length;
            updateCarousel();
        });

        rightArrow.addEventListener("click", () => {
            currentIndex = (currentIndex + 1) % videos.length;
            updateCarousel();
        });

        // Inicializa o carrossel exibindo o primeiro vídeo
        updateCarousel();
    });
});
