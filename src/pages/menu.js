/* const createMenu = (() => {
    const menu = document.createElement('div');
    menu.classList.add('menuPage');

    const heroImg = new Image();
    heroImg.src = 'assets/imgs/hero.jpg';
    home.appendChild(heroImg)

    menu.appendChild(createParagraph('Menu page'));
    return menu;
})();
 */
function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menuPage');

    const heroImg = new Image();
    heroImg.src = 'assets/imgs/hero.jpg';
    /* home.appendChild(heroImg) */

    menu.appendChild(createParagraph('Menu page'));
    return menu;
};

function createParagraph(text){
    const para = document.createElement('p');
    para.textContent = text;
    return para;
}

export default createMenu;