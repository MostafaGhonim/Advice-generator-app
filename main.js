let buton = document.querySelector('.btn');
let textId = document.querySelector('.adviceId')
let adviceText = document.querySelector('.adviceQuite');
function getAdive() {
    fetch('	https://api.adviceslip.com/advice').then((e) => {
        let data = e.json();
        return data;
    }).then((data) => {
        let advice = data["slip"].advice;
        let adviceId = data["slip"].id;
        textId.style.transtion = "0.3s"
        adviceText.style.transtion = "0.3s"
        textId.textContent = `Advice# ${adviceId}`
        adviceText.textContent = advice;
    })
} 
getAdive();

buton.onclick = function () {
    getAdive();
}