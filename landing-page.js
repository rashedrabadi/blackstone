$(document).ready(function () {
  console.log("jQuery is working!");
});
const slides = $(".SP-slider");
const dotsContainer = $(".carousel-dots");
const interval = 5000;
let currentIndex = 0;

for (let i = 0; i < slides.length; i++) {
  dotsContainer.append('<span class="dot" data-index="' + i + '"></span>');
}

const dots = $(".dot");

function showSlide(index) {
  slides.hide();
  slides.eq(index).show();
  dots.removeClass("active");
  dots.eq(index).addClass("active");
}

showSlide(currentIndex);

function autoSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

let sliderInterval = setInterval(autoSlide, interval);

dots.click(function () {
  const dotIndex = $(this).data("index");
  showSlide(dotIndex);
  currentIndex = dotIndex;
  clearInterval(sliderInterval);
  sliderInterval = setInterval(autoSlide, interval);
});

$("#nextButton").click(function () {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
  clearInterval(sliderInterval);
  sliderInterval = setInterval(autoSlide, interval);
});

$("#prevButton").click(function () {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
  clearInterval(sliderInterval);
  sliderInterval = setInterval(autoSlide, interval);
});
function updateTimer() {
  future = Date.parse("February 9, 2025 11:30:00");
  now = new Date();
  diff = future - now;

  days = Math.floor(diff / (1000 * 60 * 60 * 24));
  hours = Math.floor(diff / (1000 * 60 * 60));
  mins = Math.floor(diff / (1000 * 60));

  d = days;
  h = hours - days * 24;
  m = mins - hours * 60;

  document.getElementById("timer").innerHTML =
    `<div class='time-block'>` +
    d +
    `<span>Days</span></div>` +
    `<div class='time-splitter'>:</div>` +
    `<div class='time-block'>` +
    h +
    `<span>Hours</span></div>` +
    `<div class='time-splitter'>:</div>` +
    `<div class='time-block'>` +
    m +
    `<span>Minutes</span></div>`;
}
updateTimer();
setInterval("updateTimer()", 60000);

class Dialog {
  static dialog = null;
  static dialogBody = null;
  static closeButton = null;

  constructor() {
    if (!Dialog.dialog) {
      Dialog.dialog = this.#createHTMLDialogBox();
      Dialog.dialogBody = Dialog.dialog.querySelector(".dialog-body");
      Dialog.closeButton = Dialog.dialog.querySelector(".dialog-close");

      // Bind close method
      this.close = this.close.bind(this);

      Dialog.closeButton.addEventListener("click", this.close);
      document.addEventListener("keydown", this.close);
    }
  }

  set visible(value) {
    Dialog.dialog.classList.toggle("open", value);
    Dialog.dialog.parentElement.classList.toggle("visible", value);
  }

  show(message) {
    if (!Dialog.dialogBody) return;
    Dialog.dialogBody.innerHTML = message;

    const scrollY = window.scrollY;
    requestAnimationFrame(() => {
      this.visible = true;
      window.scrollTo(0, scrollY);
    });
  }

  close(event) {
    if (event?.key === "Escape" || event?.type === "click") {
      this.visible = false;
    }
  }

  #createHTMLDialogBox() {
    const overlay = document.createElement("div");
    overlay.classList.add("dialog-overlay");

    const dialog = document.createElement("div");
    dialog.setAttribute("role", "dialog");
    dialog.setAttribute("aria-labelledby", "jsdialog-title");
    dialog.setAttribute("aria-describedby", "jsdialog-body");
    dialog.classList.add("dialog");
    dialog.id = "jsdialog";
    dialog.innerHTML = `
        <div class="dialog-content-wrapper">
            <button type="button" class="dialog-close" aria-label="Close">×</button>
            <div class="inner-container">
                <div class="dialog-header"></div>
                <div class="dialog-body" id="jsdialog-body"></div> 
            </div>
        </div>`;

    overlay.appendChild(dialog);
    document.body.appendChild(overlay);

    return dialog;  // Return the dialog reference instead of overlay
}

}

// Create a single instance of the dialog
const dialogInstance = new Dialog();

const SEE_MORE_1 = document.querySelectorAll(".see-more-1");
SEE_MORE_1.forEach((button) => {
  button.addEventListener("click", () => {
    dialogInstance.show(`
       <div class="dialog-header">
              <h1 class="dialog-title" id="jsdialog-title">Data & AI: Daily Food</h1>
          </div>
             <div class="dialog-body" id="jsdialog-body" bis_skin_checked="1">
        <h3 class="the-client">The Client</h3>
        <p class="the-client-word">
          Daily Food is a leading food service provider in Saudi Arabia,
          dedicated to delivering high-quality meals. Their mission is to
          enhance customer satisfaction through their food experiences, and
          their vision is to become the preferred choice for food services in
          the region.
        </p>
        <img
          src="assets/success-stories/inner-images/daily-food.svg"
          alt="daily-food"
          class="dialog-img"
        />
        <div class="line"></div>
        <div class="dialog-content">
          <h2 class="heading-content">The Problem Statement</h2>
          <p class="pargraph-content">
            Daily Food faced significant challenges in their pizza production,
            including frequent customer complaints about quality, order errors,
            and extended waiting times, which negatively impacted  on the
            overall customer satisfaction.
          </p>
        </div>
        <div class="dialog-content">
          <h2 class="heading-content">Our Methodology</h2>
          <p class="pargraph-content">
            We engaged with Daily Food through deep-dive discussions to identify
            key business issues, focusing on their production processes and
            customer feedback to understand the root causes of their challenges.
          </p>
        </div>
        <div class="dialog-content">
          <h2 class="heading-content">The Solution</h2>
          <p class="pargraph-content">
            Blackstone implemented an AI Computer Vision and Data Analytics
            system that effectively monitored pizza quality, preparation times,
            sizes, and types, ensuring quality, consistency, and accuracy in
            production.
          </p>
        </div>
        <div class="dialog-content">
          <h2 class="heading-content">The Results</h2>
          <p class="pargraph-content">
            The solution led to an impressive accuracy improvement rate from 40%
            to over 90%. Quality issues such as overcooked pizzas were
            eliminated, enhancing customer satisfaction. The solution also
            included a customized data analytics dashboard which helped optimize
            operations including staffing during peak hours.
          </p>
        </div>
          `);
  });
});
const SEE_MORE_2 = document.querySelectorAll(".see-more-2");
SEE_MORE_2.forEach((button) => {
  button.addEventListener("click", () => {
    dialogInstance.show(`
       <div class="dialog-header">
              <h1 class="dialog-title" id="jsdialog-title">Business Excellence Suite: CHI</h1>
          </div>
             <div class="dialog-body" id="jsdialog-body" bis_skin_checked="1">
        <h3 class="the-client">The Client</h3>
        <p class="the-client-word">
          The Council of Health Insurance (CHI) is a government health insurance entity in Saudi Arabia.
           CHI aimed to engage its employees in submitting innovative ideas and participating in challenges.
            They also want to reward them with points, badges, and gifts.
        </p>
        <img
          src="assets/success-stories/inner-images/daman.svg"
          alt="daman"
          class="dialog-img"
        />
        <div class="line"></div>
        <div class="dialog-content">
          <h2 class="heading-content">The Problem Statement</h2>
          <p class="pargraph-content">
           The client struggled with low employee engagement, and lack of structured approach to drive their recognition. 
           This led to missed opportunities to foster an innovation culture and boost employee morale.
          </p>
        </div>
        <div class="dialog-content">
          <h2 class="heading-content">Our Methodology</h2>
          <p class="pargraph-content">
           After synthesizing input we collected from key stakeholders at CHI, including employees,
            we suggested a well-structured process that’s aligned with best practices from the Global Innovation Institute,
             and provided options on how to customize it to meet the client’s specific goals.
          </p>
        </div>
        <div class="dialog-content">
          <h2 class="heading-content">The Solution</h2>
          <p class="pargraph-content">
         The solution consists of our Core Innovation module along with a web-based application built using ASP.NET for the backend and Angular for the frontend.
          These technologies provided a robust framework to manage innovation processes effectively and consistently.
          </p>
        </div>
        <div class="dialog-content">
          <h2 class="heading-content">The Results</h2>
          <p class="pargraph-content">
          The client has seen a notable increase in employee engagement and participation in innovative initiatives, 
          fostering a stronger culture of innovation. This has in turn improved employee morale and motivation.
          </p>
        </div>
          `);
  });
});
const SEE_MORE_3 = document.querySelectorAll(".see-more-3");
SEE_MORE_3.forEach((button) => {
  button.addEventListener("click", () => {
    dialogInstance.show(`
       <div class="dialog-header">
              <h1 class="dialog-title" id="jsdialog-title">MEWA</h1>
          </div>
             <div class="dialog-body" id="jsdialog-body" bis_skin_checked="1">
        <h3 class="the-client">The Client</h3>
        <p class="the-client-word">
         The Ministry of Environment, Water and Agriculture (MEWA) in Saudi Arabia is responsible 
         for managing natural resources and agricultural practices.
          They focus on enhancing food quality, animal welfare, and sustainable environmental practices.
        </p>
        <img
          src="assets/success-stories/inner-images/ministry.svg"
          alt="ministry image"
          class="dialog-img"
        />
        <div class="line"></div>
        <div class="dialog-content">
          <h2 class="heading-content">The Problem Statement</h2>
          <p class="pargraph-content">
          MEWA faced significant challenges with their animal disposal mechanisms and the overall quality of meat produced.
           There were critical hygiene issues among workers, leading to concerns about food safety and public health.
          </p>
        </div>
        <div class="dialog-content">
          <h2 class="heading-content">Our Methodology</h2>
          <p class="pargraph-content">
           We collected video footage of slaughterhouse operations to identify areas needing improvement. 
           In-depth interviews with employees and stakeholders provided insights into existing challenges and key business issues.
          </p>
        </div>
        <div class="dialog-content">
          <h2 class="heading-content">The Solution</h2>
          <p class="pargraph-content">
        Blackstone proposed implementing computer vision and IoT smart sensors to monitor livestock behavior and ensure optimal conditions.
         This included features for heat stress detection and tracking animal handling practices.
          Our solution aims to enhance animal welfare and streamline processes in the slaughterhouses and markets.
          </p>
        </div>
        <div class="dialog-content">
          <h2 class="heading-content">The Results</h2>
          <p class="pargraph-content">
          Even though this project is still ongoing, based on initial deployment the expectation is for workers hygiene to improve by 40%, 
          animal welfare to improve by 30%, leading to a better meat quality and a 25% waste reduction.
          </p>
        </div>
          `);
  });
});
const SEE_MORE_4 = document.querySelectorAll(".see-more-4");
SEE_MORE_4.forEach((button) => {
  button.addEventListener("click", () => {
    dialogInstance.show(`
       <div class="dialog-header">
              <h1 class="dialog-title" id="jsdialog-title">Nova</h1>
          </div>
             <div class="dialog-body" id="jsdialog-body" bis_skin_checked="1">
        <h3 class="the-client">The Client</h3>
        <p class="the-client-word">
        Saudi Arabia, Nova's natural drinking water product is the only product of the first limited company in the field of healthy water bottling.
         Founded in 1973, the company has maintained its constant pursuit of innovation and has built on 50 years of experience in the bottled water industry.
        </p>
        <img
          src="assets/success-stories/inner-images/nova.svg"
          alt="nova image"
          class="dialog-img"
        />
        <div class="line"></div>
        <div class="dialog-content">
          <h2 class="heading-content">The Problem Statement</h2>
          <p class="pargraph-content">
          Nova had a manual order management system, which made the company 
          face several challenges such as late order deliveries,
           inaccurate financial data, and limited customer interaction.
          </p>
        </div>
        <div class="dialog-content">
          <h2 class="heading-content">Our Methodology</h2>
          <p class="pargraph-content">
     We first dove deep with the Nova team to understand the existing order management system and processes.
      This helped us build a customized solution that addressed delivery logistical challenges the client was facing, as well as dramatically improved their customers' experience"
          </p>
        </div>
        <div class="dialog-content">
          <h2 class="heading-content">The Solution</h2>
          <p class="pargraph-content">
     An automated order management system that included digital billing, invoicing, 
     real time tracking, GPS integration, feedback collection, personalized offers,
      automated reminders and notifications, an interactive dashboard for data analytics.
          </p>
        </div>
        <div class="dialog-content">
          <h2 class="heading-content">The Results</h2>
          <p class="pargraph-content">
        Delivery time was reduced by 30%, operational costs decreased by 20%, billing accuracy improved by 95%, and customer engagement increased by 40%.
          </p>
        </div>
          `);
  });
});