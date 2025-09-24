let currentPage = 1;
const totalPages = 2;

// 페이지 로드 시 카드 애니메이션
document.addEventListener('DOMContentLoaded', function () {
    animateCards();
});

function animateCards() {
    const activePageCards = document.querySelectorAll('.gallery-page.active .image-card');

    activePageCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('animate');
        }, index * 100);
    });
}

function showPage(pageNum) {
    // 로딩 표시
    document.getElementById('loading').style.display = 'block';

    setTimeout(() => {
        const pages = document.querySelectorAll('.gallery-page');
        const buttons = document.querySelectorAll('.page-btn');

        // 모든 페이지 숨기기
        pages.forEach(page => {
            page.classList.remove('active');
        });

        // 모든 버튼 비활성화
        buttons.forEach(btn => {
            btn.classList.remove('active');
        });

        // 선택된 페이지 표시
        document.querySelector(`[data-page="${pageNum}"]`).classList.add('active');

        // 선택된 버튼 활성화
        buttons[pageNum - 1].classList.add('active');

        currentPage = pageNum;

        // 로딩 숨기기
        document.getElementById('loading').style.display = 'none';

        // 카드 애니메이션 실행
        animateCards();
    }, 500);
}

function showNextPage() {
    const nextPage = currentPage < totalPages ? currentPage + 1 : 1;
    showPage(nextPage);
}

function openModal(element) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');

    if (element.tagName === 'IMG') {
        modalImg.src = element.src;
    } else {
        // 플레이스홀더인 경우 기본 이미지나 메시지 표시
        modalImg.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjNjY3ZWVhIi8+CiAgPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj7qs7XsmrDsl60g7Iau66W47KCB64uI64ukPC90ZXh0Pgo8L3N2Zz4K';
    }

    modal.style.display = 'flex';
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);

    // 스크롤 막기
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('show');

    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 300);
}

// ESC 키로 모달 닫기
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// 카드 호버 사운드 효과 (선택사항)
document.querySelectorAll('.image-card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        // 호버 시 약간의 진동 효과
        if (navigator.vibrate) {
            navigator.vibrate(50);
        }
    });
});

// 페이지네이션 키보드 네비게이션
document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft' && currentPage > 1) {
        showPage(currentPage - 1);
    } else if (e.key === 'ArrowRight' && currentPage < totalPages) {
        showPage(currentPage + 1);
    }
});

// 스크롤 시 카드 등장 효과
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animate')) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// 모든 이미지 카드 관찰
document.querySelectorAll('.image-card').forEach(card => {
    observer.observe(card);
});