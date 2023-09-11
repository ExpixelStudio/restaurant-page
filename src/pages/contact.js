function createContact() {
    const contact = document.createElement('div');
    contact.classList.add('contactPage');

    const heroImg = new Image();
    heroImg.src = 'assets/imgs/hero.jpg';
    /* home.appendChild(heroImg) */

    contact.appendChild(createParagraph('contact me NOW page'));
    return contact;
};

function createParagraph(text){
    const para = document.createElement('p');
    para.textContent = text;
    return para;
}

export default createContact;