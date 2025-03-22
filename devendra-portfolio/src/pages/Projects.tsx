import { Card, Col, Row } from 'antd'

const projects = [
  {
    title: 'Clinical Workflow Tool',
    description: 'React + Canvas tool for clinical data modeling',
    url: 'https://github.com/devpandya/workflow-tool',
  },
  {
    title: 'Microfrontend Boilerplate',
    description: 'Plug-and-play microfrontend system using Webpack Module Federation',
    url: 'https://github.com/devpandya/microfrontend-starter',
  },
]

const Projects = () => (
  <div style={{ padding: '2rem' }}>
    <Row gutter={[16, 16]}>
      {projects.map((p, i) => (
        <Col xs={24} sm={12} md={8} key={i}>
          <Card title={p.title} bordered extra={<a href={p.url}>GitHub</a>}>
            {p.description}
          </Card>
        </Col>
      ))}
    </Row>
  </div>
)

export default Projects
