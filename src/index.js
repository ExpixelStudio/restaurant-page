import createHome from "./pages/home";
import createHeader from "./initialize";
console.log("Is it working?");

function loadComponents(){
    const main = document.getElementById('content');

    main.appendChild(createHeader);
    main.appendChild(createHome);
}

loadComponents();

/* const main = document.getElementById('content');

main.appendChild(createHome); */