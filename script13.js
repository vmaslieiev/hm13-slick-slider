const div = document.getElementById('list-wrap');

class Gallery {
  constructor(container) {
    this.container = container;
    this.elements = document.querySelectorAll('#container .slide');
    this.currentSlide = 0;
    this.init();
  }

  init() {
    this.timer();
    this.addHandlers();
  }

  timer() {
    setInterval(() => {
      this.showSlide();
    }, 3000);
  }

  showSlide() {
    this.elements[this.currentSlide].classList.remove('showing');
    this.currentSlide = (this.currentSlide + 1) % this.elements.length;
    this.elements[this.currentSlide].classList.add('slide', 'showing');
  }

  addHandlers() {
    const prev = document.getElementById('prevArrow');
    const next = document.getElementById('nextArrow');

    prev.addEventListener('click', this.prevSlide.bind(this));
    next.addEventListener('click', this.nextSlide.bind(this));
  }

  prevSlide() {
    if (this.currentSlide == 0) {
      this.elements[this.currentSlide].classList.remove('showing');
      this.currentSlide = this.elements.length - 1;
      this.elements[this.currentSlide].classList.add('slide', 'showing');
    } else {
      this.elements[this.currentSlide].classList.remove('showing');
      this.currentSlide = (this.currentSlide - 1) % this.elements.length;
      this.elements[this.currentSlide].classList.add('slide', 'showing');
    }

  }

  nextSlide() {
    if (this.currentSlide == this.elements.length) {
      this.currentSlide = 0;
    }
    this.elements[this.currentSlide].classList.remove('showing');
    this.currentSlide = (this.currentSlide + 1) % this.elements.length;
    this.elements[this.currentSlide].classList.add('slide', 'showing');
  }
}

const myGallery = new Gallery(document.getElementById('container'));