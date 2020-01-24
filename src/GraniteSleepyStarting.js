import { html, css, LitElement } from 'lit-element';


  

function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

export class GraniteSleepyStarting extends LitElement {

    static get styles() {
        return css`
          :host {
              display: flex;
              justify-content: space-around;
              align-items: center;
              color: #0000ff;
              width: 150px;
              height: 150px;
              border-radius: 5px;
              background-color: #00b0ff;
              margin: 10px;
          }
        `;
    }

    static get properties() {
        return {
          siesta: { type: Number },
        };
    }
    
    constructor() {
        super();
        this.siesta = Math.floor(1000 * Math.random());
        console.log(`Element with siesta ${this.siesta}ms created`);
    }

    async connectedCallback() {
        super.connectedCallback();
        console.log(`Element with siesta ${this.siesta}ms init connexion`);
        let done = await sleep(this.siesta);
        console.log(`Element with siesta ${this.siesta}ms ready`);
    }

    render() {
        return html`
            <h4>Siesta ${this.siesta}ms</h4>
        `;
    }
}

