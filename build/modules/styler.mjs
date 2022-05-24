import ErrorHandler from '../CoreJS/dev/ErrorHandler.js'
let diagnosticsBaseObject = undefined;
const stylerTools = {
    styles: {

    },

    newStyle: (name, css) => {
        if (stylerTools.styles[name]) return

        stylerTools.styles[name] = {isStylerToolSheet:true,css};
        return true;
    },
    newListStyle: cssList => {
        cssList.forEach(cssListObject => {
            stylerTools.newStyle(cssListObject.name, cssListObject.css);
        })
    },
    grabStyle: name => {
        if(stylerTools.styles[name]) return stylerTools.styles[name];
        return undefined;
    },
    diagnostics: diagnosticsObject => {
        diagnosticsBaseObject = diagnosticsObject;
    },

    applyStyle: (selector, style) => {
        const storedStyle = stylerTools.grabStyle(style)
        let stylingToInject = storedStyle
			? storedStyle.css
			: style ||
			  ErrorHandler.throwNewErrorNotification({
					element: selector,
					message:
						'An empty CSS style has been passed on to this element.',
                    footer:
                    `at build/modules/styler.mjs, stylerTools.applyStyle(), called at ${diagnosticsBaseObject.location || 'unknown'}`,
					
			  })

            if(stylingToInject === undefined) return;
        document.querySelectorAll(selector).forEach(element => {
            element.style.cssText = stylingToInject
        })
    },

    autoApplyAll: () => {
        Object.keys(stylerTools.styles).forEach(styleName => {
            stylerTools.applyStyle(`.${styleName}`, stylerTools.styles[styleName].css)
        })
    },

    applyRawCSS: CSS => {
        if(!document.querySelector('style.StylerCustomCSS')) {
            const styleElement = document.createElement('style');
            styleElement.innerHTML = CSS;
            document.head.append(styleElement);
        } else {
            const styleElement = document.querySelector(
				'style.StylerCustomCSS'
			);
            styleElement.innerHTML += CSS;
        }
    }
}

export default stylerTools;
