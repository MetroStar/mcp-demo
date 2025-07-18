import { act, render } from '@testing-library/react';
import { Provider } from 'jotai';
import { AuthProvider } from 'react-oidc-context';
import { BrowserRouter } from 'react-router-dom';
import { Home } from './home';

describe('Home', () => {
  const componentWrapper = (
    <AuthProvider>
      <Provider>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>
    </AuthProvider>
  );

  test('should render successfully', async () => {
    const { baseElement } = render(componentWrapper);
    await act(async () => {
      expect(baseElement).toBeTruthy();
      expect(baseElement.querySelector('h1')?.textContent).toEqual(
        'Welcome Home',
      );
    });
  });
});
