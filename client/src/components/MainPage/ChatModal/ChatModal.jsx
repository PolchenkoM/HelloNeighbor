
import { Input } from "antd"
import { CameraOutlined, SmileOutlined, SendOutlined, PaperClipOutlined, } from "@ant-design/icons"
import SmilesModal from "../../Modals/SmilesModal/SmilesModal"
import React, { useEffect, useRef, useState } from "react"
import {useSelector} from 'react-redux'

const { TextArea } = Input

export default function ChatModal() {

	const socket = useRef()
  const [messages, setMessages] = useState([])
  console.log('ddddddddddddddddddddddddddddddddd', messages);
  const sortMessages = messages.sort((a,b) => a.id -b.id)
  console.log('aaaaaaaaaaaaaaaaaaaaaaaa',sortMessages);
	const [value, setValue] = useState("")
	const [connected, setConnected] = useState(false)
	const [username, setUsername] = useState("")
  const currentUser = useSelector(state => state.users.currentUser)

  const sortMessagesRef = useRef(null)

	function connect() {
		socket.current = new WebSocket("ws://localhost:5000")

		socket.current.onopen = () => {
			if (currentUser) {
        const message = {
				event: "connection",
				currentUser,
				id: Date.now()
			}
			socket.current.send(JSON.stringify(message))
      }
		
		}

		socket.current.onmessage = (event) => {
			const message = JSON.parse(event.data)
			setMessages((prev) => [message, ...prev])
		}

		socket.current.onclose = () => {
			console.log("Socket закрыт")
		}

		socket.current.onerror = () => {
			console.log("Socket произошла ошибка")
		}
	}

useEffect(() => {
  sortMessagesRef.current.scrollTo(0,9999)
}, [sortMessages])

  const handleUserKeyPress = e => {
    if (e.key === "Enter" && !e.shiftKey) {
      // e.preventDefault();
      // handleSubmit(onSubmit); // this won't be triggered
      sendMessage()
    }
};
	const sendMessage = async () => {
    
     const message = {
			currentUser,
			message: value,
			id: Date.now(),
			event: "message"
		}
		socket.current.send(JSON.stringify(message))
		setValue("") 
    
		
	}


  useEffect(() => {
    if (currentUser) {
      connect()
    }
  }, [currentUser])


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
					<div ref={sortMessagesRef}  className='chat__body'>
						<div className='chat__content'>
							<div   className='chat__message'>
              {sortMessages.map((mess) => (
						<div  className="chat__message-person" key={mess.id}>
                <>
                <img  className='chat__user-avatar' src={`http://localhost:3001/${currentUser.avatar}`} alt='' />
								<p className='chat__text'>
									{mess.message}
								</p>
                </>
						</div>
					))}
							</div>
						</div>
					</div>
					<div className='chat__footer'>
						<div className='container-chatInput'>
							<PaperClipOutlined className='button chat__addFileIcon' onClick={addFile} />
							<textarea onKeyPress={handleUserKeyPress} value={value} onChange={(e) => setValue(e.target.value)} className='chat__chatInput' placeholder='Напишите сообщение...' />
							<SmileOutlined className='button chat__smileOutlined' onClick={showSmiles} />
							{/* <SmilesModal/> */}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
