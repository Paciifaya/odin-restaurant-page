export const appendContact = () => {
    const paraEl = document.createElement('p');
    paraEl.innerHTML = 'Monday - Sunday <br> 10am - 11pm <br> Lekki, Lagos <br> awesome-tea@lagos.com'

    const titleBoxEl = document.createElement('h3');
    titleBoxEl.innerHTML = 'Find us here:';

    const contactBoxContainerEl = document.createElement('div');
    contactBoxContainerEl.classList = 'contact-cell-info';

    const titleContactEl = document.createElement('h2');
    titleContactEl.innerHTML = 'It\'s tea <br> time';

    const titleContainerEl = document.createElement('div');
    titleContainerEl.classList = 'contact-cell-title';

    const gridContactContainer = document.createElement('div');
    gridContactContainer.classList = 'grid-container-contact'

    contactBoxContainerEl.appendChild(titleBoxEl);
    contactBoxContainerEl.appendChild(paraEl);
    titleContainerEl.appendChild(titleContactEl);
    gridContactContainer.appendChild(titleContainerEl);
    gridContactContainer.appendChild(contactBoxContainerEl);


    return gridContactContainer;

}