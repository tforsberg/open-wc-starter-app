import { IBS_HTMLElement } from './IBS_HTMLElement';


class IBS_Copyright extends IBS_HTMLElement {

    constructor() {
        super();

        //this.name = "HelloWorld";

        // Attach a shadow root to the element.
        let shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = `
<p>&copy; @DateTime.Now.Year - Idealease Business Systems.
<span id="serverdb"></span>(DEV site)</p>`;

        console.log(this.myName());
        alert(this.myName());
    }

    static get observedAttributes() {
        return ["visible"];
    }

    static get template() {
        //if (!this._template) {
        //    this._template = thisImportDoc.querySelector("#");
        //}
        //return this._template;
    }

    connectedCallback() {
        console.log("ibs-copyright connected to page");
    }

    disconnectedCallback() {
        console.log("ibs-copyright disconnected from page");
    }

    adoptedCallback() {
        console.log("ibs-copyright adopted in page");
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log("ibs-copyright attr: " + name + " changed from '" + oldValue + "' to '" + newValue + "'");
    }

    //** Expose the visible attribute as getter and setter **//
    //get visible() {
    //    return this.hasAttribute('visible');
    //}

    //set visible(val) {
    //    if (val) {
    //        this.setAttribute('visible', '');
    //    } else {
    //        this.removeAttribute('visible');
    //    }

    //}

}

//ShadyCSS.prepareTemplate(MessageBanner.template, "message-banner");

//customElements.define("message-banner", MessageBanner);



window.customElements.define('ibs-copyright', IBS_Copyright);
