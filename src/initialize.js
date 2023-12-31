import createHome from "./pages/home";
import createMenu from "./pages/menu";
import createContact from "./pages/contact";

const createHeader = (() => {
    const header = document.createElement('header');
    header.id = 'header';

    const div = document.createElement('div');
    div.classList.add('logo-div');
    

    const logoImg = new Image(80,80);
    logoImg.src = 'assets/imgs/logo.png';
    logoImg.alt = 'logo_img';

    const resName = document.createElement('h2');
    resName.textContent='Lickrish Eater';

    div.appendChild(logoImg);
    div.appendChild(resName);

    /* header.appendChild(logoImg);
    header.appendChild(resName); */

    header.appendChild(div);
    header.appendChild(createNav());
    /* header.appendChild(createFooter()); */
    
    return header;
})();


function createNav() {
    
    const nav = document.createElement('nav');
    const main = document.getElementById('main');

    const homeBtn = document.createElement('button');
    homeBtn.textContent = 'Home';
    homeBtn.classList.add('nav-btn');
    homeBtn.addEventListener('click' , createHome); 

    const menuBtn = document.createElement('button');
    menuBtn.textContent = 'Menu';
    menuBtn.classList.add('nav-btn');
    menuBtn.addEventListener('click' , createMenu);

   

    const contactBtn = document.createElement('button');
    contactBtn.textContent='Contact';
    contactBtn.classList.add('nav-btn');
    contactBtn.addEventListener('click' , createContact);
   
    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);

    return nav;

};

   export function createMain(){
    
    const main = document.createElement('main');
    const content = document.getElementById('content');
    main.classList.add('main');
    main.setAttribute('id','main');

    /* content.appendChild(main); */
    /* main.appendChild(loadPage); */
    return main;
};

    export function createFooter(){
    const footer = document.createElement('footer');
    footer.setAttribute('id','footer');

    const copyright = document.createElement("p");
    copyright.textContent = `Copyright © ${new Date().getFullYear()} ExpixelStudio`;

    const gitHub = document.createElement("a");
    gitHub.href = "https://github.com/ExpixelStudio";

    footer.appendChild(copyright);
    footer.appendChild(gitHub);

    return footer;
};



/* function loadMainPage(loadPage) {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(loadPage);
} */

/* createMain(); */
export default createHeader;