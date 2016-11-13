console.log('Loaded!');

//change the main-text div text
var element = document.getElementById('main-text');
element.innerHTML = "New Value!";

//move the image madi
var img = document.getElementById('madi');
<<<<<<< HEAD
var marginLeft = 0;
function moveRight() {
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px';
};
img.onclick = function() {
    var interval = setInterval(moveRight, 100);
}
=======
img.onclick = function() {
    img.style.marginLeft = '100px';
};
>>>>>>> acb892143f21cf0d9aaaa287a49b2c6b238e94fd
