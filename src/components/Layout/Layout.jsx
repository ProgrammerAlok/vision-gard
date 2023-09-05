import './layout.css'

const Layout = ({ children }) => {
  return (
    <div className='layout-container'>
      <div className="layout-container-box1"></div>
      <div className="layout-container-box2"></div>
      <div className="layout-container-box3"></div>

      {children}
    </div>
  )
}

export default Layout
