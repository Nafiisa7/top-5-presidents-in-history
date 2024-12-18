//store images
const images = [
  "Nicolae_Ceaușescu.jpg",
  "Mobutu.jpg",
  "Adolf-Hitler-1933.webp",
  "Mugabe_1979_a.jpg",
  "Idi-Amin-Dada-58b9cd813df78c353c38387a.webp",
];
let currentIndex = 0;
const prevBotton = document.querySelector("#prev");
const nextBotton = document.querySelector("#next");
const currentImage = document.querySelector("#currentImage");
const dots = document.querySelectorAll(".dot");
//add event listener
nextBotton.addEventListener("click", nextbotton);
prevBotton.addEventListener("click", prevbotton);

function nextbotton() {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    currentImage.setAttribute("src", images[currentIndex]);
  }
  post();
  updateBottons();
  sliderDots();
}
function prevbotton() {
  if (currentIndex > 0) {
    currentIndex--;
    currentImage.setAttribute("src", images[currentIndex]);
  }
  post();
  updateBottons();
  sliderDots();
}

//slides
function post() {
  if (currentIndex === 0) {
    document.querySelector("h2").innerHTML = `
        <h2>
         Nicolae Ceaușescu <span>(Romania, 1965–1989)</span>
        </h2>
      `;
    document.querySelector(
      "#paragraph"
    ).innerHTML = `<p> <span> Reasons: </span> His oppressive regime caused widespread
                    poverty</span>, extreme surveillance, and limited freedoms. The
                    "Systematization" policy devastated rural areas. His rule
                    ended with a violent revolution in 1989.
  `;
  } else if (currentIndex === 1) {
    document.querySelector(
      "h2"
    ).innerHTML = `<h2>Mobutu Sese Seko <span>(Zaire/Democratic Republic of Congo, 1965–1997)</span
  </h2>`;
    document.querySelector(
      "#paragraph"
    ).innerHTML = `<p> <span> Reasons: </span> Known for extreme corruption, siphoning billions of dollars from the nation, leading to economic collapse and severe poverty. His rule was marked by repression and nepotism.`;
  } else if (currentIndex === 2) {
    document.querySelector(
      "h2"
    ).innerHTML = `<h2>Adolf Hitler <span>(Germany, 1933–1945)</span
  </h2>`;
    document.querySelector(
      "#paragraph"
    ).innerHTML = `<p> <span> Reasons: </span> Responsible for the Holocaust, World War II, and the deaths of millions of people. His totalitarian regime devastated Europe and left a legacy of destruction.
      `;
  } else if (currentIndex === 3) {
    document.querySelector(
      "h2"
    ).innerHTML = `<h2>Robert Mugabe <span> (Zimbabwe, 1980–2017)
  </span
  </h2>`;
    document.querySelector(
      "#paragraph"
    ).innerHTML = `<p> <span> Reasons: </span> Initially celebrated for his role in Zimbabwe's independence, his later years in power were marked by hyperinflation, economic ruin, land seizures, and repression of opposition.
  
  `;
  } else if (currentIndex === 4) {
    document.querySelector(
      "h2"
    ).innerHTML = `<h2>Idi Amin <span> (Uganda, 1971–1979)
  </span
  </h2>`;
    document.querySelector(
      "#paragraph"
    ).innerHTML = `<p> <span> Reasons: </span> Known as the "Butcher of Uganda," his rule resulted in mass killings, corruption, and the expulsion of Asians from Uganda, leading to economic collapse.`;
  }
}

//update bottons
function updateBottons() {
  if (currentIndex === 0) {
    prevBotton.classList.add("disabled-btn");
    nextBotton.classList.remove("disabled-btn");
  } else if (currentIndex === 4) {
    prevBotton.classList.remove("disabled-btn");
    nextBotton.classList.add("disabled-btn");
  } else {
    prevBotton.classList.remove("disabled-btn");
    nextBotton.classList.remove("disabled-btn");
  }
}

//slider dots
function sliderDots() {
  dots.forEach((dot) => dot.classList.remove("active-dot"));
  dots[currentIndex].classList.add("active-dot");
}
