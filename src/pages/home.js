const createHome = (() => {
    const home = document.createElement('div');
    home.classList.add('homePage');

    const heroImg = new Image();
    heroImg.src = 'assets/imgs/hero.jpg';
    /* home.appendChild(heroImg) */

    home.appendChild(createParagraph('Welcome to Lickrish Eater'));
    return home;
})();

function createParagraph(text){
    const para = document.createElement('p');
    para.textContent = text;
    return para;
}

/* function loadHome() {
    const main = document.getElementById('content');
    main.textContent = '';
    main.appendChild(createHome());
} */

export default createHome;