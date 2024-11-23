// @ts-nocheck

// Types for our JSX implementation
export type Props = Record<string, any>;
export type Component = (props: Props) => HTMLElement;

// Simple ref implementation
const refs = new Map<string, HTMLElement>();
export const getRef = (name: string) => refs.get(name);

function createElement(tag: string, props: Props = {}): HTMLElement {
  console.log('createElement:', { tag, props });
  
  // Create the DOM element
  const element = document.createElement(tag);

  // Handle props
  for (const [key, value] of Object.entries(props)) {
    if (key === 'children') continue;
    
    if (key === 'className') {
      element.className = value;
    } else if (key === 'style' && typeof value === 'object') {
      Object.assign(element.style, value);
    } else if (key.startsWith('on') && key.length > 2) {
      const eventName = key.slice(2).toLowerCase();
      element.addEventListener(eventName, value);
    } else if (key === 'ref') {
      refs.set(value, element);
    } else {
      element.setAttribute(key, value);
    }
  }

  // Handle children from props
  if (props.children) {
    const children = Array.isArray(props.children) ? props.children : [props.children];
    children.forEach(child => {
      if (child == null || child === false) {
        return;
      }
      if (child instanceof Node) {
        element.appendChild(child);
      } else {
        element.appendChild(document.createTextNode(String(child)));
      }
    });
  }

  return element;
}

// Main JSX factory function
export function jsx(
  type: string | Component,
  props: Props | null,
): HTMLElement {
  console.log('jsx:', { type, props });
  const allProps = props || {};

  // Handle component functions
  if (typeof type === 'function') {
    return type(allProps);
  }

  return createElement(type, allProps);
}

// Fragment implementation
export function Fragment({ children }: Props): HTMLElement {
  const fragment = document.createDocumentFragment();
  const childArray = Array.isArray(children) ? children : [children];
  
  childArray.forEach((child) => {
    if (child instanceof Node) {
      fragment.appendChild(child);
    } else if (child != null) {
      fragment.appendChild(document.createTextNode(String(child)));
    }
  });
  
  return fragment as unknown as HTMLElement;
}

// Alias for jsx
export const jsxs = jsx;
