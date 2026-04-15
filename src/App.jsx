import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Layout, Menu, Button, ConfigProvider, theme } from 'antd';
import { UserOutlined, CodeOutlined, MailOutlined, HomeOutlined, SunOutlined, MoonOutlined } from '@ant-design/icons';
import { useAppTranslation as useTranslation } from './hooks/useAppTranslation';
import './App.css';
import { useEffect, useState } from 'react';

const { Header, Content, Footer } = Layout;

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [current, setCurrent] = useState(location.pathname);
  const [isDark, setIsDark] = useState(false);
  const { t, i18n } = useTranslation();
  
  const toggleLang = () => i18n.changeLanguage(i18n.language === 'en' ? 'vi' : 'en');

  useEffect(() => {
    setCurrent(location.pathname);
  }, [location.pathname]);

  // Update body background when theme changes
  useEffect(() => {
    document.body.style.background = isDark ? '#0f172a' : '#ffffff';
    document.body.style.color = isDark ? '#f8fafc' : '#1e293b';
    if (isDark) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDark]);

  const items = [
    { key: '/', icon: <HomeOutlined />, label: 'Home' },
    { key: '/about', icon: <UserOutlined />, label: 'About' },
    { key: '/projects', icon: <CodeOutlined />, label: 'Projects' },
    { key: '/contact', icon: <MailOutlined />, label: 'Contact' },
  ];

  const handleMenuClick = (e) => {
    navigate(e.key);
  };

  const headerBg = isDark ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255, 255, 255, 0.95)';
  const headerBorder = isDark ? '1px solid #1e293b' : '1px solid #f1f5f9';
  const logoColor = isDark ? '#f1f5f9' : '#1e293b';
  const footerBg = isDark ? '#0f172a' : '#ffffff';
  const footerBorder = isDark ? '1px solid #1e293b' : '1px solid #f1f5f9';

  return (
    <ConfigProvider
      theme={{
        algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: {
          colorPrimary: '#10b981',
          colorLink: '#10b981',
          fontFamily: '"Outfit", "Inter", sans-serif',
          borderRadius: 12,
          colorBgContainer: isDark ? '#1e293b' : '#ffffff',
          colorBgElevated: isDark ? '#1e293b' : '#ffffff',
        },
        components: {
          Menu: {
            itemSelectedColor: '#10b981',
            itemHoverColor: '#10b981',
            horizontalItemSelectedColor: '#10b981',
            horizontalItemHoverColor: '#10b981',
            itemActiveBg: 'transparent',
            itemSelectedBg: 'transparent',
            itemHoverBg: 'transparent',
            activeBarBorderWidth: 2,
            activeBarColor: '#10b981',
          },
        },
      }}
    >
      <Layout style={{ minHeight: '100vh', background: isDark ? '#0f172a' : '#ffffff' }}>
        <Header
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            padding: '0 5%',
            background: headerBg,
            backdropFilter: 'blur(12px)',
            borderBottom: headerBorder,
          }}
        >
          <div
            onClick={() => navigate('/')}
            style={{
              fontWeight: '800',
              fontSize: '24px',
              marginRight: 'auto',
              cursor: 'pointer',
              color: logoColor,
              letterSpacing: '1px'
            }}
          >
            DUY HOÀNG
          </div>
          <Menu
            theme={isDark ? 'dark' : 'light'}
            mode="horizontal"
            selectedKeys={[current]}
            onClick={handleMenuClick}
            items={items}
            style={{
              background: 'transparent',
              borderBottom: 'none',
              minWidth: '400px',
              justifyContent: 'flex-end',
              fontSize: '16px',
              fontWeight: '500'
            }}
          />
          {/* Language toggle */}
          <Button
            type="text"
            onClick={toggleLang}
            style={{
              marginLeft: '8px',
              height: '40px',
              padding: '0 12px',
              border: isDark ? '1px solid #334155' : '1px solid #e2e8f0',
              borderRadius: '20px',
              fontWeight: 700,
              fontSize: '13px',
              color: '#10b981',
              letterSpacing: '1px',
            }}
          >
            {i18n.language === 'en' ? 'VI' : 'EN'}
          </Button>
          {/* Dark / Light toggle */}
          <Button
            type="text"
            shape="circle"
            icon={isDark ? <SunOutlined style={{ fontSize: '18px', color: '#f59e0b' }} /> : <MoonOutlined style={{ fontSize: '18px', color: '#475569' }} />}
            onClick={() => setIsDark(prev => !prev)}
            style={{
              marginLeft: '12px',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: isDark ? '1px solid #334155' : '1px solid #e2e8f0',
              borderRadius: '50%',
            }}
          />
        </Header>

        <Content style={{ padding: '40px 5%', flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Outlet />
        </Content>

        <Footer style={{
          textAlign: 'center',
          background: footerBg,
          borderTop: footerBorder,
          color: '#64748b',
          padding: '24px 0'
        }}>
          Lê Hữu Duy Hoàng Portfolio ©{new Date().getFullYear()} — Built with ASP.NET Core & React
        </Footer>
      </Layout>
    </ConfigProvider>
  );
};

export default App;
