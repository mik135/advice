const dice = document.querySelector(".dice");
const h2 = document.querySelector(".adviceContainer h2");
const id = document.querySelector(".id")

getAdvice();

dice.addEventListener('click', () => {
    getAdvice();
})


function getAdvice() {
    fetch('https://api.adviceslip.com/advice')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        h2.textContent = data.slip.advice;
        id.textContent = "#" + data.slip.id;
        console.log(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
}