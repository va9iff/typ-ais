import { html, VLitElement, classMap } from "../lit.js"

export class VTeacher extends VLitElement {
	static properties = {
		BirthDate:"2011-08-19",
		DepartmentId:"0",
		Email:"",
		Fathername:"",
		JobTypeId:"0",
		Name:"",
		PhoneNumber:"",
		ScientificDegreeId:"0",
		ScientificNameId:"0",
		SexId:"0",
		Surname:"",
		Sectors:[{
			Id:0,
			Level:3
		}],
		Certifications:[{
			Name:"",
			IsLocal:true,
			Country:""
		}],
		Places:[{
			PlaceName:"",
			BeginDate:"2011-08-19",
			EndDate:"2011-08-19",
		}]
	}
	constructor() {
		super()
		this.ishYers = [{ yer: "unec", start: "2011-08-19", stop: "2011-08-19" }]
		this.objs = [
			// {name: "", isLocal: false, country: ""},
			// {name: "", isLocal: true, country: ""}
		]
	}
	render() {
		return html`
		<button
			@click=${async e => {
				this.querySelector('[u]').requestUpdate()
				let Sectors = window.dils
				Sectors = Sectors.map((dil,i)=>({
					// alksfjd: console.log(dil, window.vals),
					id: +dil,
					level: i == 0 ? 3 : i == 1 ? 2 : i == 2 ? 1 : 0
				}))
				// console.log({...this
				// })
				// this.fresh()
				let {Name, isLocal} = this
				console.log()
				var data = {
					BirthDate: this.BirthDate,
					DepartmentId: this.DepartmentId,
					Email: this.Email,
					Fathername: this.Fathername,
					JobTypeId: this.JobTypeId,
					Name: this.Name,
					PhoneNumber: this.PhoneNumber,
					ScientificDegreeId: this.ScientificDegreeId,
					ScientificNameId: this.ScientificNameId,
					SexId: this.SexId,
					Surname: this.Surname,
					Sectors,
					Certifications: this.objs.map(cert=>({
						Name: cert.name,
						isLocal: cert.isLocal,
						Country: cert.country
					})),
					Places: this.ishYers.map(i=>({
						PlaceName: i.yer,
						BeginDate: i.start,
						EndDate: i.stop
					}))
				}
				await fetch("https://localhost:44384/api/Teachers",{
					method: "POST",
					body: JSON.stringify(data),
					headers:{
						"Content-type":"application/json;charset=UTF-8",
					}
				}).then(res=> res.json())
				.then(data=>console.log(data))
				.catch(error=>console.log(error));
				this.requestUpdate()
			}}
			class="btn"
		>
			Göndər
		</button>
		<button
			@click=${e => {
				// this.fresh()
				this.requestUpdate()
			}}
			class="btn"
		>
			Məlumatları təmizlə
		</button>

			<div class="domenCols">

				<div class="docol">
					<div class="fpiece">
						<label for="mad">Müəllimin adı</label>
						<input @change = ${e=>this.Name = e.target.value} id="mad" type="text" />
					</div>
					<div class="fpiece">
						<label for="sad">Soyadı</label>
						<input id="sad" @change = ${e=>this.Surname = e.target.value} type="text" />
					</div>
					<div class="fpiece">
						<label for="sad">Ata adı</label>
						<input id="sad" @change = ${e=>this.Fathername = e.target.value} type="text" />
					</div>
					<div class="fpiece">
						<label for="gender">Cinsi</label>
						<select name="" id="" @change = ${e=>this.SexId = e.target.value}>
							<option value="0">-</option>
							<option value="1">Kişi</option>
							<option value="2">Qadın</option>
						</select>
					</div>
					<div class="fpiece">
						<label for="birthdate">Doğum tarixi</label>
						<input id="birthdate" @change = ${e=>this.BirthDate = e.target.value} type="date" />
					</div>
					<div class="fpiece">
						<label for="email">Email</label>
						<input id="email" @change = ${e=>this.Email = e.target.value} type="email" />
					</div>
					<div class="fpiece">
						<label for="mad">Nömrə</label>
						<input id="mad" @change = ${e=>this.PhoneNumber = e.target.value} type="tel" />
					</div>
					<div class="fpiece">
						<label for="mad">Kafedra</label>
						<select name="" id="" @change = ${e=>this.DepartmentId = e.target.value}>
							<option value="0">-</option>
							<option value="1">Kafedra 1</option>
							<option value="2">Kafedra 2</option>
							<option value="3">Kafedra 3</option>
							<option value="4">Kafedra 4</option>
							<option value="5">Kafedra 5</option>
							<option value="6">Kafedra 6</option>
							<option value="7">Kafedra 7</option>
							<option value="8">Kafedra 8</option>
							<option value="9">Kafedra 9</option>
						</select>
					</div>
					<div class="fpiece">
						<label for="mad">Ştatı</label>
						<select name="" @change = ${e=>this.JobTypeId= e.target.value} id="shtat">
							<option value="0">-</option>
							<option value="1">Tam ştat</option>
							<option value="2">0.75 ştat</option>
							<option value="3">0.5 ştat</option>
							<option value="4">0.25 ştat</option>
							<option value="5">Saat başı</option>
							<option value="6">Müqaviləli</option>
						</select>
					</div>
					<div class="fpiece">
						<label for="ead">Elmi Adı</label>
						<select id="ead" @change = ${e=>this.ScientificNameId= e.target.value}>
							<option value="1">Laborant</option>
							<option value="2">Doesent</option>
							<option value="3">Professor</option>
						</select>
					</div>
					<div class="fpiece">
						<label for="ead">Elmi Dərəcəsi</label>
						<select id="ead" @change = ${e=>this.ScientificDegreeId = e.target.value}>
							<option value="1">Riyaziyyat uzre felsefe doktoru</option>
							<option value="2">Doesent</option>
							<option value="3">Professor</option>
						</select>
					</div>
				</div>

				<div class="docol tabCol">
				<div class="fpiece">
					<label>İşlədiyi Yerlər</label>
					${this.ishYers.map(
						(ishYer, i) =>
							html`
								<div class="ishyer fpiece">
									<label for="">İş yeri</label>
									<input id="mad" type="text" .value=${ishYer.yer}
									@change = ${e=>ishYer.yer=e.target.value}
									 />
									<!-- <label for="">Vəzifə</label> -->
									<!-- <input id="mad" type="text" .value=${ishYer.vez} /> -->
									<label for="">Start</label>
									<input id="mad" type="Date" .value=${ishYer.start} @change=${e=>ishYer.start=e.target.value} />
									<label for="">Stop</label>
									<input id="mad" type="Date" .value=${ishYer.stop} @change=${e=>ishYer.stop=e.target.value}/>
									<button
										@click=${e => {
											this.ishYers.splice(i, 1)
											this.requestUpdate()
										}}
										style="margin-top: 4px; margin-left: auto; padding: 3px 15px"
									>
										sil
									</button>
								</div>
							`
					)}
					<button
						@click=${e => {
							this.ishYers.push({ yer: "", vez: "" })
							this.requestUpdate()
						}}
					>
						İş yeri əlavə et
					</button>
				</div>
				</div>
				<div class="docol tabCol">
				<div class="fpiece tabCol">
				<label>Sertifikatlar</label>
					${this.objs.map(
						(obj, i) =>
							html`
								<div class="ishyer fpiece">
								<label for="">Ad</label>
								<input id="mad" type="text" .value=${obj.name} @change=${e=>obj.name = e.target.value} />
								<div><label> Lokal </label>
								<input type="checkbox" ?checked=${obj.isLocal} @change=${e=>{
									obj.isLocal = !obj.isLocal
									this.requestUpdate()
								}}></div>
									${!obj.isLocal ? html`
									<label for="">Olke</label>
									<input id="mad" type="text" .value=${obj.country} @change = ${e=>obj.country=e.target.country} />
									` : ""}
									<button
										@click=${e => {
											this.objs.splice(i, 1)
											this.requestUpdate()
										}}
										style="margin-top: 4px; margin-left: auto; padding: 3px 15px"
									>
										sil
									</button>
								</div>
								`
					)}
					<button
						@click=${e => {
							this.objs.push({ name: "", isLocal: false, country: "" })
							this.requestUpdate()
						}}
					>
						Sertifikat əlavə et
					</button>
				</div>
				</div>
				<v-dils u></v-dils>

			</div>
		`
	}
}

VTeacher.tag = "v-teacher"
