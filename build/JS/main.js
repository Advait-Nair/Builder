
// *--- IMPORTANT ---* - How Enabl/Disable Dev Support
// Note - Devmode is by default enabled.

// In order to disable DevMode, you have to change the value of 'ignore' in the CoreJS/dev/ErrorHandler.js file to true. This disables error handling. Vice-versa, set it to false to enable dev mode. This is the same procedure for other files in the 'dev' folder.


// Import Statements
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
		css: null,
	},
]);
console.log(stylerTools)
stylerTools.autoApplyAll();
// stylerTools.applyStyle('.box','box')
// stylerTools.applyStyle('.box-set-container', 'box-set-container')
// stylerTools.applyStyle('.strayBox');