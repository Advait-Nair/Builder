
// *--- IMPORTANT ---* - How Enabl/Disable Dev Support
// Note - Devmode is by default enabled.

// In order to disable DevMode, you have to change the value of 'ignore' in the CoreJS/dev/ErrorHandler.js file to true. This disables error handling. Vice-versa, set it to false to enable dev mode. This is the same procedure for other files in the 'dev' folder.


// Start Import Statements
import stylerTools from '../modules/styler.mjs'

stylerTools.diagnostics({
	location: 'build/JS/main.js',
})
stylerTools.newListStyle([
	{
		name: 'box',
		css: 'background:#444; color:#eee; border-radius: 0.6rem;padding: 1rem;',
	},
	{
		name: 'box-set-container',
		css: 'background:#eee; color:#666; border-radius: 0.6rem;padding: 1rem;',
	},
	{
		name: 'box-set-container-new',
		css: 'background:#eee; color:#666; border-radius: 0.6rem;padding: 1rem;',
		// css: undefined,
	},
]);
console.log(stylerTools)
stylerTools.autoApplyAll();


// Using UITools (Test)
// Deprecating GUITools for a more clean approach, with UITools.

import UI from '../modules/UI/UITools.js';
import DefaultUIPack from '../modules/UI/DefaultUIPack.js';

// Get UI contents we need
const {header} = DefaultUIPack;

const UITools = new UI();


const mainUI_Object = {
	windowTitle: 'New Window',
	windowContent: [
		header('New...', 3)
	],
	windowDimensions: {width: 30, height: 90, mode: '%'},
}

console.log(mainUI_Object)
UITools.boxUI(mainUI_Object);