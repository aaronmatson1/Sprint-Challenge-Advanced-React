import React from 'react';
import ReactDOM from 'react-dom';
import * as rt1 from '@testing-library/react'
import { render } from '@testing-library/react';
import NavBar from './components/NavBar';
import App from './App';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

//running to see if App loads without crashing
test('renders without crashing', () => {
  rt1.render(
    <App />
  );
});

// //testing to see if it recognizes that DarkMode is in App.
// test("renders nav", async () => {
//   // Arrange
//   const { getByText } = render(<NavBar />);
//   // Act
//   const darkM = getByText(/Women's World Cup Players/i);
//   // Assert
//   expect(darkM).toBeInTheDocument();
// });
