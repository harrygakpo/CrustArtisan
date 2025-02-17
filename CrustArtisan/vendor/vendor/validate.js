(function () {
  "use strict";

  let forms = document.querySelectorAll('.php-email-form');

  forms.forEach( function(e) {
    e.addEventListener('submit', function(event) {
      event.preventDefault();

      let thisForm = this;

      thisForm.querySelector('.loading').classList.add('d-block');
      thisForm.querySelector('.sent-message').classList.remove('d-block');

      thisForm.querySelector('.sent-message').classList.add('d-block');
      thisForm.reset(); 

      thisForm.querySelector('.loading').classList.remove('d-block');
    });
  });

})();