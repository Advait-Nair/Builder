import stylerTools from "../styler.mjs";

stylerTools.applyRawCSS(`
.GUI_OBJECT {
    background: rgba(247, 247, 247, 0.914);
    backdrop-filter: blur(12px);
    position: absolute;
    top: 10%;
    left: 10%;
    min-width: 9rem;
    min-height: 9rem;
    border-radius: 1rem;
    box-shadow: 0 0 29px 12px rgba(0, 0, 0, 0.097);
    z-index:9999999999;
    color: #666;
    transition: all ease-in-out 0.3s;
}
.GUI_OBJECT .content {
    padding: 1rem;
}
.GUI_OBJECT .bar {
    padding: 1rem;
    height: 1.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

.GUI_OBJECT .title {
    text-align: center;
    width: 100%;
    font-size: 1.3rem;
    user-select: none;
}
.GUI_OBJECT .close {
    text-align: left;
    height: 1.3rem;
    width: 1.3rem;
    padding: 0.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.3rem;
    user-select: none;
    transition: all 200ms ease-in-out;
}
.GUI_OBJECT .close:hover {
    background: rgba(0, 0, 0, 0.129);
    cursor: pointer;
}

.GUI_OBJECT .close-img {
    height: 100%;
    background: no-repeat center center;
}

.full-x {
    width: 100%;
}
.full-y {
    height: 100%;
}

.GUI_text, .GUI_textbox, .GUI_title, .GUI_textinput {
    font-size: 1.3rem;
    color: #777;
    padding: 1rem;
}
`);

export default true;