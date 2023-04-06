export function getFaculties() {
	return [
		"Rus iqtisad məktəbi",
		"Biznes və menecment",
		"İqtisadiyyat və idarəetmə",
		"Maaliyyə muhasibat",
		"Rəqəmsal iqtisadiyyat",
		"QƏTM",
		"Magistratura mərkəzi",
		"Mühəndislik",
		"Dizayn",
	]
}

export function  getTeachers() {
	var teachers;
	console.log(window.teachers)
	return window.teachers
	// return await fetch("https://localhost:44384/api/Teachers")
	// .then(res=> res.json())
    // .then(data=>{
		// teachers = data;
		// return teachers;
	// })
    // .catch(error=>console.log(error));
};


export function getPane2Ixtisases(ixtisasName) {
	return ["ixtisas 1", "ixtisas 2", "ixtisas 3", "ixtisas 4", "ixtisas 5"]
	// return subjects[ixtisasName]
}
