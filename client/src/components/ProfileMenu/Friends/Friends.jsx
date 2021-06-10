import { useState } from "react"
import UserMenuSider from "../../MainPage/UserMenuSider/UserMenuSider"
import Friend from "./Friend"

export default function Friends() {
	const friendsArray = [
		{
			name: "Danil",
			onlineStatus: false,
			age: 10,
			gender: "мужской",
			tags: ["1tag, 2tag, 3tag"],
			aboutSelf: "lalala1",
			rating: "5",
			regDate: "06-06-11",
			avatar: "типо ава",
			address: "adress1"
		},
		{
			name: "Shamil",
			onlineStatus: true,
			age: 20,
			gender: "мужской",
			tags: ["1tag, 2tag, 3tag"],
			aboutSelf: "lalala2",
			rating: "5",
			regDate: "06-06-22",
			avatar: "типо ава",
			address: "adress2"
		},
		{
			name: "Maksil",
			onlineStatus: true,
			age: 30,
			gender: "мужской",
			tags: ["1tag, 2tag, 3tag"],
			aboutSelf: "lalala3",
			rating: "5",
			regDate: "06-06-33",
			avatar: "типо ава",
			address: "adress3"
		},
		{
			name: "test",
			onlineStatus: false,
			age: 40,
			gender: "мужской",
			tags: ["1tag, 2tag, 3tag"],
			aboutSelf: "test",
			rating: "test",
			regDate: "test",
			avatar: "test",
			address: "test"
		}
	]

	const [showOnline, setShowOnline] = useState(false)
	// name={friend.name} age={age} gender={gender} tags={tags} aboutSelf={aboutSelf} rating={rating} regDate={regDate} avatar={avatar} address={address}

	function showFriendsOnline() {
		return friendsArray
			.filter((friend) => friend.onlineStatus === true)
			.map((friend) => <Friend name={friend.name} onlineStatus={friend.onlineStatus} />)
	}
	function showFriendsAll() {
		return friendsArray
			.sort((b, a) => a.onlineStatus - b.onlineStatus)
			.map((friend) => <Friend name={friend.name} onlineStatus={friend.onlineStatus} />)
	}

	return (
		<>
				<div className='container--friends'>
					<div className='friendsMenu'>
						<button
							className={!showOnline ? 'button friendsMenu__button friendsMenu__button--active': 'button friendsMenu__button'}
							onClick={() => setShowOnline(false)}
						>
							Все друзья
						</button>
						<button
							className={showOnline ? 'button friendsMenu__button friendsMenu__button--active': 'button friendsMenu__button'}
							onClick={() => setShowOnline(true)}
						>
							Онлайн
						</button>
					</div>
					<div className='friends-wrapper'>
						<ul className='friends'>
							{showOnline ? showFriendsOnline() : showFriendsAll()}
						</ul>
					</div>
				</div>
		</>
	)
}
