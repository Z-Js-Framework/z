/** @jsx createElement */
export { createElement } from './jsxFactory';
export { useRef } from './useRef';
export { updateDom } from './snabbdomPatcher';

export function render(element: any) {
  document.body.appendChild(element);
}
