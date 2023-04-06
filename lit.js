import {html, css, LitElement, classMap} from "https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js"

class VLitElement extends LitElement {
	createRenderRoot() {
	  return this;
	}
	static set tag(tagName){
		customElements.define(tagName, this);
	} 
}

export {html, css, LitElement, VLitElement, classMap}