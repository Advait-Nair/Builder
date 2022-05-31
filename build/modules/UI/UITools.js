class UI {
    constructor() {
        
    }

    boxUI (UI_Object) {

        // Using function to handle what will go in content div.
        // Here, due to the fact that passing this in as a callback doesn't work,
        // we need to use a variable to store the content.
        function contentCallback (contentElement) {
            UI_Object.windowContent.forEach(element => {
                contentElement.append(element);
            })
            return contentElement;
        }

        // Construct window
        const boxWindow = this.constructBoxWindow(UI_Object.windowDimensions.width, UI_Object.windowDimensions.height,UI_Object.windowDimensions.mode, UI_Object.windowTitle, contentCallback);
        console.log(boxWindow)

        // Append to body

        document.body.append(boxWindow);

    }
    
    constructBoxWindow (width, height, mode, windowTitle, contentCallback) {
        console.log(width, height, mode, windowTitle)

        // Get dimension mode
        const dimensionMode = mode || 'px';


        // Main div element
        const ui = document.createElement("div");
        ui.classList.add("GUI_OBJECT")

        // Bar
        const bar = document.createElement("div");
        bar.classList.add("bar");
        bar.classList.add("flex");
        bar.classList.add("flex-center");

        // Close button
        const close = document.createElement("div");
        close.classList.add("close");
        close.onclick = () => {
            return this.remove();
        }

        // Close image
        const closeImg = document.createElement("img");
        closeImg.classList.add("close-img");
        closeImg.src = "./modules/UI/assets/cross.png";


        
        // Title
        const title = document.createElement("div");
        title.classList.add("title");
        title.innerHTML = windowTitle || 'NO DEFINED TITLE';

        // Content
        let content = document.createElement("div");
        content.classList.add("content");


        content = contentCallback(content) || 'NO DEFINED CONTENT';



        // Append elements
        bar.append(close);
        close.append(closeImg);
        ui.append(bar);
        ui.append(title);
        ui.append(content);

        // Set width and height
        ui.style.width = `${width}${dimensionMode}`;
        ui.style.height = height ? `${height}${dimensionMode}` : 'auto';

        // Look for invalid data
        if(!title)
        ErrorHandler.throwNewErrorNotification({
            element: '.GUI_OBJECT:last-of-type .title',
            message: 'No title has been defined for this GUI_Object.',
            footer: `at build/modules/GUITools.mjs, GUITools.box()`,
        });
        if(!content)
        ErrorHandler.throwNewErrorNotification({
            element: '.GUI_OBJECT:last-of-type .content',
            message: 'No title has been defined for this GUI_Object.',
            footer: `at build/modules/GUITools.mjs, GUITools.box()`,
        });

        return ui;
        
    }

}

export default UI;