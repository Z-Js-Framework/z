import { h } from 'hyperscript';

// Custom JSX pragma function
export function createElement(tag: any, props: any, ...children: any[]) {
  const element = h(tag, props, ...children);

  // Attach ref if provided
  if (props?.ref && typeof props.ref === 'function') {
    props.ref(element);
  }

  return element;
}
