
import { MDCTopAppBar } from '@material/top-app-bar';
import { LitElement } from 'lit-element';

// Instantiation
//const topAppBarElement = document.querySelector('.mdc-top-app-bar');
//const topAppBar = new MDCTopAppBar(topAppBarElement);

class IbsAppBar extends LitElement {

    constructor() {
        super();

        this.name = "ibs-app-bar";

        // Attach a shadow root to the element.
        //let shadowRoot = this.attachShadow({ mode: 'open' });
        //shadowRoot.innerHTML = '<div>IBS App Bar</div>';

        //console.log(this.render());
        //alert(this.myName());
    }


}

customElements.define('ibs-app-bar', IbsAppBar);
