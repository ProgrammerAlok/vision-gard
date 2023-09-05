import './navbar.css'
import IMG from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <nav className="navBox">
        <ul>
          <li>
            <img src={IMG} alt="vision-gard-img" className="logo" />
          </li>
          <li className="text">VISIONGUARD</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
