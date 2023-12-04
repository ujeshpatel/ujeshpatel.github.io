window.onload = function() {
    var contactform = document.getElementById('contact-form');
    contactform.setAttribute('action', "https://formspree.io/f/mayzvnoo");
}

let scrollToBottom = document.querySelector("#scroll-to-bottom")
let pageBottom = document.querySelector("#page-bottom")

scrollToBottom.addEventListener("click", function() {
  pageBottom.scrollIntoView()
})
