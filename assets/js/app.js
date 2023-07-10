  // fixed navbar

window.onscroll = function () {
    const header = document.querySelector("#nav");
    const fixNav = header.offsetTop;
    const toTop = document.querySelector("#to-top");
  
    if (window.scrollY > fixNav) {
      header.classList.add("navbar-fixed");
      toTop.classList.remove("hidden");
      toTop.classList.add("block");
    } else {
      header.classList.remove("navbar-fixed");
      toTop.classList.add("hidden");
      toTop.classList.remove("block");
    }
};

const thisYear  = document.querySelector('#year');
const useYear = new Date().getFullYear();
thisYear.innerHTML = useYear;