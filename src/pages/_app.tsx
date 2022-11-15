import { ComponentType, useEffect, useState } from 'react';
// import { NavLink } from '@modern-js/runtime/router';

import { Layout, Nav, Button, Avatar, Tooltip, Input } from '@douyinfe/semi-ui';
import {
  IconBell,
  IconHelpCircle,
  IconHome,
  IconHistogram,
  IconLive,
  IconSetting,
  IconMoon,
  IconSearch,
} from '@douyinfe/semi-icons';
import logo from '@/static/logo.png';
import '../App.css';
import { setGlobalMode, getGlobalMode } from '@/utils/mode';

const { Header, Footer, Sider, Content } = Layout;
const App = ({ Component, ...pageProps }: { Component: ComponentType }) => {
  const [mode, setMode] = useState(getGlobalMode());
  useEffect(() => {
    setGlobalMode(getGlobalMode() || 'light');
  }, []);
  const switchMode = () => {
    const newMode = mode === 'dark' ? 'light' : 'dark';
    setGlobalMode(newMode);
    setMode(newMode);
  };
  return (
    <Layout>
      <Sider style={{ backgroundColor: 'var(--semi-color-bg-1)' }}>
        <Nav
          defaultSelectedKeys={['Home']}
          style={{ maxWidth: 220, height: '100%' }}
          items={[
            {
              itemKey: 'Workspace',
              text: 'Workspace',
              icon: <IconHome size="large" />,
            },
            {
              itemKey: 'Histogram',
              text: 'Packages',
              icon: <IconHistogram size="large" />,
            },
            {
              itemKey: 'Live',
              text: 'Scopes',
              icon: <IconLive size="large" />,
            },
            {
              itemKey: 'Security',
              text: 'Security',
              icon: <IconSetting size="large" />,
            },
            {
              itemKey: 'Setting',
              text: 'Setting',
              icon: <IconSetting size="large" />,
            },
          ]}
          header={{
            logo: <img src={logo} />,
            text: 'Private npm',
          }}
          footer={{
            collapseButton: false,
          }}
        />
      </Sider>
      <Layout>
        <Header style={{ backgroundColor: 'var(--semi-color-bg-1)' }}>
          <Nav
            mode="horizontal"
            footer={
              <>
                <Button
                  theme="borderless"
                  icon={<IconBell size="extra-large" />}
                  style={{
                    color: 'var(--semi-color-text-2)',
                    marginRight: '12px',
                  }}
                />
                <Button
                  theme="borderless"
                  icon={<IconHelpCircle size="extra-large" />}
                  style={{
                    color: 'var(--semi-color-text-2)',
                    marginRight: '12px',
                  }}
                />
                <Tooltip
                  content={`切换到${mode === 'light' ? '暗色' : '亮色'}模式`}
                >
                  <Button
                    onClick={switchMode}
                    theme="borderless"
                    icon={<IconMoon size="extra-large" />}
                    style={{
                      color: 'var(--semi-color-text-2)',
                      marginRight: '12px',
                    }}
                  />
                </Tooltip>
                <Input
                  style={{
                    color: 'var(--semi-color-text-2)',
                    marginRight: '12px',
                  }}
                  prefix={<IconSearch />}
                  showClear
                  placeholder="search package"
                />
                <Avatar color="blue" size="small" style={{ flexShrink: 0 }}>
                  B
                </Avatar>
              </>
            }
          />
        </Header>
        <Content
          style={{
            padding: '24px',
            backgroundColor: 'var(--semi-color-bg-0)',
          }}
        >
          <Component {...pageProps} />
        </Content>
        <Footer
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '20px',
            color: 'var(--semi-color-text-2)',
            backgroundColor: 'rgba(var(--semi-grey-0), 1)',
          }}
        >
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <span>Copyright © 2022 @Beace. All Rights Reserved. </span>
          </span>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
