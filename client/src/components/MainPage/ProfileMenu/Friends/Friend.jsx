import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { changeChatModalVisibility } from '../../../../redux/Actions/modalAC'
import ChatModal from '../../../MainPage/ChatModal/ChatModal'
export default function Friend({ name, onlineStatus, avatar }) {

  const chatVisibility = useSelector(state => state.modals.chatModalVisible)
  const dispatch = useDispatch()

  function showChatModal() {
    dispatch(changeChatModalVisibility())
  }

	return (
		<>
			<li className='friend friends__friend'>
				<div className='friend-content'>
					<div className='friend__avatar-wrapper'>
						<img
							className='friend__avatar'
							src={`http://localhost:3001/${avatar}`}
							alt=''
						/>
						{onlineStatus ? <span className='friend__onlineStatus-mark'></span> : ''}
					</div>
					<div className='friend-content__main'>
						<div className='friend-content__main--top'>
							<Link className='friend__link'>
								<span className='friend__name'>{name}</span>
							</Link>
							<span className='friend__onlineStatus'>
								{onlineStatus ? 'Онлайн' : ''}
							</span>
						</div>
						<div className='friend-content__main--bottom'>
							<button className='button friend__message-btn' onClick={showChatModal}>
								Написать сообщение
							</button>
						</div>
					</div>
				</div>
        {chatVisibility ? <ChatModal/> : '' }
			</li>
		</>
	)
}
