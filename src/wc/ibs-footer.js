/* eslint linebreak-style: ["error", "windows"] */

import { LitElement, html, css } from 'lit-element';
import { openWc } from '../open-wc-logo';

import { IbsView } from './IBS_View.js';
import { IbsMenu } from './IBS_Menu.js';


export class IbsFooter extends LitElement {

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
        footer {
            position: fixed;
            left: 0;
            bottom: 0;
            width: 100%;
            background-color: white;
            color: black;
            text-align: center;
        }

            #ibsfooter {
                padding-top: 5px;
                padding-right: 5px;
                padding-bottom: 5px;
                padding-left: 10px;
                //border: 3px solid black;
                margin-top: 5px;
                margin-bottom: 5px;
                margin-right: 5px;
                margin-left: 3px;
                background-color: lightblue;
                          }
            #ibsfooter.debug {
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
        <footer>
          <div class="footer content-wrapper">
            <div class="float-left">
              <p>
                &copy; 2019 - Idealease, Inc.
              </p>
            </div>
          </div>
        </footer>

        <!-- <div id="ibsfooter" class="debug">
          <p>IBS Footer Works!!!</p>
          <slot></slot>
        </div> -->
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

customElements.define('ibs-footer', IbsFooter);

