import { html, VLitElement, classMap } from "../lit.js"
import { getFaculties, getTeachers, getPane2Ixtisases } from "../api.js"
// import {subjects} from "../dummyData.js"

import "./tabber.js"
import "./domens.js"
import "./teacher.js"
import "./dils.js"
import "./sorgu.js"

let pane2 = html``
let pane1 = html``

let selectedPane0 = ""
let selectedPane1 = ""
let selectedPane2 = ""

let yuk = null

export class VTabs extends VLitElement {
	static properties = {
		// minimized: {},
	}
	constructor() {
		super()
		// this.minimized = false
	}
	pane1teachers(e) {
		selectedPane0 = "teachers"
		this.requestUpdate()
	}
	// changeMinimize(e) {
		// this.minimized = !this.minimized
	// }
	render() {
		return html`
			<div class="tabCol co1">
				<button
					class=${classMap({
						tab: true,
						selected: selectedPane0 == "faculties",
						highTab: true,
					})}
					@click=${e=>{
						selectedPane0 = "faculties"
						selectedPane1 = ""
						selectedPane2 = ""
						this.requestUpdate()
					}}
				>
					Tədris yükünün daxil <br />
					olduğu fakultələr
				</button>
				<button
					class=${classMap({
						tab: true,
						selected: selectedPane0 == "teachers",
					})}
					@click=${e=>{
						selectedPane0 = "teachers"
						selectedPane1 = ""
						selectedPane2 = ""
						this.requestUpdate()
					}}
				>
					Müəllimlər
				</button>
				<button class="tab" 
				class=${classMap({
						tab: true,
						selected: selectedPane0 == "meyars",
					})}
				@click=${e=>{
					selectedPane0 = "meyars"
					selectedPane1 = ""
					selectedPane2 = ""
					this.requestUpdate()
				}}>Sorğu (Meyarlar)</button>
				<button
					class=${classMap({
						tab: true,
						selected: selectedPane0 == "ixtisases",
					})}
					@click=${e=>{
						selectedPane0 = "ixtisases"
						selectedPane1 = ""
						selectedPane2 = ""
						this.requestUpdate()
					}}
				>Kafedradan çıxan yük
				</button>
				<!-- <button 
				class = ${
					classMap({	
						tab: true,
						selected: selectedPane0 == "sorgu"})
				}
				@click = ${
					e=>{
						selectedPane0 = "sorgu"
						this.requestUpdate()
					}
				}>Sorğu</button> -->
				<button
					class=${classMap({ tab: true })}
					@click=${e => window.goTo("login")}
				>
					Çıxış
				</button>
			</div>

			<div
				class=${classMap({
					tabCol: true,
					hidden: !(selectedPane0 == "faculties" || selectedPane0 == "ixtisases" )
					// hidden: this.minimized || !pane1.length,
					// hidden: selectedPane0 != "faculties" 
				})}
			>
			${
				selectedPane0 == "faculties" ? html`<v-tabber 
				.data = ${{		
					list: getFaculties(),
					itemClick: item=> {
						selectedPane1 = item
						selectedPane2 = ""
						this.requestUpdate()
					},
						itemShow: item => item,
						selected: item => selectedPane1 == item,
					} 

				} ></v-tabber>` :
					selectedPane0 == "ixtisases" ? 
					html`<v-domens></v-domens>` : html``

			}
			</div>

			<div
				class=${classMap({
					tabCol: true,
					fenn: true,
					// hidden: this.minimized || !pane2.length,
				})}
			>
				${
					selectedPane0 == "teachers" ? 
					html`<v-teacher></v-teacher>` : 
					selectedPane0 == "faculties" && selectedPane1 ? 
					html`<v-domens .listLink=${"./pdfs/Mühəndislik_2022-2023.pdf"}></v-domens>` : 
					selectedPane0 == "meyars" ? 
					html`<v-sorgu></v-sorgu>` :
					// selectedPane0 == "sorgu" ?
					// html`<v-sorgu></v-sorgu>` :
					html``
				}
			</div>
			<div
				class=${classMap({
					tabCol: true,
					yukContent: true,
					hidden: !(selectedPane2 && selectedPane1),
					// fenn: true,
					// hidden: this.minimized,
				})}
			>
				<form>
					<label>${selectedPane2}</label> <br />
					<br />
					<label for="hours">Dərs Saatları</label> <br />
					<input type="number" name="hours" id="hours" value="30" min="1" />
					<br />
					<br />
					<label for="kredit">Krediti</label> <br />
					<input type="number" name="kredit" id="kredit" value="1" min="1" />
					<br />
					<br />
					<label for="tform">Tədris Forması</label> <br />
					<select name="tform" id="tform">
						<option value="eyani">Əyani</option>
						<option value="qiyabi">Qiyabi</option>
					</select>
					<br />
					<br />
					<label for="startDate">Başlanğıc Tarixi</label> <br />
					<input
						type="date"
						id="startDate"
						name="startDate"
						value="2020-07-22"
						min="1930-01-01"
						max="2025-12-31"
					/>
					<br />
					<br />
					<label for="muallim">Müəllim</label> <br />
					<input
						type="text"
						name="muallim"
						id="muallim"
						placeholder="Müəllimin Adı"
					/>
					<br />

					<br />
					<button type="submit" class="tab submitButton">Göndər</button>
				</form>
			</div>
		`
	}
	// getYuk(fenn) {
		// selectedPane2 = fenn
		// yuk = null
		// yuk = { someProp: "mono" }
		// this.requestUpdate()
	// }
}

VTabs.tag = "v-tabs"
