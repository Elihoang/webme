import { useNavigate } from 'react-router-dom';
import { Typography, Row, Col, Card, Tag, Button } from 'antd';
import { GithubOutlined, GlobalOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { projects } from '../../data/projects';
import { useAppTranslation as useTranslation } from '../../hooks/useAppTranslation';

const { Title, Paragraph } = Typography;




const ProjectsPage = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const currentLang = i18n?.language || 'en';

  return (
    <div className="page-container animate-fade-in" style={{ padding: '20px 0' }}>
      <Title level={1} style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '16px', color: '#1e293b' }}>
        {t.featuredProjects} <span className="gradient-text-primary">{t.projects}</span>
      </Title>
      <Paragraph style={{ textAlign: 'center', color: '#64748b', fontSize: '1.2rem', marginBottom: '60px' }}>
        {t.projectsSub}
      </Paragraph>

      <Row gutter={[32, 32]}>
        {projects.map((project, index) => (
          <Col xs={24} md={12} key={project.id} className={`animate-fade-in delay-${(index % 3 + 1) * 100}`}>
            <Card 
              className="glass-panel"
              style={{ height: '100%' }}
              styles={{ body: { padding: '32px', display: 'flex', flexDirection: 'column', height: '100%' } }}
              hoverable
            >
              <Title level={3} style={{ marginTop: 0, color: '#1e293b' }}>{project.title}</Title>
              <Paragraph style={{ color: '#475569', fontSize: '1.05rem', minHeight: '80px', flex: 1 }}>
                {project.description[currentLang]}
              </Paragraph>
              
              <div style={{ marginBottom: '24px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {project.tags.map(tag => (
                  <Tag key={tag} color="green" style={{ margin: 0, padding: '4px 12px', fontSize: '13px', borderRadius: '6px' }}>
                    {tag}
                  </Tag>
                ))}
              </div>
              
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Button type="primary" icon={<GlobalOutlined />} href={project.link} target="_blank">{t.liveDemo}</Button>
                <Button icon={<GithubOutlined />} style={{ background: 'transparent', color: '#1e293b', border: '1px solid #cbd5e1' }} href={project.github} target="_blank">{t.code}</Button>
                <Button icon={<ArrowRightOutlined />} style={{ background: 'transparent', color: '#10b981', border: '1px solid #10b981' }} onClick={() => navigate(`/projects/${project.id}`)}>{t.more}</Button>
              </div>
            </Card>
          </Col>
        ))}
      </Row>

    </div>
  );
};

export default ProjectsPage;
