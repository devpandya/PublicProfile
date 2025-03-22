// Responsive homepage with hamburger menu and mobile optimizations
import { useState, useEffect } from "react";
import {
  Layout,
  Typography,
  Row,
  Col,
  Card,
  Tag,
  Button,
  Timeline,
  Drawer,
  Menu,
  Grid,
} from "antd";
import {
  LinkedinOutlined,
  MailOutlined,
  HomeOutlined,
  InfoCircleOutlined,
  AppstoreOutlined,
  ProjectOutlined,
  ReadOutlined,
  UserOutlined,
  BookOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";

const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

const Home = () => {
  const [mediumPosts, setMediumPosts] = useState([]);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const screens = useBreakpoint();

  useEffect(() => {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@devendrapandya"
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.items) {
          setMediumPosts(data.items.slice(0, 3));
        }
      })
      .catch(console.error);
  }, []);

  const techStack = [
    "React",
    "Redux",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MS SQL Server",
    "Ant Design",
    "Material UI",
    "Bootstrap",
    "Microfrontends",
  ];

  const projects = [
    {
      title: "Clinical Workflow Tool",
      description:
        "Canvas-based application for clinical data modeling and workflows.",
      link: "https://github.com/devpandya/workflow-tool",
    },
    {
      title: "Microfrontend Boilerplate",
      description: "Modular frontend system using Webpack Module Federation.",
      link: "https://github.com/devpandya/microfrontend-starter",
    },
    {
      title: "FastAPI CRUD App",
      description: "RESTful API implementation using Python FastAPI.",
      link: "https://github.com/devpandya/FastApi-Crud-Ops",
    },
  ];

  const scrollTo = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setDrawerVisible(false);
    }
  };

  const fadeInUp = {
    initial: { y: 40, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.8 },
  };

  const sectionStyles = [
    { background: "#0d1a26", color: "#ffffff" },
    { background: "#ffffff", color: "#000000" },
    { background: "#0d1a26", color: "#ffffff" },
    { background: "#ffffff", color: "#000000" },
    { background: "#0d1a26", color: "#ffffff" },
    { background: "#ffffff", color: "#000000" },
    { background: "#0d1a26", color: "#ffffff" },
    { background: "#ffffff", color: "#000000" },
  ];

  const menuItems = [
    { key: "hero", icon: <HomeOutlined />, label: "Home" },
    { key: "about", icon: <InfoCircleOutlined />, label: "About" },
    { key: "tech-stack", icon: <AppstoreOutlined />, label: "Tech Stack" },
    { key: "projects", icon: <ProjectOutlined />, label: "Projects" },
    { key: "blog", icon: <ReadOutlined />, label: "Blog" },
    { key: "linkedin-post", icon: <LinkedinOutlined />, label: "LinkedIn" },
    { key: "experience", icon: <UserOutlined />, label: "Experience" },
    { key: "education", icon: <BookOutlined />, label: "Education" },
    { key: "contact", icon: <MailOutlined />, label: "Contact" },
  ];

  return (
    <Layout style={{ minHeight: "100vh", scrollBehavior: "smooth" }}>
      {!screens.md ? (
        <div style={{ position: "fixed", top: 20, right: 20, zIndex: 1000 }}>
          <Button
            icon={<MenuOutlined />}
            onClick={() => setDrawerVisible(true)}
          />
          <Drawer
            title="Navigate"
            placement="right"
            closable
            onClose={() => setDrawerVisible(false)}
            visible={drawerVisible}
          >
            <Menu
              mode="vertical"
              onClick={({ key }) => scrollTo(key)}
              items={menuItems}
            />
          </Drawer>
        </div>
      ) : (
        <Menu
          mode="vertical"
          theme="dark"
          style={{ position: "fixed", top: 20, right: 20, zIndex: 1000 }}
        >
          {menuItems.map((item) => (
            <Menu.Item
              key={item.key}
              icon={item.icon}
              onClick={() => scrollTo(item.key)}
            >
              {item.label}
            </Menu.Item>
          ))}
        </Menu>
      )}

      <motion.section
        id="hero"
        {...fadeInUp}
        style={{
          padding: "60px 20px",
          textAlign: "center",
          ...sectionStyles[0],
        }}
      >
        <Title style={{ color: sectionStyles[0].color }}>Devendra Pandya</Title>
        <Title level={3} style={{ color: "#d1ecff", opacity: 0.9 }}>
          Full Stack Developer & Technical Specialist
        </Title>
        <Paragraph style={{ color: sectionStyles[0].color }}>
          13+ years of experience in building scalable, modern applications
          across healthcare, finance, manufacturing, and litigation. I
          specialize in React.js, Node.js, and microfrontend architectures.
        </Paragraph>
        <Button
          type="primary"
          size="large"
          target="_blank"
          href="/Devendra_Pandya_Resume.pdf"
          style={{ margin: "0 10px" }}
        >
          Download Résumé
        </Button>
        <Button
          size="large"
          target="_blank"
          href="https://linkedin.com/in/devendra-pandya"
          style={{ margin: "0 10px" }}
        >
          LinkedIn Profile
        </Button>
      </motion.section>

      <motion.section
        id="about"
        {...fadeInUp}
        style={{ padding: "60px 20px", ...sectionStyles[1] }}
      >
        <Title style={{ color: sectionStyles[1].color }}>About</Title>
        <Paragraph style={{ color: sectionStyles[1].color }}>
          I am a BE graduate in Electronics & Telecommunication (2011) and an
          experienced full stack developer specializing in React, Node.js, and
          scalable web architectures. Over the years, I have built impactful
          solutions in healthcare, finance, and litigation. I contribute on
          GitHub, write on Medium, and actively engage with tech professionals
          on LinkedIn.
        </Paragraph>
      </motion.section>

      <motion.section
        id="tech-stack"
        {...fadeInUp}
        style={{ padding: "60px 20px", ...sectionStyles[2] }}
      >
        <Title style={{ color: sectionStyles[2].color }}>Tech Stack</Title>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            justifyContent: "center",
          }}
        >
          {techStack.map((tech) => (
            <Tag
              key={tech}
              color="cyan"
              style={{ fontSize: "1em", padding: "5px 10px" }}
            >
              {tech}
            </Tag>
          ))}
        </div>
      </motion.section>

      <motion.section
        id="projects"
        {...fadeInUp}
        style={{ padding: "60px 20px", ...sectionStyles[3] }}
      >
        <Title style={{ color: sectionStyles[3].color }}>Projects</Title>
        <Row gutter={[24, 24]} justify="center">
          {projects.map((project) => (
            <Col key={project.title} xs={24} md={12} lg={8}>
              <Card title={project.title} bordered={false}>
                <Paragraph>{project.description}</Paragraph>
                <Button href={project.link} target="_blank">
                  View Project
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
      </motion.section>

      <motion.section
        id="blog"
        {...fadeInUp}
        style={{ padding: "60px 20px", ...sectionStyles[4] }}
      >
        <Title style={{ color: sectionStyles[4].color }}>
          Latest Blog Posts
        </Title>
        <Row gutter={[24, 24]} justify="center">
          {mediumPosts.map((post: any) => (
            <Col key={post.guid} xs={24} md={12} lg={8}>
              <Card
                title={post.title}
                bordered={false}
                extra={
                  <a href={post.link} target="_blank">
                    Read More
                  </a>
                }
              >
                <Paragraph ellipsis={{ rows: 3 }}>
                  {post.description.replace(/<[^>]+>/g, "").substring(0, 160)}
                  ...
                </Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      </motion.section>

      <motion.section
        id="linkedin-post"
        {...fadeInUp}
        style={{ padding: "60px 20px", ...sectionStyles[5] }}
      >
        <Title style={{ color: sectionStyles[5].color }}>
          LinkedIn Highlight
        </Title>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <div
            dangerouslySetInnerHTML={{
              __html: `
      <blockquote class="linkedin-post" data-lang="en-us" data-theme="light">
        <a href="https://www.linkedin.com/feed/update/urn:li:share:YOUR_POST_ID">
          Loading LinkedIn post...
        </a>
      </blockquote>
      <script src="https://platform.linkedin.com/in.js" type="text/javascript">lang: en_US</script>
    `,
            }}
          />
        </div>
      </motion.section>

      <motion.section
        id="experience"
        {...fadeInUp}
        style={{ padding: "60px 20px", ...sectionStyles[6] }}
      >
        <Title style={{ color: sectionStyles[6].color }}>
          Professional Experience
        </Title>
        <Timeline mode="left" style={{color: sectionStyles[6].color}}>
          <Timeline.Item label="2024 - Present">
            Technical Specialist at Norstella – Architected microfrontend
            solutions and worked on data automation tools in healthcare.
          </Timeline.Item>
          <Timeline.Item label="2022 - 2024">
            Technical Specialist at Agilite Tech – Led React/Node projects and
            built canvas tools for clinical trials.
          </Timeline.Item>
          <Timeline.Item label="2021 - 2022">
            Technical Lead at Litera Technologies – Headed frontend team and
            delivered scalable litigation software.
          </Timeline.Item>
          <Timeline.Item label="2016 - 2021">
            Senior Software Engineer at Philips Vitalhealth – Built React apps
            for air purification and infection control.
          </Timeline.Item>
          <Timeline.Item label="2011 - 2015">
            Software Engineer at Syntel Ltd – Developed healthcare and
            automotive systems in Embedded C++ and .NET.
          </Timeline.Item>
        </Timeline>
      </motion.section>

      <motion.section
        id="education"
        {...fadeInUp}
        style={{ padding: "60px 20px", ...sectionStyles[7] }}
      >
        <Title style={{ color: sectionStyles[7].color }}>Education</Title>
        <Timeline mode="left">
          <Timeline.Item label="2011">
            B.E. in Electronics & Telecommunication – G.H. Raisoni COE, Nagpur
            University
          </Timeline.Item>
          <Timeline.Item label="2007">
            HSC – Dr. Antonio Da Silva Technical High School & Jr College,
            Mumbai
          </Timeline.Item>
          <Timeline.Item label="2005">
            SSC – Dr. Antonio Da Silva High School, Mumbai
          </Timeline.Item>
        </Timeline>
      </motion.section>
      <motion.section
        id="contact"
        {...fadeInUp}
        style={{ padding: "60px 20px", background: "#f0f2f5", color: "#000" }}
      >
        <Title style={{ textAlign: "center", color: "#001529" }}>Contact</Title>
        <Row justify="center">
          <Col xs={24} md={16} lg={12}>
            <form
              action="mailto:devendrapandya@outlook.com"
              method="post"
              encType="text/plain"
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                style={{
                  padding: "10px",
                  fontSize: "1rem",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                style={{
                  padding: "10px",
                  fontSize: "1rem",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
              />
              <textarea
                name="message"
                rows={5}
                placeholder="Your Message"
                required
                style={{
                  padding: "10px",
                  fontSize: "1rem",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
              ></textarea>
              <Button type="primary" htmlType="submit" size="large">
                Send Message
              </Button>
            </form>
          </Col>
        </Row>
      </motion.section>
    </Layout>
  );
};

export default Home;
