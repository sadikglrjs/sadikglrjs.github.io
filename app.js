function unfade(element) {
    var op = 0.01;  // initial opacity
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.3;
    }, 100);
}

setTimeout(async () => {
    const loader = document.getElementsByClassName("loader");
    const base = document.getElementsByClassName("base");

    await loader[0].classList.add('hidden');
    await unfade(base[0]);
    await base[0].classList.remove('hidden');
}, 2000);



