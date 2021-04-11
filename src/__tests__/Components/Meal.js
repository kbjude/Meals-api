import { render, screen, act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../reducers/store';
import Meal from '../../components/Meal';

const character = {
  id: '2',
  name: 'Chicken',
  description: 'Chicken well cooked',
  image: 'www.mockurl.com',
};

describe('Rendering component', () => {
  it('creates a Meal component', () => {
    act(() => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Meal
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
          <Meal
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
