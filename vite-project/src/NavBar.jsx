import logo from './assets/react.svg'


function NavBar() {
  return(
  <nav className="nav-bar">
    <div className="logoSection">
      <img src={logo} alt="" />
      <h1>React Facts</h1>
    </div>
    <h2>React Course - Project 1</h2>
  </nav>
  )
}

export default NavBar