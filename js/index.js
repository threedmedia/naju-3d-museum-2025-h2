// 페이지 로드 시 카드 애니메이션
document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.exhibition-btn');

    // 순차적으로 카드 애니메이션 실행
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('animate');
        }, index * 200);
    });
});

// 카드 클릭 효과
document.querySelectorAll('.exhibition-btn').forEach(card => {
    card.addEventListener('click', function (e) {
        // 클릭 이펙트
        const ripple = document.createElement('div');
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.6)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s linear';
        ripple.style.left = (e.clientX - card.offsetLeft) + 'px';
        ripple.style.top = (e.clientY - card.offsetTop) + 'px';
        ripple.style.width = '20px';
        ripple.style.height = '20px';
        ripple.style.marginLeft = '-10px';
        ripple.style.marginTop = '-10px';
        ripple.style.pointerEvents = 'none';

        card.appendChild(ripple);

        setTimeout(() => {
            if (card.contains(ripple)) {
                card.removeChild(ripple);
            }
        }, 600);
    });
});

// 갤러리 버튼 호버 효과
const galleryBtn = document.querySelector('.gallery-btn');
galleryBtn.addEventListener('mouseenter', function () {
    this.style.animation = 'pulse 1s infinite';
});

galleryBtn.addEventListener('mouseleave', function () {
    this.style.animation = '';
});

// 스크롤 효과 (부드러운 전환)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
});