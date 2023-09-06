function toggleOutline() {
    let domStyle = document.getElementById('styleOutline');
    if (domStyle) {
        document.body.removeChild(domStyle);
        return;
    }

    domStyle = document.createElement("style");
    domStyle.setAttribute('id', 'styleOutline');
    domStyle.append(`
        * {
            outline: 1px solid red;
            outlineOffsset: -1px;
        }
    `);
    document.body.appendChild(domStyle);
};

function toggleTracing() {
    console.log('toggleTracing');
    let domStyle = document.getElementById('styleTracing');
    let template = document.getElementById('template');

    if (template && window.getComputedStyle(template).opacity == "0.3") {
        template.style.opacity = 1.0;
        return;
    }

    if (domStyle || template) {
        document.body.removeChild(domStyle);
        document.body.removeChild(template);
        return;
    }

    domStyle = document.createElement("style");
    domStyle.setAttribute('id', 'styleTracing');
    domStyle.append(`
        #template {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            opacity: 0.3;
            z-index: 999;
        }
    `);
    document.body.appendChild(domStyle);

    template = document.createElement("img")
    template.setAttribute('id', 'template')
    template.setAttribute('src', './Template_3.png')
    document.body.insertBefore(template, document.body.firstChild);
};

window.addEventListener("keydown", (event) => {
    switch (event.key) {
        case 'x':
            toggleOutline();
            break;
        case 'z':
            toggleTracing();
            break;
    }
}, true,);

function showCaption(display) {
    document.querySelectorAll(".carousel-caption").forEach(element => {
       element.style.opacity = display ? 1 : 0; 
    });
}
