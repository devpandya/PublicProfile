import { Form, Input, Button } from 'antd'

const Contact = () => (
  <div style={{ maxWidth: 600, margin: 'auto', padding: '2rem' }}>
    <Form layout="vertical">
      <Form.Item label="Name">
        <Input placeholder="Your Name" />
      </Form.Item>
      <Form.Item label="Email">
        <Input type="email" placeholder="Your Email" />
      </Form.Item>
      <Form.Item label="Message">
        <Input.TextArea placeholder="Write your message..." rows={4} />
      </Form.Item>
      <Button type="primary">Send Message</Button>
    </Form>
  </div>
)

export default Contact
