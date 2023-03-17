window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  var header = document.querySelector(".header");
  var sticky = header.offsetTop;
  var headerHeight = header.offsetHeight;
  if (window.pageYOffset >= (sticky + headerHeight)) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

function debounce(func, wait = 10, immediate = true) {
  var timeout;
  return function () {
    var context = this, args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const animateItems = document.querySelectorAll('.animate-item');

function checkAnimate() {
  animateItems.forEach(item => {
    const triggerPoint = (window.innerHeight / 5) * 4;
    const itemTop = item.getBoundingClientRect().top;
    if (itemTop < triggerPoint) {
      item.classList.add('animate-item-show');
    } else {
      item.classList.remove('animate-item-show');
    }
  });
}

window.addEventListener('scroll', debounce(checkAnimate));


// auto scroll navbar 

// Lấy tất cả các phần tử <a> trong Navbar
const navbarLinks = document.querySelectorAll('.list__menu li a');


navbarLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // Ngăn chặn hành động mặc định của sự kiện click

    const targetId = link.getAttribute('href'); // Lấy giá trị của thuộc tính href

    // Lấy phần tử cần cuộn đến dựa trên giá trị của thuộc tính href
    const targetElement = document.querySelector(targetId);

    // Sử dụng phương thức scrollIntoView() để cuộn đến phần tử cần đến
    targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});


// button scroll top

const scrollToTopButton = document.querySelector('.button__scroll-top');

window.addEventListener('scroll', () => {
  // Nếu người dùng đã cuộn xuống một khoảng cách nhất định
  if (window.pageYOffset > 100) {
    // Hiển thị nút cuộn lên đầu trang
    scrollToTopButton.style.display = 'inline-block';
    scrollToTopButton.style.animation = 'bottomToTopAnimation 0.5s linear';
  } else {
    // Ẩn nút cuộn lên đầu trang
    scrollToTopButton.style.display = 'none';
  }
});

scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


