/* eslint linebreak-style: ["error", "windows"] */

import {IBS_HTMLElement } from './IBS_HTMLElement.js'

export class IbsApp extends IBS_HTMLElement {

    constructor() {
        super();

        this.Name = "ibs-app";

        // Attach a shadow root to the element.
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = `
        <div id="ibsapp" class="no-debug">
            <p>IBS App Works!!!</p>
            <slot></slot>
        </div>
        <style>
            #ibsapp {
                padding-top: 5px;
                padding-right: 5px;
                padding-bottom: 5px;
                padding-left: 10px;
                //border: 3px solid black;
                margin-top: 10px;
                margin-bottom: 10px;
                margin-right: 5px;
                margin-left: 3px;
                background-color: lightblue;
                          }
            #ibsapp.debug {
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
        console.log("ibs-app connected to page");
    }

    disconnectedCallback() {
        console.log("ibs-app disconnected from page");
    }

    adoptedCallback() {
        console.log("ibs-app adopted in page");
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log("ibs-app attr: " + name + " changed from '" + oldValue + "' to '" + newValue + "'");
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



customElements.define('ibs-app', IbsApp);
