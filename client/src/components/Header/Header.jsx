import { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { addEventModal } from '../../redux/Actions/eventAC';
import LogBar from './LogBar/LogBar'
import Navbar from './Navbar/Navbar'


export default function Header() {
  const dispatch = useDispatch()

  const isUser = useSelector(state => state.users.currentUser)
  
  const createEvent = () => {
    console.log(123);
    dispatch(addEventModal())
  };

	return (
		<>
			<header className="header">
				<img height='50px' src='/img/randomLogo.jpg' alt='SITE LOGO' />
				<Navbar />
				{isUser.email ? <button onClick={createEvent} >ADD EVENT</button> : <LogBar />}
			</header>
		</>
	)
}
