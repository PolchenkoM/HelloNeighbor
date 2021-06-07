import moment from 'moment'
import {
	Form,
	Input,
	Button,
	DatePicker,
	Select,
	Checkbox,
	Row,
	Col,
	Upload,
  Tag
} from 'antd'
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import useForm from '../../hooks/useForm'


const { Option } = Select
const layout = {
  labelCol: { span: 8 },
	wrapperCol: { span: 16 },
}
const config = {
  rules: [{ type: 'object', required: true, message: 'Please select time!' }],
}


/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
	types: {
    email: '${label} is not a valid email!',
		number: '${label} is not a valid number!',
	},
	number: {
		range: '${label} must be between ${min} and ${max}',
	},
}

export default function Profile() {
  const [values, changeHandler] = useForm()
  //tags
  const { CheckableTag } = Tag; 
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  //tags
  useEffect(() => {
    fetch("http://localhost:3001/tags")
      .then((res) => res.json())
      .then((result) => setTags(result));
  }, []);

  function handleChange(tag, checked) {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag);
    console.log("You are interested in: ", nextSelectedTags);
    setSelectedTags(nextSelectedTags)
  }
  //date func
  const [date,setDate] = useState('')
  const dateHandler = (e) => {
    const date = new Date(e._d)
    const normData = moment(date)
    const dataDa = normData.format('YYYY-MM-DD')
    setDate(prev => dataDa)
  }
  //date func

	const onFinish = (values: any) => {
		console.log(values)
	}
  const normFile = (e: any) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  }

  const profileSubmit = (e) => {
    e.preventDefault()

    console.log(values)
  }

	return (
		<>
			<Form
				{...layout}
				name='nest-messages'
				onFinish={onFinish}
				validateMessages={validateMessages}
				initialValues={{
					residence: ['zhejiang', 'hangzhou', 'xihu'],
					prefix: '86',
				}}
        id='profileForm'
			>
				<Form.Item name={['user', 'name']} label='Имя'>
					<Input name="name" value={values.name || ""} onChange={changeHandler}/>
				</Form.Item>
				<Form.Item name='userDate' label='Дата рождения' {...config}>
					<DatePicker name="userDate" value={date} onChange={dateHandler}/>
				</Form.Item>
				<Form.Item
					name='gender'
					label='Пол'
					rules={[{ required: true, message: 'Please select gender!' }]}
				>
					<Select placeholder='select your gender' name="gender" >
						<Option value='male'>мужской</Option>
						<Option value='female'>женский</Option>
						<Option value='other'>дивергент</Option>
					</Select>
				</Form.Item>
				<Form.Item
					label='Адрес'
					rules={[{ required: true, message: 'Please select address!' }]}
				>
					<Input.Group compact>
						<Form.Item
							name={['address', 'address']}
							noStyle
							rules={[{ required: true, message: 'Street is required!' }]}
						>
							<Input
								style={{ width: '50%' }}
								placeholder='Город, улица, дом'
                name="address"
                value={values.address || ""} onChange={changeHandler}
							/>
						</Form.Item>
					</Input.Group>
				</Form.Item>
				<Form.Item name={['user', 'aboutSelf']} label='О себе'>
					<Input.TextArea name="aboutSelf" value={values.aboutSelf || ""} onChange={changeHandler}/>
				</Form.Item>
				<Form.Item name='tags' label='Тэги' >
					<Checkbox.Group>

					</Checkbox.Group>
				</Form.Item>
				<Form.Item
					name='avatar'
					label='Фото'
					valuePropName='fileList'
					getValueFromEvent={normFile}
					extra='longgggggggggggggggggggggggggggggggggg'
				>
					<Upload name='logo' action='/upload.do' listType='picture'>
						<Button icon={<UploadOutlined />}>Click to upload</Button>
					</Upload>
				</Form.Item>
        <>
            {tags.map((tag) => (
              <CheckableTag
                key={tag._id}
                checked={selectedTags.indexOf(tag) > -1}
                onChange={(checked) => handleChange(tag, checked)}
              >
                {tag.title}
              </CheckableTag>
            ))}
          </>
				<Form.Item label='Dragger'>
					<Form.Item
						name='dragger-avatar'
						valuePropName='fileList'
						getValueFromEvent={normFile}
						noStyle
					>
						<Upload.Dragger name='files' action='/upload.do'>
							<p className='ant-upload-drag-icon'>
								<InboxOutlined />
							</p>
							<p className='ant-upload-text'>
								Click or drag file to this area to upload
							</p>
							<p className='ant-upload-hint'>
								Support for a single or bulk upload.
							</p>
						</Upload.Dragger>
					</Form.Item>
				</Form.Item>
				<Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
					<Button type='primary' htmlType='submit' onClick={profileSubmit}>
						Submit
					</Button>
				</Form.Item>
			</Form>
		</>
	)
}
