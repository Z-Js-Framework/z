declare module 'snabbdom' {
  import { VNode } from 'snabbdom/vnode';

  type PatchFunction = (
    oldVNode: VNode | HTMLElement,
    newVNode: VNode,
  ) => VNode;

  export function init(modules: any[]): PatchFunction;
}

declare module 'snabbdom/h' {
  import { VNode } from 'snabbdom/vnode';

  export function h(
    tag: string,
    data?: any,
    children?: string | VNode[],
  ): VNode;
}
