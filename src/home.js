export const appendHome = () => {
    const containerElement = document.createElement('div');
    containerElement.classList = 'container';

    const titleContainerElement = document.createElement('div');
    titleContainerElement.classList = 'title-container';

    const titleElement = document.createElement('h1');
    titleElement.innerHTML = "The tea you'll <br> never spill";
    titleElement.classList = 'title';

    const subTitleElement = document.createElement('h3');
    subTitleElement.innerHTML = '100% ORGANIC & FAIR TRADE';

    const imageContainerElement = document.createElement('div');
    imageContainerElement.classList = 'img-container';

    const imageElement = document.createElement('img');
    imageElement.setAttribute('src', '../img/tea.jpg');
    imageElement.setAttribute('alt', 'tea cup');

    titleContainerElement.appendChild(subTitleElement);
    titleContainerElement.appendChild(titleElement);
    containerElement.appendChild(titleContainerElement);
    imageContainerElement.appendChild(imageElement);
    containerElement.appendChild(imageContainerElement);


    return containerElement;

}