import App from './App';
import { createRoot } from 'react-dom/client';

describe('app', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const root = createRoot(div);
    root.render(typeof App);
    root.unmount();
  });
});
