// /** @jsx createElement */
// export { createElement } from './jsxFactory';
// export { useRef } from './useRef';
// export { updateDom } from './snabbdomPatcher';

import { Example } from './components/my-components';

console.log('log', Example());

export function render(element: any) {
  document.body.appendChild(element);
}

render(Example());
