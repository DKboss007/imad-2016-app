console.log('Loaded!');

//change the main-text div text
var element = document.getElementById('main-text');
element.innerHTML = "New Value!";

//move the image madi
var img = document.getElementById('madi');
img.onClick = function() {
    img.style.marginLeft = '100px';
};