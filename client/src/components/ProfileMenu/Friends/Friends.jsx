import { Header } from 'antd/lib/layout/layout'
import { useState } from 'react'
import Friend from './Friend'

export default function Friends() {
	const friendsArray = [
		{
			name: 'Danil',
			onlineStatus: false,
		},
		{
			name: 'Shamil',
			onlineStatus: true,
		},
		{
			name: 'Maksil',
			onlineStatus: true,
		},
	]

	const [onlineFriends, setOnlineFriends] = useState(false)

  function showFriendsOnline() {
    return friendsArray.filter( friend => friend.onlineStatus === 'true')
    .map(friend => (
      <Friend name={friend.name} />
    ))
  }
  function showFriendsAll() {
    return friendsArray.map(friend => (
      <Friend name={friend.name} />
    ))
  }

	return (
		<>
			<div className='container'>
				<div className='friendsMenu'>
					<button className='button'>Все друзья</button>
					<button className='button'>Онлайн</button>
				</div>
				<ul className='friends'>
          {onlineFriends ? showFriendsOnline : showFriendsAll}
          </ul>
			</div>
		</>
	)
}
