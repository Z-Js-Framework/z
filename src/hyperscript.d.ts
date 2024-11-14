declare module 'hyperscript' {
  export function h(
    tag: string,
    props?: Record<string, any> | null,
    ...children: any[]
  ): HTMLElement;
}
