import React, { useEffect } from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';


export default function ChatModal() {
	useEffect(() => {
		addResponseMessage('Welcome to this awesome chat!')
	}, [])

	const handleNewUserMessage = newMessage => {
		console.log(`New message incoming! ${newMessage}`)
		// Now send the message throught the backend API
	}

	return (
		<>
			<Widget
				handleNewUserMessage={handleNewUserMessage}
				profileAvatar={'./img/caruselPhotos/image2.jpeg'}
				title='eventName here'
				subtitle='здесь могут быть совпадающие теги'
        senderPlaceHolder='Напишите сообщение...'
        showCloseButton={true}
			/>
		</>
	)
}
