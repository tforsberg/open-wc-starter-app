
import {IBS_HTMLElement } from './IBS_HTMLElement.js'

export class IbsView extends HTMLElement {

    constructor() {
        super();

        this.Name = "ibs-view";

        // Attach a shadow root to the element.
        let shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = `
        <div class="ibsview no-debug">
            <p>IBS View Works!!!</p>
            <slot></slot>
        </div>
        <style>
            .ibsview {
                padding-top: 5px;
                padding-right: 5px;
                padding-bottom: 5px;
                padding-left: 10px;
                //border: 3px solid black;
                margin-top: 10px;
                margin-bottom: 10px;
                margin-right: 5px;
                margin-left: 3px;
                background-color: lightgreen;
                height: 80%;
                flex-grow : 1;
                          }
            .ibsview.debug {
                border-style: solid;
            }
        </style>
        `;

        this._shadowRoot = shadowRoot;

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
        //super.debugMessage("ZZZ: connected to page");
        console.log("ibs-view connected to page");
    }

    disconnectedCallback() {
        console.log("ibs-view disconnected from page");
    }

    adoptedCallback() {
        console.log("ibs-view adopted in page");
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log("ibs-view attr: " + name + " changed from '" + oldValue + "' to '" + newValue + "'");
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



customElements.define('ibs-view', IbsView);
