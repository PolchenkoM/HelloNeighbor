import LogBar from './LogBar/LogBar'
import Navbar from './Navbar/Navbar'

export default function Header() {
  
	return (
		<>
			<header className="header">
				<img height='50px' src='/img/randomLogo.jpg' alt='SITE LOGO' />
				<Navbar />
				<LogBar />
			</header>
		</>
	)
}
