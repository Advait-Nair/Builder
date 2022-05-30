import stylerTools from "./styler.mjs";
import UT from "../CoreJS/UT.js";
import ErrorHandler from "../CoreJS/dev/ErrorHandler.js";
class GUITools {
    constructor() {

    }
    box (width,height, GUI_Object) {
        const box = document.createElement("div");
        box.classList.add("GUI_OBJECT")

        // Get the converted HTML from GUI_ObjectToHTML();
        const guiData = this.UIObject(GUI_Object);
        // Get title and content data
        const title = guiData.title;
        const content = guiData.content;


        box.innerHTML = `
        <div class="bar flex flex-center">
            <div class="close" onclick="return this.parentNode.parentNode.remove()">
                <img class="close-img" src="./modules/cross.png"/>
            </div>
            <div class="title">
                ${title || 'NO DEFINED TITLE'}
            </div>
        </div>

        <div class="content">
            ${content || 'NO DEFINED CONTENT'}
        </div>
        `;

        box.style.width = `${width}rem`;
        box.style.height = height ? `${height}rem` : 'auto';

        stylerTools.applyRawCSS(`
        IMPORTANT: INSERT MINIFIED CSS HERE
        `);
        console.log(box);
        document.body.append(box);


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

    }

    UIObject () {return {title:'Title',content:'12'};}
}



/* 
GUI_Object
*/


export default GUITools;