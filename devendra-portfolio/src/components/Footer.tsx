import { Layout } from 'antd'
const { Footer } = Layout

export default () => (
  <Footer style={{ textAlign: 'center' }}>
    © {new Date().getFullYear()} Devendra Pandya. Built with ❤️ in React.
  </Footer>
)
