import thankYouIllustration from './images/illustration-thank-you.svg'

const mainCard = document.querySelector('main > .card');
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const notation = Object.fromEntries(formData.entries());

  if (!notation.rating) {
    alert('Please rate us before continuing');
  } else {
    mainCard.innerHTML = `
      <div class="thank-you">
        <img src=${thankYouIllustration} alt="Thank you !">
        <span>You selected ${notation.rating} out of 5</span>
        <h2>Thank you!</h2>
        <p>We appreciate you taking the time to give a rating.
          If you ever need more support, don't hesitate to get in touch!
        </p>
      </div>
    `;
  }
});
