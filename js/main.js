(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
})(jQuery);


const jobTitles = document.querySelector('.typed-text').innerText.split(', ');
const textContainer = document.querySelector('.text-container');
let index = 0;

function type() {
  const currentTitle = jobTitles[index];
  const textElement = document.createElement('span');
  textContainer.appendChild(textElement);

  let text = '';
  let charIndex = 0;

  const typingInterval = setInterval(() => {
    text += currentTitle[charIndex];
    textElement.textContent = text;
    charIndex++;

    if (charIndex === currentTitle.length) {
      clearInterval(typingInterval);
      setTimeout(erase, 1000);
    }
  }, 100);

  function erase() {
    const erasingInterval = setInterval(() => {
      text = text.slice(0, -1);
      textElement.textContent = text;

      if (text === '') {
        clearInterval(erasingInterval);
        index = (index + 1) % jobTitles.length;
        setTimeout(type, 500);
      }
    }, 50);
  }
}

type();

let arrows = document.getElementsByClassName('arrow');

Array.from(arrows).forEach((arrow) => {
    arrow.addEventListener('click', (event) => {
        event.preventDefault(); 
    });
});

function scrollToElement(elementSelector, instance = 0) {
    // Select all elements that match the given selector
    const elements = document.querySelectorAll(elementSelector);
    // Check if there are elements matching the selector and if the requested instance exists
    if (elements.length > instance) {
        // Scroll to the specified instance of the element
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}


const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");
const link4 = document.getElementById("link4");

link1.addEventListener('click', (e) => {
    e.preventDefault();
    scrollToElement('.abt');
});

link2.addEventListener('click', (e) => {
    e.preventDefault();
    scrollToElement('.skl');
});

link3.addEventListener('click', (e) => {
    e.preventDefault();
    scrollToElement('.prjct');
});

link4.addEventListener('click', (e) => {
    e.preventDefault();
    scrollToElement('.cntct');
});
