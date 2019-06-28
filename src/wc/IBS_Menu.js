/* eslint linebreak-style: ["error", "windows"] */

import { LitElement, html, css } from 'lit-element';

// import {IBS_HTMLElement } from './IBS_HTMLElement.js'

export class IbsMenu extends LitElement {

    constructor() {
        super();

        this.Name = "ibs-menu";

        // Attach a shadow root to the element.
        // const shadowRoot = this.attachShadow({ mode: 'open' });
        // shadowRoot.innerHTML = `

        //   <style>
        //   </style>
        // ;

        // this._shadowRoot = shadowRoot;

    }

    static get styles() {
        return [
            css`
            #drawer-container
            {
                background-color: red !important;
                width: 100px !important;
            }

            `,];
    }

    render() {
        return html`
        <myuw-drawer>
            <myuw-drawer-subheader slot="myuw-drawer-links" name="Favorites" divider></myuw-drawer-subheader>
            <myuw-drawer-link slot="myuw-drawer-links" name="email" icon="mail" href="http://google.com"></myuw-drawer-link>
            <myuw-drawer-subheader slot="myuw-drawer-links" name="Accounting" divider></myuw-drawer-subheader>
            <myuw-drawer-link slot="myuw-drawer-links" name="some app" icon="explore" href="http://google.com"></myuw-drawer-link>
            <myuw-drawer-subheader slot="myuw-drawer-links" name="Lease" divider></myuw-drawer-subheader>
            <myuw-drawer-link slot="myuw-drawer-links" name="some app" icon="explore" href="http://google.com"></myuw-drawer-link>
            <myuw-drawer-subheader slot="myuw-drawer-links" name="Rental" divider></myuw-drawer-subheader>
            <myuw-drawer-link slot="myuw-drawer-links" name="some app" icon="explore" href="http://google.com"></myuw-drawer-link>
            <myuw-drawer-subheader slot="myuw-drawer-links" name="Shop" divider></myuw-drawer-subheader>
            <myuw-drawer-link slot="myuw-drawer-links" name="some app" icon="explore" href="http://google.com"></myuw-drawer-link>
            <myuw-drawer-subheader slot="myuw-drawer-links" name="Utilities" divider></myuw-drawer-subheader>
            <myuw-drawer-link slot="myuw-drawer-links" name="some app" icon="explore" href="http://google.com"></myuw-drawer-link>
        </myuw-drawer>
        <!-- <h1>${this.title}</h1> -->
            `;
    }

    // static get observedAttributes() {
    //     return ["visible"];
    // }

    // static get template() {
    //     if (!this._template) {
    //         this._template = thisImportDoc.querySelector("#message-banner-tmpl");
    //     }
    //     return this._template;
    // }

    // connectedCallback() {
    //     //super.debugMessage("ZZZ: connected to page");
    //     console.log("ibs-menu connected to page");
    // }

    // disconnectedCallback() {
    //     console.log("ibs-menu disconnected from page");
    // }

    // adoptedCallback() {
    //     console.log("ibs-menu adopted in page");
    // }

    // attributeChangedCallback(name, oldValue, newValue) {
    //     console.log("ibs-menu attr: " + name + " changed from '" + oldValue + "' to '" + newValue + "'");
    // }


}

customElements.define('ibs-menu', IbsMenu);
