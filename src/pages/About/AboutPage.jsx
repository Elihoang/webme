import { Typography, Row, Col, Progress, Timeline, Tag } from 'antd';
import { TrophyOutlined, CodeOutlined, BookOutlined } from '@ant-design/icons';
import { useAppTranslation as useTranslation } from '../../hooks/useAppTranslation';

const { Title, Paragraph } = Typography;

const skillGroups = [
  {
    label: 'Backend',
    color: '#10b981',
    skills: [
      { name: 'C# / ASP.NET Core', percent: 90 },
      { name: 'Clean Architecture / RESTful API', percent: 88 },
      { name: 'JWT Auth / Middleware', percent: 85 },
      { name: 'Redis / Caching', percent: 78 },
    ],
  },
  {
    label: 'Database',
    color: '#0ea5e9',
    skills: [
      { name: 'PostgreSQL', percent: 85 },
      { name: 'SQL Server', percent: 80 },
      { name: 'Entity Framework Core', percent: 88 },
      { name: 'MongoDB', percent: 70 },
    ],
  },
  {
    label: 'Frontend',
    color: '#f59e0b',
    skills: [
      { name: 'React / Vite', percent: 78 },
      { name: 'Blazor WebAssembly', percent: 75 },
      { name: 'TailwindCSS / shadcn/ui', percent: 80 },
    ],
  },
];

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <div className="page-container animate-fade-in" style={{ padding: '20px 0' }}>
      <Title level={1} style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '40px', color: '#1e293b' }}>
        {t.aboutTitle} <span className="gradient-text-primary">{t.aboutMe}</span>
      </Title>

      <Row gutter={[48, 48]}>
        {/* Journey */}
        <Col xs={24} md={12}>
          <div className="glass-panel" style={{ padding: '32px', height: '100%' }}>
            <Title level={2} style={{ marginTop: 0, color: '#1e293b' }}>{t.myJourney}</Title>
            <Paragraph style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8 }}>
              {t.journeyDesc1} <strong>{t.journeyDegree}</strong> {t.journeyDesc2}
              <strong> {t.journeySpec}</strong> {t.journeyDesc3}
              <br /><br />
              {t.journeyDesc4}
              <br /><br />
              {t.journeyDesc5}
            </Paragraph>

            <div style={{ marginTop: '24px' }}>
              <Title level={4} style={{ color: '#1e293b', marginBottom: '12px' }}>{t.technologies}</Title>
              <div style={{ marginBottom: '8px' }}>
                <span style={{ fontWeight: 600, fontSize: '12px', color: '#10b981', marginBottom: '6px', display: 'block' }}>Backend</span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '10px' }}>
                  {['C#', '.NET 8', 'ASP.NET Core', 'Clean Architecture', 'JWT Auth', 'SignalR', 'Serilog'].map(tag => (
                    <Tag key={tag} color="green" style={{ padding: '2px 10px', fontSize: '12px', borderRadius: '6px', margin: 0 }}>{tag}</Tag>
                  ))}
                </div>
                <span style={{ fontWeight: 600, fontSize: '12px', color: '#0ea5e9', marginBottom: '6px', display: 'block' }}>Database</span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '10px' }}>
                  {['PostgreSQL', 'SQL Server', 'EF Core', 'MongoDB', 'Redis', 'S3 Storage'].map(tag => (
                    <Tag key={tag} color="blue" style={{ padding: '2px 10px', fontSize: '12px', borderRadius: '6px', margin: 0 }}>{tag}</Tag>
                  ))}
                </div>
                <span style={{ fontWeight: 600, fontSize: '12px', color: '#f59e0b', marginBottom: '6px', display: 'block' }}>Frontend</span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {['React', 'Blazor', 'TailwindCSS', 'shadcn/ui', 'Cloudinary', 'Postman'].map(tag => (
                    <Tag key={tag} color="gold" style={{ padding: '2px 10px', fontSize: '12px', borderRadius: '6px', margin: 0 }}>{tag}</Tag>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Col>

        {/* Skills */}
        <Col xs={24} md={12}>
          <div className="glass-panel" style={{ padding: '32px', height: '100%' }}>
            <Title level={2} style={{ marginTop: 0, color: '#1e293b' }}>{t.skills}</Title>
            <div style={{ marginTop: '16px' }}>
              {skillGroups.map(group => (
                <div key={group.label} style={{ marginBottom: '28px' }}>
                  <div style={{
                    display: 'inline-block',
                    padding: '2px 14px',
                    background: `${group.color}18`,
                    color: group.color,
                    borderRadius: '20px',
                    fontWeight: 700,
                    fontSize: '13px',
                    marginBottom: '12px',
                    border: `1px solid ${group.color}40`
                  }}>
                    {group.label}
                  </div>
                  {group.skills.map(({ name, percent }) => (
                    <div key={name} style={{ marginBottom: '12px', color: '#334155' }}>
                      <span style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                        <span style={{ fontWeight: 500, fontSize: '14px' }}>{name}</span>
                        <span style={{ color: group.color, fontWeight: 600, fontSize: '13px' }}>{percent}%</span>
                      </span>
                      <Progress percent={percent} showInfo={false} strokeColor={group.color} trailColor="#e2e8f0" size="small" />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Col>

        {/* Experience Timeline */}
        <Col span={24}>
          <div className="glass-panel" style={{ padding: '40px' }}>
            <Title level={2} style={{ textAlign: 'center', marginBottom: '40px', color: '#1e293b' }}>
              {t.eduExp}
            </Title>
            <Timeline
              mode="alternate"
              items={[
                {
                  color: '#10b981',
                  dot: <BookOutlined style={{ fontSize: '18px' }} />,
                  children: (
                    <div style={{ textAlign: 'left' }}>
                      <h3 style={{ margin: 0, color: '#1e293b' }}>{t.hutech}</h3>
                      <p style={{ color: '#10b981', margin: '4px 0', fontWeight: 500 }}>{t.hutechMajor}</p>
                      <p style={{ color: '#475569' }}>{t.hutechDesc}</p>
                    </div>
                  ),
                },
                {
                  color: '#059669',
                  dot: <TrophyOutlined style={{ fontSize: '18px' }} />,
                  children: (
                    <div style={{ textAlign: 'right' }}>
                      <h3 style={{ margin: 0, color: '#1e293b' }}>{t.awards}</h3>
                      <p style={{ color: '#10b981', margin: '4px 0', fontWeight: 500 }}>{t.award1}</p>
                      <p style={{ color: '#475569' }}>{t.award2}</p>
                    </div>
                  ),
                },
                {
                  color: '#047857',
                  dot: <CodeOutlined style={{ fontSize: '18px' }} />,
                  children: (
                    <div style={{ textAlign: 'left' }}>
                      <h3 style={{ margin: 0, color: '#1e293b' }}>{t.seeking}</h3>
                      <p style={{ color: '#10b981', margin: '4px 0', fontWeight: 500 }}>{t.seekingStack}</p>
                      <p style={{ color: '#475569' }}>{t.seekingDesc}</p>
                    </div>
                  ),
                },
              ]}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AboutPage;
