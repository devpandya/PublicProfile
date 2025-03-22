import { Card } from "antd"

const posts = [
    {
      title: 'Breaking Down Microfrontends',
      link: 'https://medium.com/@devendrapandya/microfrontends-guide',
      summary: 'A hands-on guide for modular frontend architecture.'
    },
    {
      title: 'Why React + Node is Still King',
      link: 'https://medium.com/@devendrapandya/react-node-stack',
      summary: 'Power of full stack JS in 2025.'
    },
  ]
  
  const Blog = () => (
    <div style={{ padding: '2rem' }}>
      {posts.map((post, i) => (
        <Card title={post.title} extra={<a href={post.link} target="_blank">Read</a>} style={{ marginBottom: '1rem' }} key={i}>
          {post.summary}
        </Card>
      ))}
    </div>
  )
  
  export default Blog