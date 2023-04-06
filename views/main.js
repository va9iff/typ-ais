import { html, VLitElement, classMap } from "../lit.js"

import "./tabs.js"
import "./login.js"

window.atV = "tabs"

export class VMain extends VLitElement {
	static properties = {
		blocking: {}
	}
	constructor(){
		super()
		window.update = (...arg) => this.update(...arg)
		this.blocking = true
	}
	render() {
		return html`
		${ this.blocking ? html`<div cf darkEnter>
		<input @change=${e=>{
				if (e.target.value=="unec1930") this.blocking = false
				this.requestUpdate()
			}}>` : ''}
		</div>
		<div class="header">
			<img class="nazirlik" src="./img/elm ve etehsil nazirliyi.png" alt="">
			<p>Tədris Yükünün Paylanması AİS</p>
			<img class="unec" src="./img/unec fil fit.png" alt="">
		</div>
		<!-- <img src="./img/header.png" alt="" class=${classMap({ 
				header:true,
				semiOpaceHeader: window.atV == "login"
			})}> -->
		${window.atV == "tabs" ? html`<v-tabs></v-tabs>` : ""}
		${window.atV == "login" ? html`<v-login></v-login>` : ""}
		`
	}
	getFenns(ixts){
		console.log('got fenns')
		console.log(getSubjects(ixts))
		fennler = getSubjects(ixts)
		this.requestUpdate()
	}
}


VMain.tag = "v-main"

window.main = document.createElement("v-main")
window.updateMain = ()=>main.requestUpdate()
window.goTo = route => {
	window.atV = route
	main.requestUpdate()
}

document.body.appendChild(window.main)