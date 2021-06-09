// import React, { useEffect } from 'react';
// import { Widget, addResponseMessage } from 'react-chat-widget';

// import 'react-chat-widget/lib/styles.css';

// export default function ChatModal() {
// 	useEffect(() => {
// 		addResponseMessage('Welcome to this awesome chat!')
// 	}, [])

// 	const handleNewUserMessage = newMessage => {
// 		console.log(`New message incoming! ${newMessage}`)
// 		// Now send the message throught the backend API
// 	}

// 	return (
// 		<>
// 			<Widget
// 				handleNewUserMessage={handleNewUserMessage}
// 				profileAvatar={'./img/caruselPhotos/image2.jpeg'}
// 				title='eventName here'
// 				subtitle='здесь могут быть совпадающие теги'
//         senderPlaceHolder='Напишите сообщение...'
//         showCloseButton={true}
// 			/>
// 		</>
// 	)
// }
import { Input } from "antd"
import { CameraOutlined, SmileOutlined, SendOutlined, PaperClipOutlined } from "@ant-design/icons"
import SmilesModal from "../../Modals/SmilesModal/SmilesModal"

const { TextArea } = Input

export default function ChatModal() {
	function showSmiles() {
		const smiles = document.querySelector(".smiles-container")
		smiles.classList.toggle(".smiles-container--hidden")
	}
	function addFile() {}

	return (
		<>
			<div className='container-chat'>
				<div className='chat'>
					<div className='chat__header'>
						<h4 className='chat__title'>chat title</h4>
					</div>
					<div className='chat__body'>
						<div className='chat__content'>
							<div className='chat__message'>
								<img className='chat__user-avatar' src='/img/randomLogo.jpg' alt='' />
								<p className='chat__text'>Lorem ipsum dolor sit amet.</p>
							</div>
						</div>
					</div>
					<div className='chat__footer'>
						<div className='container-chatInput'>
							<PaperClipOutlined className='button chat__addFileIcon' onClick={addFile} />
							<textarea className='chat__chatInput' placeholder='Напишите сообщение...' />
							<SmileOutlined className='button chat__smileOutlined' onClick={showSmiles} />
							{/* <SmilesModal/> */}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
