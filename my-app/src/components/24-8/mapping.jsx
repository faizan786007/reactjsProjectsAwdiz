import React, { useEffect, useState } from "react";

function Mapping(props) {
	const { students, setStudent } = props;
	// const [newStudent, setNewStudent] = useState([...students]);
	// console.log(students);
	// console.log(newStudent);
	//**********using splice */
	// function handleDelete(i) {
	// 	let ss = newStudent.splice(i, 1);
	// 	console.log("single student", ss);
	// 	console.log("full student", newStudent);
	// 	setNewStudent([...newStudent]);
	// }
	/*********using filter */
	function handleDelete(i) {
		let ss = students.filter((_, index) => i !== index);
		setStudent(ss);
	}

	return (
		<div>
			<ul>
				{students.map((s, i) => (
					<li key={i} onClick={() => handleDelete(i)}>
						{s}
					</li>
				))}
			</ul>
		</div>
	);
}

export default Mapping;
