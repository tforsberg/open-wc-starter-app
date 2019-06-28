// Import the LitElement base class and html helper function
//import { LitElement, html } from 'lit-element';

class ModalDialog extends HTMLElement {
    constructor() {
        super();
        // Attach a shadow root to the element.
        let shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = `
<script id="scriptInit" type="text/javascript">

        $(document).ready(function () { 
            //Initializes the modal-wijdialog . 
            $("#dialog-modal").wijdialog({ 
                autoOpen: false, 
                height: 180, 
                width: 400, 
                modal: true
            }); 
        }); 

    </script>
    
`;
    }
}

customElements.define('modal-dialog', ModalDialog);
