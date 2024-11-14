import { init, VNode } from 'snabbdom';
import { h as snabbdomH } from 'snabbdom/h';

type PatchFunction = (oldVNode: VNode | HTMLElement, newVNode: VNode) => VNode;

// Initialize Snabbdom with modules (e.g., attributes, style modules if needed)
const patch: PatchFunction = init([]);

export function updateDom(
  oldVNode: VNode | HTMLElement,
  newVNode: VNode,
): VNode {
  return patch(oldVNode, newVNode);
}

const oldVNode = snabbdomH('div', {}, 'Hello, world!');
const newVNode = snabbdomH('div', {}, 'Hello, Snabbdom!');

// Patch the old DOM node with the new one
updateDom(oldVNode, newVNode);
