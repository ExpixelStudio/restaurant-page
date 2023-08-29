const createHeader = (() => {
    const header = document.createElement('header');
    header.id = 'header';

    const logoImg = new Image(120,120);
    logoImg.src = 'assets/imgs/logo.png';
    logoImg.alt = 'logo_img';

    const resName = document.createElement('h2');
    resName.textContent='Lickrish Eater';

    header.appendChild(logoImg);
    header.appendChild(resName);
    /* header.appendChild(createNav()); */
    
    return header;
})();

const createNav =(() => {
    const navList = document.createElement('ul');
    const navEl = document.createElement('li');
    /* homeBtn.classList.add('nav-btn'); */

})();

export default createHeader;