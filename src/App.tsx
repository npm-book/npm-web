import { Switch, Route } from '@modern-js/runtime/router';
import { Button, Toast, Typography } from '@douyinfe/semi-ui';
import './App.css';

const { Title } = Typography;

const App = () => (
  <Switch>
    <Route exact={true} path="/">
      <Title style={{ margin: '8px 0' }}>Private npm registry</Title>
      <Button onClick={() => Toast.warning({ content: 'welcome' })}>
        Hello Private npm web.
      </Button>
    </Route>
    <Route path="*">
      <div>404</div>
    </Route>
  </Switch>
);

export default App;
