import createMenu from "./menu";
import createContact from "./contact";

const createHome = (() => {
    /* const home = document.createElement('div');
    home.classList.add('homePage'); */

    
    /*
    const heroImg = new Image();
    heroImg.src = 'assets/imgs/hero.jpg';
    home.appendChild(heroImg);

    h/*ome.appendChild(createParagraph('Welcome to Lickrish Eater Home page')); */

    const home = () => {
        const main = document.getElementById('main');

        
        
        const homeHTML =`
        <div class='homepage' id='homepage'>
            <h1>Welcome To The Home Of The Lickrish Eater</h1>
            <h3>Feeling Lickrish?</h3>
            <button id='loadMenuBtn'>See Menu</button>
        </div>
    `;

    main.innerHTML = homeHTML;

    const loadMenuBtn = document.getElementById('loadMenuBtn');
        loadMenuBtn.addEventListener('click', createMenu);
    
    } 
    return home;
   

})();


const loadPage= (page) => {
     page = createMenu;
     return page;
};

/* loadPage(); */

function createParagraph(text){
    const para = document.createElement('p');
    para.textContent = text;
    return para;
}

/* function loadHome() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createHome);
} */

export default createHome;