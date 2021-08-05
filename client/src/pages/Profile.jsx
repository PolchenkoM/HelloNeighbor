import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router"
// import { useForm } from "antd/lib/form/Form"
import useForm from "../hooks/useForm"
import moment from "moment"
import { Tag } from "antd"
import { updateUserThunk } from "../redux/Actions/usersAC"

export default function Profile() {
	const dispatch = useDispatch()
	const currentUser = useSelector((state) => state.users.currentUser)
	const history = useHistory()
	const formData = new FormData()

	const [values, changeHandler] = useForm()
	//tags
	const { CheckableTag } = Tag
	const [tags, setTags] = useState([])
	const [selectedTags, setSelectedTags] = useState([])

	useEffect(() => {
		fetch("http://localhost:3001/tags")
			.then((res) => res.json())
			.then((result) => setTags(result))
	}, [])

	function handleChange(tag, checked) {
		const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter((t) => t !== tag)
		setSelectedTags(nextSelectedTags)
	}
	//date func
	const [date, setDate] = useState("")
	const dateHandler = (e) => {
		const date = new Date(e._d)
		const normData = moment(date)
		const dataDa = normData.format("YYYY-MM-DD")
		setDate((prev) => dataDa)
	}

	//gender
	const [gender, setGender] = useState("")
	const genderHandler = (e) => {
		setGender((prev) => e)
	}
	//ava
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
		formData.append("avatar", file[0])
	}

	//profile
	const profileSubmit = (e) => {
		e.preventDefault()
		const profile = {
			...values,
			age: date,
			gender: gender,
			tags: selectedTags,
			id: currentUser._id
		}
		formData.append("profile", JSON.stringify(profile))
		dispatch(updateUserThunk(formData))
		history.push("/")
	}
	return (
		<form onSubmit={profileSubmit}>
			<div className='mb-3'>
				<label for='exampleInputEmail1' className='form-label'>
					Email address
				</label>
				<input
					name='name'
					type='text'
					value={values.name || ""}
					onChange={changeHandler}
					className='form-control'
					id='exampleInputEmail1'
					aria-describedby='emailHelp'
					placeholder='NAME'
				/>
			</div>
			<div className='mb-3'>
				<label for='exampleInputPassword1' className='form-label'>
					B Day
				</label>
				<input
					name='userDate'
					value={date}
					onChange={dateHandler}
					type='date'
					className='form-control'
					id='exampleInputPassword1'
					placeholder='B DAY'
				/>
			</div>
			<div className='mb-3 form-check'>
				<select name='gender' label='Пол' value={gender} onChange={genderHandler} className='form-check-input' id='exampleCheck1'>
					<option value='male'>мужской</option>
					<option value='female'>женский</option>
					<option value='other'>дивергент</option>
				</select>
				<label className='form-check-label' for='exampleCheck1'>
					Gender
				</label>
			</div>
			<div className='mb-3'>
				<label for='exampleInputPassword1' className='form-label'>
					Адрес
				</label>
				<input
					name='address'
					value={values.address || ""}
					onChange={changeHandler}
					type='text'
					className='form-control'
					id='exampleInputPassword1'
					placeholder='Город Улица дом'
				/>
			</div>
			<button type='submit' className='btn btn-primary'>
				Submit
			</button>
		</form>
	)
}
