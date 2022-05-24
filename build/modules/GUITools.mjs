class GUI {
    constructor() {

    }

    box (dimensionX,dimensionY) {
        const box = document.createElement("div");
        box.outerHTML = `
        <div class="GUI_OBJECT">
            <div class="bar flex flex-center">
                <div class="close">
                <img class="close-img" src="./modules/cross.png"/>
                </div>
                <div class="title">
                Options
                </div>
            </div>
            <div class="content">

            </div>
        </div>
        `;
        box.style.width = `${dimensionX}rem`;
        box.style.height = dimensionY ? `${dimensionY}rem` : 'auto';
    }
}