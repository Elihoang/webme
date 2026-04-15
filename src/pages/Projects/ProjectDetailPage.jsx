import { useParams, useNavigate } from 'react-router-dom';
import { Typography, Tag, Button, Row, Col } from 'antd';
import { GithubOutlined, GlobalOutlined, ArrowLeftOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { projects } from '../../data/projects';
import { useAppTranslation as useTranslation } from '../../hooks/useAppTranslation';

const { Title, Paragraph } = Typography;

const ProjectDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const currentLang = i18n?.language || 'en';
  const project = projects.find(p => p.id === Number(id));

  if (!project) {
    return (
      <div style={{ textAlign: 'center', padding: '80px 20px' }}>
        <Title level={2} style={{ color: '#1e293b' }}>{t.projectNotFound}</Title>
        <Button type="primary" onClick={() => navigate('/projects')}>← {t.backToProjects}</Button>
      </div>
    );
  }

  return (
    <div className="page-container animate-fade-in" style={{ padding: '20px 0', maxWidth: '900px', margin: '0 auto' }}>
      {/* Back button */}
      <Button
        icon={<ArrowLeftOutlined />}
        onClick={() => navigate('/projects')}
        style={{ marginBottom: '32px', border: '1px solid #e2e8f0', color: '#475569' }}
      >
        {t.backToProjects}
      </Button>

      {/* Header */}
      <div className="glass-panel" style={{ padding: '40px', marginBottom: '32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <span style={{
              display: 'inline-block',
              padding: '4px 14px',
              background: 'rgba(16, 185, 129, 0.1)',
              color: '#10b981',
              borderRadius: '20px',
              fontSize: '13px',
              fontWeight: 600,
              border: '1px solid rgba(16, 185, 129, 0.3)',
              marginBottom: '16px'
            }}>
              {project.type}
            </span>
            <Title level={1} style={{ margin: 0, color: '#1e293b', fontSize: '2.2rem' }}>
              {project.title}
            </Title>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <Button type="primary" icon={<GlobalOutlined />} href={project.link} target="_blank">
              Live Demo
            </Button>
            <Button icon={<GithubOutlined />} href={project.github} target="_blank"
              style={{ border: '1px solid #cbd5e1', color: '#1e293b' }}>
              GitHub
            </Button>
          </div>
        </div>
      </div>

      <Row gutter={[32, 32]}>
        {/* Description */}
        <Col xs={24} md={14}>
          <div className="glass-panel" style={{ padding: '32px', height: '100%' }}>
            <Title level={3} style={{ marginTop: 0, color: '#1e293b' }}>{t.projectOverview}</Title>
            <Paragraph style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8 }}>
              {project.description[currentLang]}
            </Paragraph>

            <Title level={4} style={{ color: '#1e293b', marginBottom: '16px' }}>{t.keyFeatures}</Title>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {project.features[currentLang].map((f, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <CheckCircleOutlined style={{ color: '#10b981', fontSize: '18px', marginTop: '2px', flexShrink: 0 }} />
                  <span style={{ color: '#334155', fontSize: '15px', lineHeight: 1.6 }}>{f}</span>
                </div>
              ))}
            </div>
          </div>
        </Col>

        {/* Tech Stack */}
        <Col xs={24} md={10}>
          <div className="glass-panel" style={{ padding: '32px' }}>
            <Title level={3} style={{ marginTop: 0, color: '#1e293b' }}>{t.techStack}</Title>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {project.tags.map(tag => (
                <Tag key={tag} color="green" style={{ padding: '6px 14px', fontSize: '14px', borderRadius: '8px', margin: 0 }}>
                  {tag}
                </Tag>
              ))}
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '32px', marginTop: '24px' }}>
            <Title level={3} style={{ marginTop: 0, color: '#1e293b' }}>{t.links}</Title>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Button block type="primary" icon={<GlobalOutlined />} href={project.link} target="_blank">{t.liveDemo}</Button>
              <Button block icon={<GithubOutlined />} href={project.github} target="_blank"
                style={{ border: '1px solid #cbd5e1', color: '#1e293b' }}>{t.sourceCode}</Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProjectDetailPage;
