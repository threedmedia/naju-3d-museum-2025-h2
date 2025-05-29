
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

