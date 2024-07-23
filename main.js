const questionButton = document.querySelectorAll(".container__minusbutton");
const answer = document.querySelectorAll(".container__answer");
let generated;
let i;

const buttons = questionButton.forEach((button) => {
  // Loop through buttons
  const selection = button.addEventListener("click", () => {
    // Get button dataset
    i = button.dataset.button;
    console.log(i);
    console.log(answer[i]);
    // Use button dataset to choose from querySelectorAll array of containers
    button.innerHTML = `<img
                class="button_image"
                src="./assets/images/icon-minus.svg"
                alt=""
              />`;
    answer[i].classList.toggle("hidden");
    if (answer[i].classList.contains("hidden")) {
        button.innerHTML = `<img
        class="button_image"
        src="./assets/images/icon-plus.svg"
        alt=""
      />`;
    }
  });
});
