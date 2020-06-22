import 'jest-dom/extend-expect';
import * as React from 'react';
import { fireEvent, render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';
import { TertiaryButton } from './TertiaryButton';

describe('primary button', () => {
  describe('renders', () => {
    test('with no props or children', () => {
      const { container } = render(<TertiaryButton />);
      expect(container.firstChild).not.toBeNull();
    });
    test('with child text', () => {
      const { getByText } = render(
        <TertiaryButton>Primary Button</TertiaryButton>
      );
      getByText(/primary button/i);
    });
  });
  describe('props', () => {
    test('onClick is called correctly', () => {
      const onClick = jest.fn();
      const { getByText } = render(
        <TertiaryButton onClick={onClick}>Primary Button</TertiaryButton>
      );
      const button = getByText(/primary button/i);
      expect(onClick).toHaveBeenCalledTimes(0);
      fireEvent.click(button);
      expect(onClick).toHaveBeenCalledTimes(1);
    });
    test('disabled prop prevents onClick', () => {
      const onClick = jest.fn();
      const { getByText } = render(
        <TertiaryButton disabled onClick={onClick}>
          Primary Button
        </TertiaryButton>
      );
      const button = getByText(/primary button/i);
      expect(onClick).toHaveBeenCalledTimes(0);
      fireEvent.click(button);
      expect(onClick).toHaveBeenCalledTimes(0);
    });
  });
});
