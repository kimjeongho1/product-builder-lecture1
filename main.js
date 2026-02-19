
class LottoBall extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'ball');

    const number = document.createElement('span');
    number.textContent = this.getAttribute('number');

    const style = document.createElement('style');
    style.textContent = `
      .ball {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: linear-gradient(45deg, #89f7fe, #66a6ff);
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-size: 1.5rem;
        font-weight: bold;
        box-shadow: 0 4px 8px rgba(0,0,0,0.2);
      }
    `;

    shadow.appendChild(style);
    shadow.appendChild(wrapper);
    wrapper.appendChild(number);
  }
}

customElements.define('lotto-ball', LottoBall);

const generateBtn = document.getElementById('generate-btn');
const lottoNumbersContainer = document.querySelector('.lotto-numbers');

generateBtn.addEventListener('click', () => {
  lottoNumbersContainer.innerHTML = '';
  const numbers = new Set();
  while(numbers.size < 6) {
    numbers.add(Math.floor(Math.random() * 45) + 1);
  }

  for (const number of numbers) {
    const lottoBall = document.createElement('lotto-ball');
    lottoBall.setAttribute('number', number);
    lottoNumbersContainer.appendChild(lottoBall);
  }
});
