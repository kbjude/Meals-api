import { render, screen, act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../reducers/store';
import Category from '../../components/Category';

const character = {
  id: '2',
  name: 'Chicken',
  description: 'Chicken well cooked',
  image: 'www.mockurl.com',
};

describe('Rendering component', () => {
  it('creates a Category component', () => {
    act(() => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Category
              id={character.id}
              name={character.name}
              description={character.description}
              image={character.image}
              path="http://localhost:3000/meals/details/52874"
            />
          </Provider>
        </BrowserRouter>,
      );
    });
    screen.getByText('Chicken');
  });
});

describe('Display', () => {
  it('renders correctly', () => {
    const snap = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <Category
            id={character.id}
            name={character.name}
            description={character.description}
            image={character.image}
            path="http://localhost:3000/meals/details/52874"
          />
        </Provider>
      </BrowserRouter>,
    ).toJSON();
    expect(snap).toMatchSnapshot();
  });
});
