
	// Function to create an element with given tag name and optional classes
function createElement(tagName, className) {
    const element = document.createElement(tagName);
    if (className) {
        element.className = className;
    }
    return element;
}

class LoadingBar {
    constructor(options) {
        this.domElement = createElement('div');
        Object.assign(this.domElement.style, {
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            background: '#000',
            opacity: '0.7',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: '1111'
        });

        const barBase = createElement('div');
        Object.assign(barBase.style, {
            background: '#aaa',
            width: '50%',
            minWidth: '250px',
            borderRadius: '10px',
            height: '15px'
        });

        const bar = createElement('div');
        Object.assign(bar.style, {
            background: '#22a',
            borderRadius: '10px',
            height: '100%',
            width: '0'
        });

        barBase.appendChild(bar);
        this.domElement.appendChild(barBase);
        this.progressBar = bar;

        document.body.appendChild(this.domElement);
    }

    set progress(delta) {
        const percent = delta * 100;
        this.progressBar.style.width = `${percent}%`;
    }

    set visible(value) {
        this.domElement.style.display = value ? 'flex' : 'none';
    }
}

export { LoadingBar };
