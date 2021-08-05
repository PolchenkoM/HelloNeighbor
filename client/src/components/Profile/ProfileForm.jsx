import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Input, Button, DatePicker, Select, Checkbox, Tag } from 'antd'
import moment from 'moment'
import {
	updateUserThunk,
	getCurrentUserGoogleThunk,
} from '../../redux/Actions/usersAC'
import useForm from '../../hooks/useForm'
import { setError } from '../../redux/Actions/errorAC'

const layout = {
	labelCol: { span: 8 },
	wrapperCol: { span: 16 },
}

export default function ProfileForm() {
	const dispatch = useDispatch()
	const currentUser = useSelector(state => state.users.currentUser)
	const error = useSelector(state => state.error.message)
	const formData = new FormData()

	const [values, changeHandler] = useForm()
	const [profile, setProfile] = useState({
		name: '',
		gender: '',
		date: '',
		address: '',
		selectedTags: [],
		drag: null,
	})
	//tags
	const [tags, setTags] = useState([])
	useEffect(() => {
		fetch('http://localhost:3001/tags')
			.then(res => res.json())
			.then(result => setTags(result))
	}, [])
	function tagHandler(tag, checked) {
    if (checked) {
      setProfile(prev => ({...prev, selectedTags: [...prev.selectedTags, tag]}))
    } else {
      setProfile(prev => ({...prev, selectedTags: prev.selectedTags.filter(i => i !== tag)}))
    }
	}
	//date
	const dateHandler = e => {
		const date = moment(new Date(e._d))
		const dateNormal= date.format('YYYY-MM-DD')
		setProfile(prev => ({...prev, date: dateNormal}))
	}
	//gender
	const genderHandler = e => {
		setProfile(prev => ({ ...prev, gender: e }))
	}
	//avatar
	const [drag, setDrag] = useState(false)
	const dragStartHandler = e => {
		e.preventDefault()
		setDrag(true)
	}
	const dragLeaveHandler = e => {
		e.preventDefault()
		setDrag(false)
	}

	const onDropHandler = e => {
		e.preventDefault()
		let file = [...e.dataTransfer.files]
		formData.append('avatar', file[0])
	}

	const profileSubmit = e => {
		e.preventDefault()
		if (!profile.date || !profile.gender || !values.address || !values.name) {
			dispatch(setError('Пожалуйста, заполните необходимые поля'))
			return
		}
		const body = {
			...values,
			age: profile.date,
			gender: profile.gender,
			tags: profile.selectedTags,
			id: currentUser._id,
		}
		formData.append('profile', JSON.stringify(body))
		dispatch(updateUserThunk(formData))
		dispatch(getCurrentUserGoogleThunk(localStorage.email))
		dispatch(setError(''))
	}

	return (
		<>
			<div className='container--profile'>
				<Form
					{...layout}
					name='nest-messages'
					initialValues={{
						residence: ['zhejiang', 'hangzhou', 'xihu'],
						prefix: '86',
					}}
					id='profileForm'
					className='profile'
				>
					{
						<h2 className='error error--form'>
							{error}
						</h2>
					}
					<Form.Item
						name={['user', 'name']}
						label='Имя'
						rules={[{ required: true, message: 'Please input your username!' }]}
					>
						<Input
							name='name'
							placeholder='Введите ваше имя'
							value={values.name || ''}
							onChange={changeHandler}
						/>
					</Form.Item>
					<Form.Item name='userDate' label='Дата рождения' required={true}>
						<DatePicker
							placeholder='Выберите дату рождения...'
							name='userDate'
							value={profile.date}
							onChange={dateHandler}
							style={{ width: '230px' }}
						/>
					</Form.Item>
					<Form.Item
						name='gender'
						label='Пол'
						rules={[{ required: true, message: 'Please select gender!' }]}
					>
						<Select
							placeholder='Выберите пол'
							name='gender'
							value={profile.gender}
							onChange={genderHandler}
						>
							<Select.Option value='male'>мужской</Select.Option>
							<Select.Option value='female'>женский</Select.Option>
						</Select>
					</Form.Item>
					<Form.Item
						name={['address', 'address']}
						label='Адрес'
						rules={[{ required: true, message: 'Please select address!' }]}
					>
						<Input
							placeholder='Город, улица, дом'
							name='address'
							value={values.address || ''}
							onChange={changeHandler}
						/>
					</Form.Item>
					<Form.Item name={['user', 'aboutSelf']} label='О себе'>
						<Input.TextArea
							name='aboutSelf'
							placeholder='Описание...'
							value={values.aboutSelf || ''}
							onChange={changeHandler}
						/>
					</Form.Item>
					<Form.Item name='tags' label='Тэги'>
						<Checkbox.Group>
							<>
								{tags?.map(tag => (
									<Tag.CheckableTag
										className='tags_form-tag'
										key={tag._id}
										checked={profile.selectedTags.includes(tag)}
										onChange={checked => tagHandler(tag, checked)}
									>
										{tag.title}
									</Tag.CheckableTag>
								))}
							</>
						</Checkbox.Group>
					</Form.Item>
					<div className='droparea-wrapper'>
						<div
							className='droparea'
							onDragStart={e => dragStartHandler(e)}
							onDragLeave={e => dragLeaveHandler(e)}
							onDragOver={e => dragStartHandler(e)}
							onDrop={e => onDropHandler(e)}
						>
							{drag ? <span>Отпустите</span> : <span>Перетащите фото</span>}
						</div>
					</div>
					<Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
						<Button type='primary' htmlType='submit' onClick={profileSubmit}>
							Submit
						</Button>
					</Form.Item>
				</Form>
			</div>
		</>
	)
}
