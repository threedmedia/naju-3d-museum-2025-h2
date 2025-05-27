
window.addEventListener('DOMContentLoaded', () => {
    const texts = document.querySelectorAll('.fade-text');
    texts.forEach((el, i) => {
        setTimeout(() => {
            el.classList.add('fade-in');
        }, i * 300); // 순차적으로 등장 (0.3초 간격)
    });
});


window.addEventListener('DOMContentLoaded', () => {
    const titles = document.querySelectorAll('.gradient-text');
    [...titles].reverse().forEach((el, i) => {
        setTimeout(() => {
            el.classList.add('animate');
        }, i * 300);
    });

});
let currentPage = 1;

function showPage(page) {
    const pages = document.querySelectorAll(".gallery-page");
    pages.forEach(p => p.classList.remove("active"));
    const target = document.querySelector(`.gallery-page[data-page="${page}"]`);
    if (target) {
        target.classList.add("active");
        currentPage = page;
    }
}

function showNextPage() {
    showPage(currentPage + 1);
}

function openModal(src) {
    const modal = document.getElementById("modal");
    const img = document.getElementById("modal-img");
    const video = document.getElementById("modal-video");

    if (src.endsWith(".mp4")) {
        img.style.display = "none";
        video.style.display = "block";
        video.src = src;
    } else {
        video.style.display = "none";
        img.style.display = "block";
        img.src = src;
    }

    modal.style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
    document.getElementById("modal-video").pause();
}
