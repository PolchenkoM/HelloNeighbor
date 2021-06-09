import { Input } from 'antd'
import {
	CameraOutlined,
	SmileOutlined,
	SendOutlined,
	PaperClipOutlined,
} from '@ant-design/icons'
import SmilesModal from '../../Modals/SmilesModal/SmilesModal'
import { useDispatch } from 'react-redux'
import { changeChatModalVisibility } from '../../../redux/Actions/modalAC'

const { TextArea } = Input

export default function ChatModal() {
  const dispatch = useDispatch()

  function showSmiles() {

  }
  function addFile() {
    
  }
  function closeChatModal() {
    dispatch(changeChatModalVisibility())
  }


	return (
		<>
			<div className='chat-container'>
				<div className='chat'>
          <button className="button closeChatButton" onClick={closeChatModal}></button>
					<div className='chat__header'>
						<h4 className='chat__title'>chat title</h4>
					</div>
					<div className='chat__body'>
						<div className='chat__content'>
							<div className='chat__message'>
								<img
									className='chat__user-avatar'
									src='/img/randomLogo.jpg'
									alt=''
								/>
								<p className='chat__text'>Lorem ipsum dolor sit amet.</p>
							</div>
						</div>
					</div>
					<div className='chat__footer'>
						<div className='chat__chatInput-container'>
							<PaperClipOutlined className='button chat__addFileIcon' onClick={addFile}/>
							<textarea
								className='chat__chatInput'
								placeholder='Напишите сообщение...'
							/>
							<SmileOutlined className='button chat__smileOutlined' onMouseOver={showSmiles}/>
              <SmilesModal/>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
