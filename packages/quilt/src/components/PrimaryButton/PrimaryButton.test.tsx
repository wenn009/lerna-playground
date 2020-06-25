import 'jest-dom/extend-expect';
import * as React from 'react';
import { fireEvent, render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';
import { PrimaryButton } from './PrimaryButton';

describe('primary button', () => {
  describe('renders', () => {
    test('with no props or children', () => {
      const { container } = render(<PrimaryButton />);
      expect(container.firstChild).not.toBeNull();
    });
    test('with child text', () => {
      const { getByText } = render(
        <PrimaryButton>Primary Button</PrimaryButton>
      );
      getByText(/primary button/i);
    });
  });
  describe('props', () => {
    test('onClick is called correctly', () => {
      const onClick = jest.fn();
      const { getByText } = render(
        <PrimaryButton onClick={onClick}>Primary Button</PrimaryButton>
      );
      const button = getByText(/primary button/i);
      expect(onClick).toHaveBeenCalledTimes(0);
      fireEvent.click(button);
      expect(onClick).toHaveBeenCalledTimes(1);
    });
    test('disabled prop prevents onClick', () => {
      const onClick = jest.fn();
      const { getByText } = render(
        <PrimaryButton disabled onClick={onClick}>
          Primary Button
        </PrimaryButton>
      );
      const button = getByText(/primary button/i);
      expect(onClick).toHaveBeenCalledTimes(0);
      fireEvent.click(button);
      expect(onClick).toHaveBeenCalledTimes(0);
    });
  });
});
