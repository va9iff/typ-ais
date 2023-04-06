import { getTeachers } from "../api.js"
import { html, VLitElement, classMap } from "../lit.js"

export class  VSorgu extends VLitElement {
	static properties = {
		tabble: {},
		az: {},
		en: {},
		ru: {},
		tr: {},
		sex: {}
	}
	constructor(){
		super();
		var teachers;
		var content;
		let data = {}
		data.teachers = getTeachers()
		this.teachers= data.teachers
		this.requestUpdate()

			// console.log(content);
		this.content = content
		
	}
	render(){
		return this.tabble ?? html`
		<!-- <div class="domenCols"> -->
		<!-- 	<div class="docol"> -->
		<!-- 		<v-dils></v-dils> -->
		<!-- 	</div> -->
		<!-- 	<div class="docol tabCol"> -->
		<!-- 		<label for="sertfs">Sertifikatlar</label> <br> -->
		<!-- 		<textarea style="padding: 7px; width: 250px"></textarea> -->
		<!-- 	</div> -->
		<!-- </div> -->	
		<table class="table">
			<thead class="thead-dark">
				<tr>
			
					<th scope="col">Name</th>
					<th scope="col">Surname</th>
					<th scope="col">Job Type</th>
					<th scope="col">Scientific Name</th>
					<th scope="col">Languages
					<br> az<input type="checkbox" name="" @change=${e=>{
						// e.target.checked = !e.target.checked
						this.az = e.target.checked
						console.log(e.target.checked)
					}}>
					en<input type="checkbox" name="" @change=${e=>{
						// e.target.checked = !e.target.checked
						this.en = e.target.checked
					}}>
					<br> ru<input type="checkbox" name="" @change=${e=>{
						// e.target.checked = !e.target.checked
						this.ru = e.target.checked
					}}>
					tr<input type="checkbox" name="" @change=${e=>{
						// e.target.checked = !e.target.checked
						this.tr = e.target.checked
					}}>
					</th>
					<th scope="col">Department</th>
					<th scope="col">
					<select name="" id="" @change=${
						e=>this.sex = e.target.value
					}>
					<option value="">Sex</option>
					<option value="Kişi">Kişi</option>
					<option value="Qadın">Qadın</option>
					</select>
					</th>
					<th scope="col">Birthdate</th>
					<th scope="col">Scientific Degree</th>
					<th scope="col">Sorgu</th>
				</tr>
			</thead>
			<tbody>
					${this.teachers
					.filter(t=>this.az?t.langs.includes('az'):true)
					.filter(t=>this.en?t.langs.includes('en'):true)
					.filter(t=>this.ru?t.langs.includes('ru'):true)
					.filter(t=>this.tr?t.langs.includes('tr'):true)
					.filter(t=>this.sex?t.sex==this.sex:true)
					.map((teacher)=>
				html`
				<tr>
					<td c>${teacher.name}</td>
					<td c>${teacher.surname}</td>
					<td c>${teacher.jobType}</td>
					<td c>${teacher.scientificName}</td>
					<td c>${teacher.langs.map(l=>html`${l}<br>`)}</td>
					<td>${teacher.department}</td>
					<td>${teacher.sex}</td>
					<td>${html`${teacher.birthDate.slice(5,10)}-<wbr>${teacher.birthDate.slice(0,4)}`}</td>
					<td>${teacher.scientificDegree}</td>
					<td c><button @click=${
						async e => {
							window.teacherId = teacher.id
							// let res = await fetch(`https://localhost:44384/api/Distribution/${teacher.id}`)
							// let js = await res.json()

							
							// var finalList = [
								// ...js.predmetGroups.filter(predmet=>predmet.orderBy==0).map(_=>[_]),
								// ...js.orderBys.map(order=>js.predmetGroups.filter(predmet=>predmet.orderBy==order))
							// ]

							finalList = window.finalList

							console.log(finalList)
							let sorguContent = finalList.map(row=>html`
							<tr>
							<td>
								${row.map(cell=>html`${cell.code}<br>`)}
							</td>
							<td>
								${row.map(cell=>html`<button @click=${async e=>{
							e.target.classList.add('red')
							return
									await fetch("https://localhost:44384/api/Distribution",{
										method: "POST",
										body: JSON.stringify({
											TeacherId: window.teacherId,
											PredmetGroupId: cell.id
										}),
										headers:{
											"Content-type":"application/json;charset=UTF-8",
										}
									}).then(res=> res.json())
									.then(data=>console.log(data))
									.catch(error=>console.log(error));

								}}>Choose</button>${cell.predmetName}<br>`)}
							</td>
							<td c>${row[0].group}</td>
							<td c>${row[0].course}</td>
							<td>${row[0].profession}</td>
							<td>${row[0].sector}</td>
							<td>${row[0].credit}</td>
							<td>${row[0].generalHours}</td>
							<td>${row[0].auditoryHours}</td>
							<td>${row[0].session}</td>
							</tr>
							`)
							console.log(sorguContent)
							
							this.tabble =
								html`
								
								<table class="table">
									<thead class="thead-dark">
										<tr>
									
											<th scope="col">Code</th>
											<th scope="col">Predmet</th>
											<th scope="col">Group</th>
											<th scope="col">Course</th>
											<th scope="col">Profession</th>
											<th scope="col">Sector</th>
											<th scope="col">Credit</th>
											<th scope="col">General Hours</th>
											<th scope="col">Auditory Hourse</th>
											<th scope="col">Session</th>
										</tr>
									</thead>
									<tbody>

										${sorguContent}
									</tbody>
								</table>
								`;						
							this.requestUpdate()
						}
					}>Sorgu</button></td>
				</tr>`
			)}
			</tbody>
			</table>
		`
	}
}

VSorgu.tag = 'v-sorgu'
