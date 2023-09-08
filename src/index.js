import loadHome from "./pages/home";
import createMenu from "./pages/menu";
import createHeader from "./initialize";
import { createMain,createFooter } from "./initialize";
console.log("Is it working?");

function loadComponents(){
    const content = document.getElementById('content');
    const main = document.getElementById('main');

    document.addEventListener('DOMContentLoaded', function() {
        // Your code here, including the createNav function
        content.appendChild(createHeader);
        content.appendChild(createMain());
        content.appendChild(createFooter());
        
        /* content.appendChild(createMenu); */
        
    });
    /* content.appendChild(createHeader); */
    /* const main = createMain(); */
    /* content.appendChild(createMain()); */
}

loadComponents();

/* const main = document.getElementById('content');

main.appendChild(createHome); */