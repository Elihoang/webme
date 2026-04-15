import { Typography, Row, Col, Form, Input, Button, message } from 'antd';
import { SendOutlined, MailOutlined, PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { useAppTranslation as useTranslation } from '../../hooks/useAppTranslation';

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

const ContactPage = () => {
  const [form] = Form.useForm();
  const { t } = useTranslation();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    message.success(t.messageSent);
    form.resetFields();
  };

  return (
    <div className="page-container animate-fade-in" style={{ padding: '20px 0' }}>
      <Title level={1} style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '16px', color: '#1e293b' }}>
        {t.getInTouch} <span className="gradient-text-primary">{t.touch}</span>
      </Title>
      <Paragraph style={{ textAlign: 'center', color: '#64748b', fontSize: '1.2rem', marginBottom: '60px', maxWidth: '600px', margin: '0 auto 60px auto' }}>
        {t.contactSub}
      </Paragraph>

      <Row gutter={[48, 48]} justify="center">
        <Col xs={24} md={10}>
          <div className="glass-panel" style={{ padding: '40px', height: '100%' }}>
            <Title level={3} style={{ marginTop: 0, marginBottom: '24px' }}>{t.contactInfo}</Title>
            
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
              <div style={{ width: '50px', height: '50px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '16px' }}>
                <MailOutlined style={{ fontSize: '24px', color: '#10b981' }} />
              </div>
              <div>
                <p style={{ margin: 0, color: '#64748b', fontSize: '14px' }}>Email</p>
                <p style={{ margin: 0, fontSize: '16px', fontWeight: 500, color: '#1e293b' }}>duyhoanggl89@gmail.com</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
              <div style={{ width: '50px', height: '50px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '16px' }}>
                <PhoneOutlined style={{ fontSize: '24px', color: '#10b981' }} />
              </div>
              <div>
                <p style={{ margin: 0, color: '#64748b', fontSize: '14px' }}>Phone</p>
                <p style={{ margin: 0, fontSize: '16px', fontWeight: 500, color: '#1e293b' }}>0866872591</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ width: '50px', height: '50px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '16px' }}>
                <EnvironmentOutlined style={{ fontSize: '24px', color: '#10b981' }} />
              </div>
              <div>
                <p style={{ margin: 0, color: '#64748b', fontSize: '14px' }}>Location</p>
                <p style={{ margin: 0, fontSize: '16px', fontWeight: 500, color: '#1e293b' }}>Thu Duc, Ho Chi Minh, Viet nam</p>
              </div>
            </div>
          </div>
        </Col>

        <Col xs={24} md={14}>
          <div className="glass-panel" style={{ padding: '40px' }}>
            <Form
              form={form}
              name="contact_form"
              layout="vertical"
              onFinish={onFinish}
              size="large"
            >
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    name="name"
                    rules={[{ required: true, message: 'Please enter your name!' }]}
                  >
                    <Input placeholder={t.yourName} style={{ background: '#f8fafc', color: '#1e293b' }} />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="email"
                    rules={[
                      { required: true, message: t.emailRequired },
                      { type: 'email', message: t.emailInvalid }
                    ]}
                  >
                    <Input placeholder={t.yourEmail} style={{ background: '#f8fafc', color: '#1e293b' }} />
                  </Form.Item>
                </Col>
              </Row>
              
              <Form.Item
                name="subject"
                rules={[{ required: true, message: t.subjectRequired }]}
              >
                <Input placeholder={t.subject} style={{ background: '#f8fafc', color: '#1e293b' }} />
              </Form.Item>
              
              <Form.Item
                name="message"
                rules={[{ required: true, message: t.messageRequired }]}
              >
                <TextArea rows={6} placeholder={t.yourMessage} style={{ background: '#f8fafc', color: '#1e293b' }} />
              </Form.Item>
              
              <Form.Item style={{ marginBottom: 0 }}>
                <Button 
                  type="primary" 
                  htmlType="submit" 
                  icon={<SendOutlined />}
                  style={{ 
                    width: '100%', 
                    height: '50px',
                    background: '#10b981',
                    border: 'none',
                    fontWeight: 600,
                    fontSize: '16px',
                    color: 'white'
                  }}
                >
                  {t.sendMessage}
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ContactPage;
