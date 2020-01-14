const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);
//nav here
const anchor = document.querySelectorAll("a");
anchor[0].textContent = siteContent.nav["nav-item-1"];
anchor[1].textContent = siteContent.nav["nav-item-2"];
anchor[2].textContent = siteContent.nav["nav-item-3"];
anchor[3].textContent = siteContent.nav["nav-item-4"];
anchor[4].textContent = siteContent.nav["nav-item-5"];
anchor[5].textContent = siteContent.nav["nav-item-6"];

//call to action here
const ctaImg = document.querySelector("#cta-img");
ctaImg.src = siteContent.cta["img-src"];

const ctaH1Text = document.querySelector(".cta-text h1");
ctaH1Text.textContent = siteContent.cta.h1;

const ctaButtonText = document.querySelector(".cta-text button");
ctaButtonText.textContent = siteContent.cta.button;

//feature about section here
const faH4Section = document.querySelectorAll(".top-content .text-content h4");
faH4Section[0].textContent = siteContent["main-content"]["features-h4"];
faH4Section[1].textContent = siteContent["main-content"]["about-h4"];

const faPSection = document.querySelectorAll(".top-content .text-content p");
faPSection[0].textContent = siteContent["main-content"]["features-content"];
faPSection[1].textContent = siteContent["main-content"]["about-content"];

const faImg = document.querySelector("#middle-img");
faImg.src = siteContent["main-content"]["middle-img-src"];

//services product vision section here
const spvH4Section = document.querySelectorAll(
  ".bottom-content .text-content h4"
);
spvH4Section[0].textContent = siteContent["main-content"]["services-h4"];
spvH4Section[1].textContent = siteContent["main-content"]["product-h4"];
spvH4Section[2].textContent = siteContent["main-content"]["vision-h4"];

const spvPSection = document.querySelectorAll(
  ".bottom-content .text-content p"
);
spvPSection[0].textContent = siteContent["main-content"]["services-content"];
spvPSection[1].textContent = siteContent["main-content"]["product-content"];
spvPSection[2].textContent = siteContent["main-content"]["vision-content"];

//contact here
const cH4Text = document.querySelector(".contact h4");
cH4Text.textContent = siteContent.contact["contact-h4"];

const cPText = document.querySelectorAll(".contact p");
cPText[0].textContent = siteContent.contact.address;
cPText[1].textContent = siteContent.contact.phone;
cPText[2].textContent = siteContent.contact.email;

//footer here
const footerPText = document.querySelector("footer p");
footerPText.textContent = siteContent.footer.copyright;

//prepend here
const theNav = document.querySelector("nav");

const newAnchorFront = document.createElement("a");
newAnchorFront.textContent = "Sup!";
newAnchorFront.setAttribute("href", "#");

theNav.prepend(newAnchorFront);

//append here
const newAnchorBack = document.createElement("a");
newAnchorBack.textContent = "Dope!";
newAnchorBack.setAttribute("href", "#");

theNav.append(newAnchorBack);

//task 3 here
const allNavText = document.querySelectorAll("a");

allNavText.forEach(function(colorChange) {
  colorChange.style.color = "green";
});
