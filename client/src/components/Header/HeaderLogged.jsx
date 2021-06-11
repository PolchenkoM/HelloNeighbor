import { useDispatch, useSelector } from 'react-redux'
import { addEventModal } from '../../redux/Actions/eventAC'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { changeCircleColor } from "../../redux/Actions/eventAC";




export default function HeaderLogged() {

	const dispatch = useDispatch()

	const createEvent = () => {
		dispatch(changeCircleColor())
		dispatch(addEventModal())
	}

	return (
		<>
			<header className='header'>
				<nav className='navbar header__navbar'>
					<ul className='list navbar__list list-logged'>
						<li className='list__item'>
							<Link to='/'>
								<img
									className='header__image'
									src='/img/logo.jpg'
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
