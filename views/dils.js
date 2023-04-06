import { html, VLitElement, classMap } from "../lit.js"

let possibleDils = ["Az", "En", "Ru", "Tr"]
let vals = {
	Az: 1,
	En: 2,
	Ru:5,
	Tr:6
}
Window.vals = vals
window.dils = ["Az"]

export class VDils extends VLitElement {
	static properties = {
		dils: {},
	}
	constructor() {
		super()
		// window.dils ??= []
	}

	render() {
		return html`
			<label for="dils">Üstünlük verilən dillər</label>
			${window.dils.map(
				(dil, i) => html`
					<div>
						${i} <button class="rmbtn" @click = ${e =>{
							window.dils.splice(i, 1)
							this.requestUpdate()
						}
						}> - </button>
					<select
						id="dils"
						@input=${e => {
							window.dils[i] = e.target.value
							this.requestUpdate()
						}} >
						${possibleDils.map((pdil, k) => html`<option .selected = ${pdil==dil} value=${vals[pdil]} ?disabled=${window.dils.includes(pdil)}> ${pdil} </option>`)}
					</select> <!--${dil}-->
					<button @click= ${e=>{
						if (i-1<0) return console.log('up limit')
						let _ = window.dils[i-1]
						window.dils[i-1] = window.dils[i]
						window.dils[i] = _
						this.requestUpdate()
					}
					}>up</button>
					<button @click=${e=>{
						console.log(i, window.dils[i])
						if (i+1>=window.dils.length) return console.log('down limit')
						let _ = window.dils[i+1]
						window.dils[i+1] = window.dils[i]
						window.dils[i] = _
						this.requestUpdate()
					
					}}>down</button>
					</div>
				`
			)}
			${window.dils.length < 3 ? html`<button @click = ${ e => 
				{
					window.dils.push("Az")
					this.requestUpdate()
				}
			}>Dil əlavə et</button>` : html`Maksimal sayda dil`}`
	}
}

VDils.tag = "v-dils"
