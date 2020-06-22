import 'jest-dom/extend-expect';
import * as React from 'react';
import { fireEvent, render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';
import { SecondaryButton } from './SecondaryButton';

describe('primary button', () => {
  describe('renders', () => {
    test('with no props or children', () => {
      const { container } = render(<SecondaryButton />);
      expect(container.firstChild).not.toBeNull();
    });
    test('with child text', () => {
      const { getByText } = render(
        <SecondaryButton>Primary Button</SecondaryButton>
      );
      getByText(/primary button/i);
    });
  });
  describe('props', () => {
    test('onClick is called correctly', () => {
      const onClick = jest.fn();
      const { getByText } = render(
        <SecondaryButton onClick={onClick}>Primary Button</SecondaryButton>
      );
      const button = getByText(/primary button/i);
      expect(onClick).toHaveBeenCalledTimes(0);
      fireEvent.click(button);
      expect(onClick).toHaveBeenCalledTimes(1);
    });
    test('disabled prop prevents onClick', () => {
      const onClick = jest.fn();
      const { getByText } = render(
        <SecondaryButton disabled onClick={onClick}>
          Primary Button
        </SecondaryButton>
      );
      const button = getByText(/primary button/i);
      expect(onClick).toHaveBeenCalledTimes(0);
      fireEvent.click(button);
      expect(onClick).toHaveBeenCalledTimes(0);
    });
  });
});
