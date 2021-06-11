import { useDispatch, useSelector } from 'react-redux'
import { addEventModal } from '../../redux/Actions/eventAC'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'



export default function HeaderLogged() {

	const dispatch = useDispatch()

	const createEvent = () => {
		console.log(123)
		dispatch(addEventModal())
	}

	return (
		<>
			<header className='header'>
				<nav className='navbar header__navbar'>
					<ul className='list navbar__list'>
						<li className='list__item'>
							<Link to='/'>
								<img
									className='header__image'
									src='/img/randomLogo.jpg'
									alt='SITE LOGO'
								/>
							</Link>
						</li>
						<li className='list__item'>
							<button className="button list__item-createEvent" onClick={createEvent}>Создать ивент</button>
						</li>
						<li className='list__item'>
							<Link to='/products' className='list__item-link'>
								Продукты
							</Link>
						</li>
					</ul>
				</nav>
			</header>
		</>
	)
}
