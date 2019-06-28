// Import the LitElement base class and html helper function
//import { LitElement, html } from 'lit-element';

class ModalDialog extends HTMLElement {
    constructor() {
        super();
        // Attach a shadow root to the element.
        let shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = `
    <div id="simpleDialog" title="Password Policy" style="display:none">
<slot></slot>        
<p>
            <u><b>Password zzz Policy</b></u>
        </p>
       <h1>Demo Dialog!</h1>
        <p>This is a simple dialog! Look at me go!</p>
</div>
`;
    }

    connectedCallback() {

        $("#simpleDialog").wijdialog({
            autoOpen: false,
            height: 200,
            width: 400,
            modal: true
        }); 

        $("#dialog-pwdpolicy").wijdialog({
            autoOpen: false,
            width: 600,
            modal: true,
            resizable: false,
            buttons: {
                Ok: function () {
                    $(this).wijdialog("close");
                }
            },
            open: function (e) {
                $(".ui-dialog-titlebar").hide();
            },
            captionButtons: {
                pin: { visible: false },
                refresh: { visible: false },
                toggle: { visible: false },
                minimize: { visible: false },
                maximize: { visible: false }
            }
        });

        console.log(this.constructor.name + " connected to page");
    }

}

customElements.define('modal-dialog', ModalDialog);
