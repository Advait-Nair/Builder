const format = (tag, classes, content, properties) => {
    const element = document.createElement(tag);
    element.className = classes;
    element.innerHTML = content;
    element[properties.type] = properties.content;
    return element;
};

const DefaultUIPack = {
    header: (text, size) => {
        return format('div', 'DefaultUIPack-header', text, {type: 'style', content: `font-size: ${size || 2}rem`});
    }
};


export default DefaultUIPack;