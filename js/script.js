document.querySelectorAll('.top-nav .nav-link').forEach(link => {
  link.addEventListener('click', function () {
    document.querySelectorAll('.top-nav .nav-link').forEach(el => el.classList.remove('active'));
    this.classList.add('active');
  });
});

  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const counter = document.querySelector('.slider-counter');

  let currentIndex = 0;

  function showSlide(index) {
    const totalSlides = slides.length;
    const slidesContainer = document.querySelector('.slides');
    const offset = -index * 100;

    slidesContainer.style.transform = `translateX(${offset}%)`;
    counter.textContent = `0${index + 1} / 0${totalSlides}`;
  }

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  });

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  });

  // Инициализация
  showSlide(currentIndex);
// ======== Анимация счётчиков при появлении блока =============
document.addEventListener('DOMContentLoaded', () => {

  const numbers = document.querySelectorAll('.benefit-number');
  let animated = false; // чтобы анимация запускалась только один раз

  const animateValue = (el, target, duration = 1500) => {
    const start = 0;
    const startTime = performance.now();

    function update(currentTime) {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      el.textContent = Math.floor(progress * (target - start) + start);
      if (progress < 1) requestAnimationFrame(update);
      else el.textContent = target; // гарантируем конечное значение
    }

    requestAnimationFrame(update);
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        numbers.forEach(num => {
          animateValue(num, parseInt(num.dataset.target, 10));
        });
        animated = true;
        observer.disconnect(); // больше не нужно отслеживать
      }
    });
  }, { threshold: 0.4 }); // 40% блока в видимой области

  observer.observe(document.querySelector('.benefits-section'));
});

// Вариант для будущей фильтрации или вкладок
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelectorAll('.nav-link').forEach(item => item.classList.remove('active'));
    link.classList.add('active');
    // Тут можно переключать видимость проектов по категориям
  });
});

// Пример простой навигации по отзывам (заготовка)
document.querySelectorAll('.arrow-buttons button').forEach(btn => {
  btn.addEventListener('click', () => {
    alert('Здесь может быть переключение слайдов');
  });
});


  // Добавляем обработчики клика на все видео
  document.querySelectorAll('.video-player').forEach(video => {
    video.addEventListener('click', () => {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    });
  });

  document.querySelector('.btn-outline-light').addEventListener('click', function () {
  alert("Спасибо! Наш замерщик свяжется с вами в ближайшее время.");
});

document.addEventListener('DOMContentLoaded', () => {
    const favicon = document.querySelector('#favicon');
    if (favicon) {
        favicon.addEventListener('click', () => {
            location.reload(); // Обновление страницы
        });
    }
});