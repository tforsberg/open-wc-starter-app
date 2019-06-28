
import {IBS_HTMLElement } from '../IBS_HTMLElement.js'

export class IbsToolbarButton extends IBS_HTMLElement
{

    constructor()
    {
        super();
        // Attach a shadow root to the element.
        let shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML =
        `<input id="tbb" type="image" style="width:30px;" ></input>
        <style>
            #tbb {
                background-color: yellow;
                border-style: solid;
            }

        </style>`;

        let _input;
    }

    static get observedAttributes()
    {
        return ['action', 'src'];
    }

    connectedCallback()
    {
        //this._input = this.shadowRoot.querySelector("#tbb");
        console.log("connectedCallback");
        //console.log(this._input);
    }

    disconnectedCallback()
    {
        console.log("disconnectedCallback");
    }

    attributeChangedCallback(name, oldValue, newValue)
    {
        switch (name) {
            case 'action':
                console.log(`Action changed from ${oldValue} to ${newValue}`);
                this._applyImage(newValue);
            case 'src':
                console.log(`src: ${newValue}!`);
                break;
        }
    }

    _applyImage(action) {
        console.log("_applyImage");
        //console.log(this._input);

        //const _input = this._input;
        const _input = this.shadowRoot.querySelector("#tbb");
        switch (action)
        {
            case 'find_first':
                console.log('ff');
                _input.setAttribute('src', './images/firstArrow.png');
                break;
            case 'find_prev':
                console.log('fp');
                _input.setAttribute('src', './images/preArrow.png');
                break;
            case 'find_equal':
                console.log('fe');
                _input.setAttribute('src', './images/find.png');
                break;
            case 'find_next':
                console.log('fn');
                _input.setAttribute('src', './images/nextarrow.png');
                break;
            case 'find_last':
                console.log('fl');
                _input.setAttribute('src', './images/lastArrow.png');
                break;
            case 'clear':
                console.log('c');
                _input.setAttribute('src', './images/plus.png');
                break;
            case 'save':
                console.log('s');
                _input.setAttribute('src', './images/Save-icon.png');
                break;
            case 'prompt':
                console.log('p');
                _input.setAttribute('src', './images/lookup3.jpg');
                break;
        }
    }
}

customElements.define('ibs-toolbar-button', IbsToolbarButton);

// let hold = `
//     <input id="first_rec" type="image" src="./images/firstArrow.png" style="width:30px;" />
//     <input id="pre_rec" type="image" src="./images/preArrow.png" style="width:30px;" />
//     <input id="next_rec" type="image" src="./images/nextarrow.png" style="width:30px;" />
//     <input id="last_rec" type="image" src="./images/lastArrow.png" style="width:30px;" />
//     <input id="add_entity" type="image" src="./images/plus.png" style="width:30px; opacity:1;" />
//     <input id="saveall" type="image" src="./images/Save-icon.png" style="width:30px; opacity:1;" />
// `;
