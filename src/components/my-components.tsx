import { useRef } from '../useRef';

export function MyComponent() {
  const buttonRef = useRef<HTMLButtonElement>();

  return (
    <button
      ref={(el) => (buttonRef.current = el)}
      onClick={() => (buttonRef.current!.innerHTML = 'Clicked!')}
    >
      Click Me
    </button>
  );
}
