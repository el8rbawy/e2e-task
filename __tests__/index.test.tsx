import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../app/page';
import jsonItems from '../public/items.json';

// ---
test('renders item list', () => {
   render(<Home />);
   const itemElements = screen.getAllByText(/Price/i);
   expect(itemElements).toHaveLength(4);
});

// ---
test('filter search item list', () => {
   render(<Home />);
   const searchInput = screen.getByPlaceholderText('Search items');
   fireEvent.change(searchInput, { target: { value: 'iPhone' }});

   const itemElements = screen.getAllByText(/Price/i);
   expect(itemElements).toHaveLength(1);
});

// ---
test('price range', () => {
   const { container } = render(<Home />);
   const min = container.querySelector('.range input#min');
   if (min) fireEvent.change(min, { target: { value: '1000' }});

   const itemElements = screen.getAllByText(/Price/i);
   expect(itemElements).toHaveLength(3);
});

// ---
test('sortBy', () => {
   const { container } = render(<Home />);
   const sortbyButton = screen.getAllByText('Sort by');
   fireEvent.click(sortbyButton[0]);

   const pricrhighToLowBtn = screen.getAllByText('Price: High to Low');
   fireEvent.click(pricrhighToLowBtn[0]);

   const item = container.querySelector('.items.products li span');
   const maxPriceItem = jsonItems.reduce((prev, current) => (prev.price > current.price) ? prev : current).price;
   expect(item).toHaveTextContent(`Price: $${maxPriceItem.toLocaleString()}`);
});

// ---
test('add to cart', () => {
   const { container } = render(<Home />);
   const addToCartButtons = screen.getAllByText('Add to Cart');
   fireEvent.click(addToCartButtons[0]);

   const basket = container.querySelector('.container .basket span');
   expect(basket).toHaveTextContent('1');
});