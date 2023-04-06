import { html, VLitElement, classMap } from "../lit.js"

export class VDomens extends VLitElement {
	static properties = {
		ad: {},
		kod: {},
		kredit: {},
		kurs: {},
		qrup: {},
		tcount: {},
		muhazire: {},
		mesqele: {},
		lab: {},
		meslehet: {},
		exam: {},
		muhazire2: {},
		mesqele2: {},
		lab2: {},
		meslehet2: {},
		exam2: {},
		prehber: {},
		elmitecrube: {},
		bishi: {},
		doct: {},
		yekun: {},
	}
	fresh(){
		this.ad = ""
		this.kod = ""
		this.kredit = ""
		this.kurs = ""
		this.qrup = 0
		this.tcount = ""


		this.muhazire = 0
		this.mesqele = 0
		this.lab = 0
		this.meslehet = 0
		this.exam = 0
		this.muhazire2 = 0
		this.mesqele2 = 0
		this.lab2 = 0
		this.meslehet2 = 0
		this.exam2 = 0		
		this.prehber = ""
		this.elmitecrube = ""
		this.bishi = ""
		this.doct = ""

	}
	constructor() {
		super()
		this.fresh()
	}
	render() {
		this.yekun = +this.muhazire +
							+this.mesqele +
							+this.lab +
							+this.meslehet +
							+this.exam +
							+this.muhazire2 +
							+this.mesqele2 +
							+this.lab2 +
							+this.meslehet2 +
							+this.exam2

		return html`
			<div class="domenCols">
				<div class="docol">
					<div class="fpiece">
						<label for="ad">Fənnin adı</label>
						<input id="ad" .value=${this.ad} @change = ${e => (this.ad = e.target.value)} type="text" />
					</div>

					<div class="fpiece">
						<label for="kod">Kodu</label>
						<input id="kod" .value=${this.kod} @change = ${e => (this.kod = e.target.value)} type="number" />
					</div>

					<div class="fpiece">
						<label for="kredit">Krediti</label>
						<input id="kredit" .value=${this.kredit} @change = ${e => (this.kredit = e.target.value)} type="number" />
					</div>
					<div class="fpiece">
						<label for="kurs">Kurs</label>
						<!-- <input id="kurs" type="number"> -->
						<select name="kurs" id="kurs" .value=${this.kurs} @change = ${e => (this.kurs = e.target.value)} >
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
						</select>
					</div>
					<div class="fpiece">
						<label for="qrup">Qrup</label>
						<!-- 
						<select name="qrup" id="qrup" @change = ${e => (this.qrup = e.target.value)} >
							<option ?selected = ${this.qrup=="qrup1"} value="qrup1">qrup 1</option>
							<option ?selected = ${this.qrup=="qrup2"} value="qrup2">qrup 2</option>
							<option ?selected = ${this.qrup=="qrup3"} value="qrup3">qrup 3</option>
							<option ?selected = ${this.qrup=="qrup4"} value="qrup4">qrup 4</option>
							<option ?selected = ${this.qrup=="qrup4"} value="qrup4">qrup 4</option>
							<option ?selected = ${this.qrup=="qrup5"} value="qrup5">
								bunları Elvinin backendindən alacaq.
							</option> 
						</select>
						-->
						<input id="qrup" .value=${this.qrup} @change = ${e => (this.qrup = e.target.value)} type="number" />

					</div>
					<div class="fpiece">
						<label for="tcount">Tələbə sayı</label>
						<input id="tcount" .value=${this.tcount} @change = ${e => (this.tcount = e.target.value)} type="number" />
					</div>
				</div>

				<div class="docol">
					<label>Payız semestri</label> <br />
					<div class="fpiece">
						<label for="muhazire">Muhazirə</label>
						<input
							id="muhazire"
							.value=${this.muhazire}
							@change=${e => (this.muhazire = e.target.value)}
							type="number"
						/>
					</div>

					<div class="fpiece">
						<label for="mesqele">Məşğələ</label>
						<input
							id="mesqele"
							.value=${this.mesqele}
							@change=${e => (this.mesqele = e.target.value)}
							type="number"
						/>
					</div>
					<div class="fpiece">
						<label for="lab">Labaratoriya</label>
						<input
							id="lab"
							.value=${this.lab}
							@change=${e => (this.lab = e.target.value)}
							type="number"
						/>
					</div>
					<div class="fpiece">
						<label for="meslehet">Məsləhət</label>
						<input
							id="meslehet"
							.value=${this.meslehet}
							@change=${e => (this.meslehet = e.target.value)}
							type="number"
						/>
					</div>
					<div class="fpiece">
						<label for="exam">İmtahan</label>
						<input
							id="exam"
							.value=${this.exam}
							@change=${e => (this.exam = e.target.value)}
							type="number"
						/>
					</div>
					<div class="fpiece">
						<label>Cəm (I)</label>
						<input
							type="text"
							disabled
							.value=${+this.muhazire +
							+this.mesqele +
							+this.lab +
							+this.meslehet +
							+this.exam}
						/>
					</div>
				</div>
				<div class="docol">
					<label>Yaz semestri</label> <br />
					<div class="fpiece">
						<label for="muhazire2">Muhazirə</label>
						<input
							id="muhazire2"
							.value=${this.muhazire2}
							@change=${e => (this.muhazire2 = e.target.value)}
							type="number"
						/>
					</div>

					<div class="fpiece">
						<label for="mesqele2">Məşğələ</label>
						<input
							id="mesqele2"
							.value=${this.mesqele2}
							@change=${e => (this.mesqele2 = e.target.value)}
							type="number"
						/>
					</div>
					<div class="fpiece">
						<label for="lab2">Labaratoriya</label>
						<input
							id="lab2"
							.value=${this.lab2}
							@change=${e => (this.lab2 = e.target.value)}
							type="number"
						/>
					</div>
					<div class="fpiece">
						<label for="meslehet2">Məsləhət</label>
						<input
							id="meslehet2"
							.value=${this.meslehet2}
							@change=${e => (this.meslehet2 = e.target.value)}
							type="number"
						/>
					</div>
					<div class="fpiece">
						<label for="exam2">İmtahan</label>
						<input
							id="exam2"
							.value=${this.exam2}
							@change=${e => (this.exam2 = e.target.value)}
							type="number"
						/>
					</div>
					<div class="fpiece">
						<label>Cəm (II)</label>
						<input
							type="text"
							disabled
							.value=${+this.muhazire2 +
							+this.mesqele2 +
							+this.lab2 +
							+this.meslehet2 +
							+this.exam2}
						/>
					</div>
				</div>
				<div class="docol">
					<div class="fpiece">
						<label for="prehber">Praktika rəhbəri</label>
						<input
							id="prehber"
							.value=${this.prehber}
							@change=${e => (this.prehber = e.target.value)}
							type="text"
						/>
					</div>
					<div class="fpiece">
						<label for="elmitecrube"
							>Elmi pedaqoji, Elmi-tədris təcrübəsi</label
						>
						<input
							id="elmitecrube"
							.value=${this.elmitecrube}
							@change=${e => (this.elmitecrube = e.target.value)}
							type="text"
						/>
					</div>
					<div class="fpiece">
						<label for="bishi">Buraxılış işi</label>
						<input
							id="bishi"
							.value=${this.bishi}
							@change=${e => (this.bishi = e.target.value)}
							type="text"
						/>
					</div>
					<div class="fpiece">
						<label for="doct">Doktorantura</label>
						<input
							id="doct"
							.value=${this.doct}
							@change=${e => (this.doct = e.target.value)}
							type="text"
						/>
					</div>
					<div class="fpiece">
						<label for="yekun">Yekun:</label>
						<input
							id="yekun"
							disabled
							.value=${this.yekun}
							@change=${e => (this.yekun = e.target.value)}
							type="number"
						/>
					</div>
				</div>
			</div>
			<button @click = ${e=>{
				this.fresh()
				this.requestUpdate()
			}} class="btn">Göndər</button>
			<a class="tab list" href=${this.listLink} target="blank"
				>List</a
			>
		`
	}
}

VDomens.tag = "v-domens"
