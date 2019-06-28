
import {IBS_HTMLElement } from './IBS_HTMLElement.js'

export class HelloWorld extends HTMLElement {

    constructor() {
        super();

        this.name = "HelloWorld";

        // Attach a shadow root to the element.
        let shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = `<p>Hello World!!!</p>`;

        //console.log(this.myName());
        //alert(this.myName());
    }

    static get observedAttributes() {
        return ["visible"];
    }

    // static get template() {
    //     if (!this._template) {
    //         this._template = thisImportDoc.querySelector("#message-banner-tmpl");
    //     }
    //     return this._template;
    // }

    connectedCallback() {
        console.log("hello-world connected to page");
    }

    disconnectedCallback() {
        console.log("hello-world disconnected from page");
    }

    adoptedCallback() {
        console.log("hello-world adopted in page");
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log("hello-world attr: " + name + " changed from '" + oldValue + "' to '" + newValue + "'");
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



customElements.define('hello-world', HelloWorld);

//export HelloWorld;
