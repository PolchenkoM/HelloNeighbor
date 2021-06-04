import LogBar from './LogBar/LogBar'
import Navbar from './Navbar/Navbar'
import style from './Header.sass'
import logo from './randomLogo.jpg'

export default function Header() {
	return (
		<>
			<header className="header">
				<img height='50px' src={logo} alt='SITE LOGO' />
				<Navbar />
				<LogBar />
			</header>
		</>
	)
}
