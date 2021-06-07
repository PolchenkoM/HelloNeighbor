import {
	Form,
	Input,
	InputNumber,
	Button,
	DatePicker,
	Select,
	Cascader,
	Checkbox,
	Row,
	Col,
	Upload,
} from 'antd'
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
import { useState } from 'react';
import useForm from '../../hooks/useForm'

const { Option } = Select
const layout = {
	labelCol: { span: 8 },
	wrapperCol: { span: 16 },
}
const config = {
	rules: [{ type: 'object', required: true, message: 'Please select time!' }],
}
const residences = [
	{
		value: 'zhejiang',
		label: 'Zhejiang',
		children: [
			{
				value: 'hangzhou',
				label: 'Hangzhou',
				children: [
					{
						value: 'xihu',
						label: 'West Lake',
					},
				],
			},
		],
	},
	{
		value: 'jiangsu',
		label: 'Jiangsu',
		children: [
			{
				value: 'nanjing',
				label: 'Nanjing',
				children: [
					{
						value: 'zhonghuamen',
						label: 'Zhong Hua Men',
					},
				],
			},
		],
	},
]

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
  const [values, changeHandler] = useForm()
  console.log('---------------', values)
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
					<DatePicker name="userDate" />
				</Form.Item>
				<Form.Item
					name='gender'
					label='Пол'
					rules={[{ required: true, message: 'Please select gender!' }]}
				>
					<Select placeholder='select your gender' name="gender" value={values.gender || ""} onChange={changeHandler}>
						<Option value='male'>мужской</Option>
						<Option value='female'>женский</Option>
						<Option value='other'>дивергент</Option>
					</Select>
				</Form.Item>
				<Form.Item
					label='Адрес'
					rules={[{ required: true, message: 'Please select gender!' }]}
				>
					<Input.Group compact>
						<Form.Item
							name={['address', 'address']}
							noStyle
							rules={[{ required: true, message: 'Street is required' }]}
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
						<Row>
							<Col span={8}>
								<Checkbox value='A' style={{ lineHeight: '32px' }}>
									A
								</Checkbox>
							</Col>
							<Col span={8}>
								<Checkbox value='B' style={{ lineHeight: '32px' }}>
									B
								</Checkbox>
							</Col>
							<Col span={8}>
								<Checkbox value='C' style={{ lineHeight: '32px' }}>
									C
								</Checkbox>
							</Col>
							<Col span={8}>
								<Checkbox value='D' style={{ lineHeight: '32px' }}>
									D
								</Checkbox>
							</Col>
							<Col span={8}>
								<Checkbox value='E' style={{ lineHeight: '32px' }}>
									E
								</Checkbox>
							</Col>
							<Col span={8}>
								<Checkbox value='F' style={{ lineHeight: '32px' }}>
									F
								</Checkbox>
							</Col>
						</Row>
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
