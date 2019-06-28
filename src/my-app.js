/* eslint linebreak-style: ["error", "windows"] */

import { LitElement, html, css } from 'lit-element';
import { openWc } from './open-wc-logo';

import { IbsView } from './wc/IBS_View';
import { IbsMenu } from './wc/IBS_Menu';
import { IbsHeader } from './wc/ibs-header';
import { IbsFooter } from './wc/ibs-footer';


class MyApp extends LitElement {
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
            #ibsapp {
                padding-top: 5px;
                padding-right: 5px;
                padding-bottom: 45px;
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

        /* :host {
          text-align: center;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-size: calc(10px + 2vmin);
          color: #1a2b42;
        }

        header {
          margin: auto;
        }

        svg {
          animation: app-logo-spin infinite 20s linear;
        }

        a {
          color: #217ff9;
        }

        .app-footer {
          color: #a8a8a8;
          font-size: calc(10px + 0.5vmin);
        }

        @keyframes app-logo-spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        } */
      `,
    ];
  }

  render() {
    return html`
    <div id="ibsapp" class="debug">
    <ibs-header></ibs-header>

      <p>IBS App Works!!!</p>
      <slot></slot>
      <ibs-footer></ibs-footer>
    </div>
    <!-- <header class="app-header">
            ${openWc}
            <h1>${this.title}</h1>
            <p>Edit <code>src/my-app.js</code> and save to reload.</p>
            <a
              class="app-link"
              href="https://open-wc.org/developing/#examples"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code examples
            </a>
          </header>
          <ibs-view></ibs-view>
          <p class="app-footer">
            🚽 Made with love by
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/open-wc">open-wc</a>.
          </p> -->
    `;
  }
}

customElements.define('my-app', MyApp);
