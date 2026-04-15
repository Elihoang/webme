import { Typography, Button, Space, Row, Col } from 'antd';
import { ArrowRightOutlined, GithubOutlined, LinkedinOutlined, DownloadOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useAppTranslation as useTranslation } from '../../hooks/useAppTranslation';

const { Title, Paragraph } = Typography;

const HomePage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="page-container" style={{ display: 'flex', alignItems: 'center', minHeight: '80vh' }}>
      <Row gutter={[48, 48]} align="middle" style={{ width: '100%' }}>
        <Col xs={24} md={14} className="animate-fade-in delay-100">
          <div style={{ padding: '20px 0' }}>
            <span className="custom-badge">
              {t.welcomeBadge}
            </span>

            <Title level={1} style={{ fontSize: 'clamp(2.1rem, 5vw, 3.5rem)', fontWeight: 800, margin: 0, lineHeight: 1.1, color: '#1e293b', whiteSpace: 'nowrap' }}>
              {t.heroTitle1}<span className="gradient-text-primary">Duy Hoàng</span>
            </Title>
            <Title level={2} style={{ fontSize: '2rem', color: '#475569', marginTop: '16px', fontWeight: 500 }}>
              {t.heroSubtitle}
            </Title>

            <Paragraph style={{ fontSize: '1.2rem', color: '#64748b', marginTop: '24px', maxWidth: '600px', lineHeight: 1.6 }}>
              {t.heroDesc}
            </Paragraph>

            <Space size="large" style={{ marginTop: '32px' }}>
              <Button
                type="primary"
                size="large"
                icon={<ArrowRightOutlined />}
                onClick={() => navigate('/projects')}
                style={{
                  height: '50px',
                  padding: '0 30px',
                  fontSize: '16px',
                  borderRadius: '25px',
                  fontWeight: 600,
                  boxShadow: '0 10px 25px -5px rgba(16, 185, 129, 0.5)'
                }}
              >
                {t.viewProjects}
              </Button>
              <Button
                size="large"
                icon={<DownloadOutlined />}
                onClick={() => navigate('/contact')}
                style={{
                  height: '50px',
                  padding: '0 30px',
                  fontSize: '16px',
                  borderRadius: '25px',
                  background: 'transparent',
                  borderColor: '#cbd5e1',
                  color: '#1e293b'
                }}
              >
                {t.contactMe}
              </Button>
            </Space>

            <div style={{ marginTop: '48px', display: 'flex', gap: '20px' }}>
              <a href="https://github.com/Elihoang" target="_blank" rel="noopener noreferrer"
                style={{ color: '#64748b', fontSize: '28px', transition: 'color 0.3s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#1e293b'}
                onMouseLeave={e => e.currentTarget.style.color = '#64748b'}>
                <GithubOutlined />
              </a>
              <a href="https://www.linkedin.com/in/l%C3%AA-h%E1%BB%AFu-duy-ho%C3%A0ng/" target="_blank" rel="noopener noreferrer"
                style={{ color: '#64748b', fontSize: '28px', transition: 'color 0.3s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#0077b5'}
                onMouseLeave={e => e.currentTarget.style.color = '#64748b'}>
                <LinkedinOutlined />
              </a>
            </div>
          </div>
        </Col>

        <Col xs={24} md={10} className="animate-fade-in delay-300" style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ position: 'relative', width: '350px', height: '350px' }}>
            <div style={{
              position: 'absolute',
              top: '5%', left: '5%',
              width: '90%', height: '90%',
              background: '#d1fae5',
              borderRadius: '50%',
              filter: 'blur(60px)',
              opacity: 1, zIndex: 0
            }}></div>
            <div className="glass-panel" style={{
              position: 'relative',
              width: '100%', height: '100%',
              borderRadius: '50%',
              zIndex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              background: '#ffffff'
            }}>
              <img src="/src/assets/ngieng.jpg" alt="Duy Hoàng" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HomePage;
