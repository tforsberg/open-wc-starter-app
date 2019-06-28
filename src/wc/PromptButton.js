

class PromptButton extends HTMLElement {
    constructor() {
        super();
        // Attach a shadow root to the element.
        let shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = `<input id="lookup_entity2" type="image" src="/Images/lookup3.jpg" style="width:40px;" />`;
    }
}

customElements.define('prompt-button', PromptButton);

