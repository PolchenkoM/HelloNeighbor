import { Link } from 'react-router-dom'
export default function Friend({ name, onlineStatus }) {
	return (
		<>
			<li className='friend friends__friend'>
				<div className='friend-content'>
					<div className='friend__avatar-wrapper'>
						<img
							className='friend__avatar'
							src='./img/caruselPhotos/image1.jpeg'
							alt=''
						/>
						{onlineStatus ? <span className='onlineStatus'></span> : ''}
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
							<button className='button friend__message-btn'>
								Написать сообщение
							</button>
						</div>
					</div>
				</div>
			</li>
		</>
	)
}
