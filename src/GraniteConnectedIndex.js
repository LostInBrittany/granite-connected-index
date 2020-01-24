import { html, css, LitElement } from 'lit-element';
import { GraniteSleepyStarting } from './GraniteSleepyStarting';

window.customElements.define('granite-sleepy-starting', GraniteSleepyStarting);

export class GraniteConnectedIndex extends LitElement {
  static get styles() {
    return css`
      :host {
      }
      .sleepers {
        display: flex;
        flex-flow: row wrap;
      }
    `;
  }

  static get properties() {
    return {
      counter: { type: Number },
    };
  }

  constructor() {
    super();
    this.counter = 0;
  }


  render() {
    return html`
      <h2>Hello </h2>
      <div class='sleepers'>
        <granite-sleepy-starting></granite-sleepy-starting>
        <granite-sleepy-starting></granite-sleepy-starting>
        <granite-sleepy-starting></granite-sleepy-starting>
        <granite-sleepy-starting></granite-sleepy-starting>
        <granite-sleepy-starting></granite-sleepy-starting>
      </div>  
    `;
  }
}
