import Navbar from './components/Navbar/Navbar'

// eslint-disable-next-line react/prop-types
const Layout = ({children}) => {
  return (
    <div>
      <Navbar/>
      <main>
      {children}
      </main>
    
    </div>
  )
}

export default Layout
