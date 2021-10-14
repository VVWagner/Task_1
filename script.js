let offset = 0;
const imgLine = document.querySelector('.imgLine');

document.querySelector('.next').addEventListener('click', function(){
    offset = offset + 475;
    if (offset > 475) {
        offset = 0;
    }
    imgLine.style.left = -offset + 'px';
});

document.querySelector('.previous').addEventListener('click', function () {
    offset = offset - 475;
    if (offset < 0) {
        offset = 475;
    }
    imgLine.style.left = -offset + 'px';
});