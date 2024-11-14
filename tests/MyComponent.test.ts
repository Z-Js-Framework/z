import { describe, it, expect } from 'vitest';
import { MyComponent } from '../src/components/my-components';

describe('MyComponent', () => {
  it('should render the button with initial text', () => {
    const component = MyComponent();
    expect(component.textContent).toBe('Click Me');
  });

  it('should change text when clicked', () => {
    const component = MyComponent();
    component.click();
    expect(component.textContent).toBe('Clicked!');
  });
});
