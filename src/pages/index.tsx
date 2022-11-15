// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable max-lines */
import { Helmet } from '@modern-js/runtime/head';
import {
  AvatarGroup,
  Typography,
  Tabs,
  TabPane,
  Card,
  Popover,
  Avatar,
  Space,
  Row,
  Col,
  Table,
} from '@douyinfe/semi-ui';

import {
  IconArrowUp,
  IconArrowDown,
  IconInfoCircle,
} from '@douyinfe/semi-icons';

const { Text, Title } = Typography;
const { Meta } = Card;

const Index = () => {
  const data = [
    { key: 'Internal Packages', value: '172,089' },
    { key: 'All Packages', value: '2,172,089' },
    {
      key: 'Downloads · Yesterday',
      value: (
        <span>
          47,189,613,633
          <IconArrowDown
            size="small"
            style={{ color: 'green', marginLeft: '4px' }}
          />
        </span>
      ),
    },
    {
      key: 'Downloads · Last Week',
      value: (
        <span>
          47,189,613,633
          <IconArrowUp
            size="small"
            style={{ color: 'red', marginLeft: '4px' }}
          />
        </span>
      ),
    },
    { key: 'Downloads · Last Month', value: '195,945,158,411' },
  ];
  const columns = [
    {
      title: 'name',
      dataIndex: 'name',
      render: (text, record, index) => {
        return (
          <div>
            <Avatar
              size="small"
              shape="square"
              src={record.nameIconSrc}
              style={{ marginRight: 12 }}
            />
            {text}
          </div>
        );
      },
    },
    {
      title: 'size',
      dataIndex: 'size',
    },
    {
      title: 'owner',
      dataIndex: 'owner',
      render: (text, record, index) => {
        return (
          <div>
            <Avatar
              size="small"
              color={record.avatarBg}
              style={{ marginRight: 4 }}
            >
              {typeof text === 'string' && text.slice(0, 1)}
            </Avatar>
            {text}
          </div>
        );
      },
    },
    {
      title: 'registry',
      dataIndex: 'registry',
      render: (text, record, index) => {
        return text;
      },
    },
    {
      title: 'latest release',
      dataIndex: 'updateTime',
    },
  ];
  const tableData = [
    {
      key: '1',
      name: 'lodash',
      nameIconSrc:
        'https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/figma-icon.png',
      size: '2M',
      owner: 'beace',
      updateTime: '2020-02-02 05:13',
      avatarBg: 'grey',
      registry: 'npm',
    },
    {
      key: '2',
      name: 'react',
      nameIconSrc:
        'https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/docs-icon.png',
      size: '2M',
      owner: 'beace',
      updateTime: '2020-01-17 05:31',
      avatarBg: 'red',
      registry: 'npm',
    },
    {
      key: '3',
      name: '@private/lib',
      nameIconSrc:
        'https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/docs-icon.png',
      size: '34KB',
      owner: 'Zoey Edwards',
      updateTime: '2020-01-26 11:01',
      avatarBg: 'light-blue',
      registry: 'private',
    },
    {
      key: '4',
      name: 'axios',
      nameIconSrc:
        'https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/docs-icon.png',
      size: '34KB',
      owner: 'Zoey Edwards',
      updateTime: '2020-01-26 11:01',
      avatarBg: 'light-blue',
      registry: 'npm',
    },
    {
      key: '5',
      name: 'chalk',
      nameIconSrc:
        'https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/docs-icon.png',
      size: '34KB',
      owner: 'Zoey Edwards',
      updateTime: '2020-01-26 11:01',
      avatarBg: 'light-blue',
      registry: 'npm',
    },
    {
      key: '6',
      name: 'react-dom',
      nameIconSrc:
        'https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/docs-icon.png',
      size: '34KB',
      owner: 'Zoey Edwards',
      updateTime: '2020-01-26 11:01',
      avatarBg: 'light-blue',
      registry: 'npm',
    },
    {
      key: '7',
      name: 'commander',
      nameIconSrc:
        'https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/docs-icon.png',
      size: '34KB',
      owner: 'Zoey Edwards',
      updateTime: '2020-01-26 11:01',
      avatarBg: 'light-blue',
      registry: 'npm',
    },
    {
      key: '8',
      name: 'express',
      nameIconSrc:
        'https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/docs-icon.png',
      size: '34KB',
      owner: 'Zoey Edwards',
      updateTime: '2020-01-26 11:01',
      avatarBg: 'light-blue',
      registry: 'npm',
    },
    {
      key: '9',
      name: 'vue',
      nameIconSrc:
        'https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/docs-icon.png',
      size: '34KB',
      owner: 'Zoey Edwards',
      updateTime: '2020-01-26 11:01',
      avatarBg: 'light-blue',
      registry: 'npm',
    },
    {
      key: '10',
      name: 'moment',
      nameIconSrc:
        'https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/docs-icon.png',
      size: '34KB',
      owner: 'Zoey Edwards',
      updateTime: '2020-01-26 11:01',
      avatarBg: 'light-blue',
      registry: 'npm',
    },
  ];

  return (
    <Space
      vertical
      align="start"
      spacing="loose"
      style={{ width: '100%', padding: '8px 24px' }}
    >
      <Helmet>
        <title>Workspace</title>
      </Helmet>
      <div style={{ display: 'flex', width: '100%' }}>
        {data.map((item, index) => (
          <div
            key={item.key}
            style={{ padding: index === 0 ? '0 24px 0 0' : '0 24px' }}
          >
            <Text type="secondary">{item.key}</Text>
            <Title heading={2} style={{ margin: '8px 0' }}>
              {item.value}
            </Title>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', width: '100%' }}>
        <Tabs type="button" style={{ width: '100%' }}>
          <TabPane tab="Scopes" itemKey="1">
            <div style={{ padding: '16px 0' }}>
              <Row gutter={[16, 24]}>
                <Col span={6}>
                  <Card
                    style={{ maxWidth: 360, minWidth: 360 }}
                    bodyStyle={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Meta
                      title="@npm-book"
                      description="create by beace"
                      avatar={
                        <Avatar color="blue" alt="Card meta img" size="default">
                          N
                        </Avatar>
                      }
                    />
                    <Popover
                      position="top"
                      showArrow
                      content={<article style={{ padding: 6 }}>Owners</article>}
                    >
                      <AvatarGroup maxCount={4} size="small">
                        <Avatar color="red" alt="Lisa LeBlanc">
                          LL
                        </Avatar>
                        <Avatar alt="Caroline Xiao">CX</Avatar>
                        <Avatar color="amber" alt="Rafal Matin">
                          RM
                        </Avatar>
                        <Avatar
                          style={{
                            color: '#f56a00',
                            backgroundColor: '#fde3cf',
                          }}
                          alt="Zank Lance"
                        >
                          ZL
                        </Avatar>
                        <Avatar
                          style={{ backgroundColor: '#87d068' }}
                          alt="Youself Zhang"
                        >
                          YZ
                        </Avatar>
                      </AvatarGroup>
                    </Popover>
                  </Card>
                </Col>
                <Col span={6}>
                  <Card
                    style={{ maxWidth: 360, minWidth: 360 }}
                    bodyStyle={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Meta
                      title="@npm-book"
                      description="create by beace"
                      avatar={
                        <Avatar color="red" alt="Card meta img" size="default">
                          B
                        </Avatar>
                      }
                    />
                    <Popover
                      position="top"
                      showArrow
                      content={
                        <article style={{ padding: 6 }}>这是一个 Card</article>
                      }
                    >
                      <IconInfoCircle
                        style={{ color: 'var(--semi-color-primary)' }}
                      />
                    </Popover>
                  </Card>
                </Col>
                <Col span={6}>
                  <Card
                    style={{ maxWidth: 360, minWidth: 360 }}
                    bodyStyle={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Meta
                      title="@npm-book"
                      description="create by beace"
                      avatar={
                        <Avatar
                          color="yellow"
                          alt="Card meta img"
                          size="default"
                        >
                          C
                        </Avatar>
                      }
                    />
                    <Popover
                      position="top"
                      showArrow
                      content={
                        <article style={{ padding: 6 }}>这是一个 Card</article>
                      }
                    >
                      <IconInfoCircle
                        style={{ color: 'var(--semi-color-primary)' }}
                      />
                    </Popover>
                  </Card>
                </Col>
                <Col span={6}>
                  <Card
                    style={{ maxWidth: 360, minWidth: 360 }}
                    bodyStyle={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Meta
                      title="@npm-book"
                      description="create by beace"
                      avatar={
                        <Avatar
                          color="green"
                          alt="Card meta img"
                          size="default"
                        >
                          D
                        </Avatar>
                      }
                    />
                    <Popover
                      position="top"
                      showArrow
                      content={
                        <article style={{ padding: 6 }}>这是一个 Card</article>
                      }
                    >
                      <IconInfoCircle
                        style={{ color: 'var(--semi-color-primary)' }}
                      />
                    </Popover>
                  </Card>
                </Col>
                <Col span={6}>
                  <Card
                    style={{ maxWidth: 360, minWidth: 360 }}
                    bodyStyle={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Meta
                      title="@npm-book"
                      description="create by beace"
                      avatar={
                        <Avatar
                          color="purple"
                          alt="Card meta img"
                          size="default"
                        >
                          E
                        </Avatar>
                      }
                    />
                    <Popover
                      position="top"
                      showArrow
                      content={
                        <article style={{ padding: 6 }}>这是一个 Card</article>
                      }
                    >
                      <IconInfoCircle
                        style={{ color: 'var(--semi-color-primary)' }}
                      />
                    </Popover>
                  </Card>
                </Col>
              </Row>
            </div>
          </TabPane>
          <TabPane tab="Packages" itemKey="2">
            My Package List
          </TabPane>
        </Tabs>
      </div>
      <Title heading={4} style={{ margin: '8px 0' }}>
        Popular libraries
      </Title>
      <Table columns={columns} dataSource={tableData} pagination={false} />
    </Space>
  );
};

export default Index;
