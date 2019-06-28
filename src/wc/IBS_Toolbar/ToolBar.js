
import {IBS_HTMLElement } from '../IBS_HTMLElement.js'

export class IbsToolbar extends IBS_HTMLElement {
    constructor() {
        super();
        // Attach a shadow root to the element.
        let shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = `<slot></slot>`;
    }
}

customElements.define('ibs-toolbar', IbsToolbar);

