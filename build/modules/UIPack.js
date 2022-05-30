const format = (tag,classes,content) => {
    const element = document.createElement(tag);
    element.className = classes;
    element.innerHTML = content;
    return element;
};

const UIPack = {
    header: (text, size) => {
        
    }
};


export default UIPack;