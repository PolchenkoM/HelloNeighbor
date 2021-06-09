import { useState } from "react"
import style from "./AddAvatarZone.sass"

const AddAvatarZone = () => {
	const [drag, setDrag] = useState(false)
	const dragStartHandler = (e) => {
		e.preventDefault()
		setDrag(true)
	}
	const dragLeaveHandler = (e) => {
		e.preventDefault()
		setDrag(false)
	}
	const onDropHandler = (e) => {
		e.preventDefault()
		let file = [...e.dataTransfer.files]

		let formData = new FormData()
		formData.append("avatar", file[0])
		formData.append("id", "ID1459876321")
		for (let pair of formData.entries()) {
			console.log(pair[0] + "," + pair[1])
		}
		const response = fetch("http://localhost:3001/user/addAvatar", {
			method: "POST",
			body: formData
		})
			.then((res) => res.json())
			.then((result) => console.log(result))
		setDrag(false)
	}

	return (
		<div
			className='drop-area'
			onDragStart={(e) => dragStartHandler(e)}
			onDragLeave={(e) => dragLeaveHandler(e)}
			onDragOver={(e) => dragStartHandler(e)}
			onDrop={(e) => onDropHandler(e)}
		>
			{drag ? <div>если тянешь - отпусти</div> : <div>если хочешь - потяни</div>}
		</div>
	)
}

export default AddAvatarZone
