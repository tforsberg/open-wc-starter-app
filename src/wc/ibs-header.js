/* eslint linebreak-style: ["error", "windows"] */

import { LitElement, html, css } from 'lit-element';
// import { openWc } from '../open-wc-logo';

// import { IbsView } from './IBS_View.js';
import { IbsMenu } from './IBS_Menu.js';


export class IbsHeader extends LitElement {

  static get properties() {
    return {
      title: { type: String },
    };
  }

  constructor() {
    super();
    this.title = 'open-wc';
  }

  static get styles() {
    return [
      css`
        /* Style the header */
        .header {
          padding: 10px 16px;
          background: #555;
          color: #f1f1f1;
        }

        /* Page content */
        .content {
          padding: 16px;
        }

        /* The sticky class is added to the header with JS when it reaches its scroll position */
        .sticky {
          position: fixed;
          top: 0;
          width: 100%
        }

        /* Add some top padding to the page content to prevent sudden quick movement (as the header gets a new position at the top of the page (position:fixed and top:0) */
        .sticky + .content {
          padding-top: 102px;
        }

        h2 {
          float: right;
          margin: 0;
          margin-top: 2px;
        }

`,
    ];
  }

  // createRenderRoot() {
  //   return this;
  // }

  render() {
    return html`
      <div class="header" id="myHeader">
        <h2>Idealease Business System</h2>
        <ibs-menu></ibs-menu>
      </div>
      <!-- <h1>${this.title}</h1> -->
      <script>

      // Get the header
      var header = document.getElementById("myHeader");
      console.log(header);

      // Get the offset position of the navbar
      var sticky = header.offsetTop;

      // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
      function myFunction() {
        if (window.pageYOffset > sticky) {
          header.classList.add("sticky");
        } else {
          header.classList.remove("sticky");
        }
      }

      // When the user scrolls the page, execute myFunction
      window.onscroll = function() {myFunction()};

    </script>
    `;
  }
}

customElements.define('ibs-header', IbsHeader);

