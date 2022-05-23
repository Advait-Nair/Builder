// * What ErrorObject can contain -
//*  errorObject = {
//*      Message,
//*      Element,
//*      Footer,
//*      CustomCSS,
//*  }

import UT from '../UT.js'
const ErrorHandler = {
    // Toggle devmode. True disables, false enables.
    ignore: false,
    // ----




    throwNewErrorNotification: (errorObject) => {
        if(ErrorHandler.ignore) return;
        const uniqueElementErrorId = new UT().spit(10);
        const defaultErrorCSS = `
        @keyframes ErrorCSS {
            0%{
                background: #f33;
                box-shadow: 0 0 0 0rem #f55;
                color:#fff;
            }
            50% {
                background: #f55;
                box-shadow: 0 0 0 0.5rem rgba(255,85,85, 0.5);
                color:#fff;
            }
            100% {
                background: #f33;
                box-shadow: 0 0 0 0.7rem rgba(255,85,85, 0);
                color:#fff;
            }
        }
        .ElementInvolvedInErrorThrown_${uniqueElementErrorId || ''} {
            animation: ErrorCSS 2s linear infinite forwards;
            border-radius: 0.34rem;
            padding: 0 1rem;
            position: relative;
        }
        .ElementInvolvedInErrorThrown_${uniqueElementErrorId || ''}:before {
            content: "${
				`${errorObject.message.toString()} [${errorObject.element}]` ||
				'This object was flagged as being part of an error.'
			}";
            z-index: 100000000;
            background: rgba(238,238,238, 0.88);
            border: #aaa solid 1px;
            border-radius: 0.4rem;
            color: #777;
            padding: 0.1rem 0.4rem;
            position: absolute;
            top: 100%;
            left: 0;
            backdrop-filter: blur(13px);
            max-width: 47%;
        }
        .ElementInvolvedInErrorThrown_${uniqueElementErrorId || ''}:after {
            content: "${
				errorObject.footer.toString() ||
				'This object was flagged as being part of an error.'
			}";
            z-index: 100000000;
            background: rgba(238,238,238, 0.88);
            border: #aaa solid 1px;
            border-radius: 0.4rem;
            color: #777;
            padding: 0.1rem 0.4rem;
            position: absolute;
            top: 100%;
            right: 0;
            backdrop-filter: blur(13px);
            max-width: 47%;
        }
        
        `;
        const CSStoInject = errorObject.CustomCSS || defaultErrorCSS;

        if (
			errorObject.element &&
			!document
				.querySelector(errorObject.element)
				.classList.contains('ElementInvolvedInErrorThrown')
		) {
			if (!document.querySelector('.ErrorHandlerCSSInjection')) {
				const CSSStyleElement = document.createElement('style');

				CSSStyleElement.classList.add('ErrorHandlerCSSInjection');
				CSSStyleElement.innerHTML = CSStoInject;

				document.head.appendChild(CSSStyleElement);
			} else {
				document.querySelector('.ErrorHandlerCSSInjection').innerHTML +=
					CSStoInject;
                }
                
                document
				.querySelector(errorObject.element)
				.classList.add(
                    `ElementInvolvedInErrorThrown_${
                        uniqueElementErrorId || ''
					}`,
					'ElementInvolvedInErrorThrown'
                    );
                
                
        } else if (
            document
            .querySelector(errorObject.element)
            .classList.contains('ElementInvolvedInErrorThrown'))
        {
            document.querySelector(errorObject.element).className = `ElementInvolvedInErrorThrown_${uniqueElementErrorId || ''} ElementInvolvedInErrorThrown ${errorObject.element.replace('.','')}`;
            console.log(CSStoInject);
            document.querySelector('.ErrorHandlerCSSInjection').innerHTML +=
                CSStoInject;
        }

    }
}


export default ErrorHandler;