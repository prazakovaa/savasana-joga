window.onscroll = function() {
  if (window.innerWidth > 1080) {
    scrollFunction();
  }
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "0rem 4%";
  } else {
    document.getElementById("navbar").style.padding = "0.7rem 4%";
  }
}
