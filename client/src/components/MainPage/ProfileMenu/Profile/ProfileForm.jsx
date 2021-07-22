import moment from "moment"
import { Form, Input, Button, DatePicker, Select, Checkbox, Tag } from "antd"

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useForm from '../../../hooks/useForm'
import { updateUserThunk, getCurrentUserGoogleThunk } from '../../../../redux/Actions/usersAC'

const { Option } = Select;
const layout = {
	labelCol: { span: 8 },
	wrapperCol: { span: 16 }
}
const config = {
	rules: [{ type: "object", required: true, message: "Please select time!" }]
}

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
	required: "${label} is required!",
	types: {
		email: "${label} is not a valid email!",
		number: "${label} is not a valid number!"
	},
	number: {
		range: "${label} must be between ${min} and ${max}"
	}
}

export default function ProfileForm() {
	const dispatch = useDispatch()
	const currentUser = useSelector((state) => state.users.currentUser)
	const formData = new FormData()

  const [values, changeHandler] = useForm();
  //tags
  const { CheckableTag } = Tag;
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

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


	const onFinish = (values: any) => {
	}
  const [formError, setFormError] = useState('')

	const profileSubmit = (e) => {
		e.preventDefault()
    if (!date || !gender || !values.address || !values.name) {
      setFormError('Пожалуйста, заполните все поля')
      return
    }
		const profile = {
			...values,
			age: date,
			gender: gender,
			tags: selectedTags,
			id: currentUser._id
		}
		formData.append("profile", JSON.stringify(profile))
		dispatch(updateUserThunk(formData))
		dispatch(getCurrentUserGoogleThunk(localStorage.email))
    setFormError('')
	}

	return (
		<>
			<div className='container--profile'>
				<Form
					{...layout}
					name='nest-messages'
					onFinish={onFinish}
					validateMessages={validateMessages}
					initialValues={{
            residence: ["zhejiang", "hangzhou", "xihu"],
						prefix: "86"
					}}
					id='profileForm'
					className='profile'
          >
          {<h2 style={{color: 'red', margin: '5px', textAlign: 'center' }}>{formError}</h2>}
					<Form.Item name={["user", "name"]} label='Имя'>
						<Input name='name' value={values.name || ""} onChange={changeHandler} />
					</Form.Item>
					<Form.Item name='userDate' label='Дата рождения' {...config}>
						<DatePicker name='userDate' value={date} onChange={dateHandler} />
					</Form.Item>
					<Form.Item name='gender' label='Пол' rules={[{ required: true, message: "Please select gender!" }]}>
						<Select placeholder='select your gender' name='gender' value={gender} onChange={genderHandler}>
							<Option value='male'>мужской</Option>
							<Option value='female'>женский</Option>
						</Select>
					</Form.Item>
					<Form.Item label='Адрес' rules={[{ required: true, message: "Please select address!" }]}>
						<Input.Group compact>
							<Form.Item name={["address", "address"]} noStyle rules={[{ required: true, message: "Street is required!" }]}>
								<Input
									style={{ width: "50%" }}
									placeholder='Город, улица, дом'
									name='address'
									value={values.address || ""}
									onChange={changeHandler}
								/>
							</Form.Item>
						</Input.Group>
					</Form.Item>
					<Form.Item name={["user", "aboutSelf"]} label='О себе'>
						<Input.TextArea name='aboutSelf' value={values.aboutSelf || ""} onChange={changeHandler} />
					</Form.Item>
					<Form.Item name='tags' label='Тэги'>
						<Checkbox.Group>
							<>
								{tags?.map((tag) => (
									<CheckableTag className='tags_form-tag' key={tag._id} checked={selectedTags.indexOf(tag) > -1} onChange={(checked) => handleChange(tag, checked)}>
										{tag.title}
									</CheckableTag>
								))}
							</>
						</Checkbox.Group>
					</Form.Item>
					<div className='droparea-wrapper'>
						<div
							className='droparea'
							onDragStart={(e) => dragStartHandler(e)}
							onDragLeave={(e) => dragLeaveHandler(e)}
							onDragOver={(e) => dragStartHandler(e)}
							onDrop={(e) => onDropHandler(e)}
						>
							{drag ? <span>Отпустите</span> : <span>Перетащите фото</span>}
						</div>
					</div>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit" onClick={profileSubmit}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}
