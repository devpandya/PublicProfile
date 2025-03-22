import { Menu } from 'antd'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()
  const current = location.pathname

  return (
    <Menu mode="horizontal" selectedKeys={[current]} theme="dark">
      <Menu.Item key="/"><Link to="/">Home</Link></Menu.Item>
      <Menu.Item key="/projects"><Link to="/projects">Projects</Link></Menu.Item>
      <Menu.Item key="/blog"><Link to="/blog">Blog</Link></Menu.Item>
      <Menu.Item key="/contact"><Link to="/contact">Contact</Link></Menu.Item>
    </Menu>
  )
}

export default Navbar
