import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import { GithubOutlined, LinkedinOutlined, MailOutlined, MediumOutlined } from '@ant-design/icons'

export default function App() {
  return (
    <>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <footer style={{ background: '#0d1a26', color: '#ffffff', textAlign: 'center', padding: '40px 20px' }}>
        <div style={{ marginBottom: '16px' }}>
          <a href="https://github.com/devpandya" target="_blank" rel="noopener noreferrer" style={{ margin: '0 12px', fontSize: '20px', color: '#ffffff' }}>
            <GithubOutlined />
          </a>
          <a href="https://linkedin.com/in/devendra-pandya" target="_blank" rel="noopener noreferrer" style={{ margin: '0 12px', fontSize: '20px', color: '#ffffff' }}>
            <LinkedinOutlined />
          </a>
          <a href="https://medium.com/@devendrapandya" target="_blank" rel="noopener noreferrer" style={{ margin: '0 12px', fontSize: '20px', color: '#ffffff' }}>
            <MediumOutlined />
          </a>
          <a href="mailto:devendrapandya86@gmail.com" style={{ margin: '0 12px', fontSize: '20px', color: '#ffffff' }}>
            <MailOutlined />
          </a>
        </div>
        <div style={{ fontSize: '14px' }}>
          © {new Date().getFullYear()} Devendra Pandya. All rights reserved.
        </div>
      </footer>
    </>
   
  )
}
