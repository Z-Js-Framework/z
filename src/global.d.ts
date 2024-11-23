declare global {
  module JSX {
    type IntrinsicElements = Record<
      keyof HTMLElementTagNameMap,
      Record<string, any>
    >;
  }
}

declare namespace JSX {
  interface IntrinsicElements {
    div: any;
    h1: any;
    button: any;
    span: any;
    p: any;
    input: any;
    form: any;
    label: any;
    img: any;
    a: any;
  }
}

declare module '@/jsx-runtime' {
  export function jsx(type: any, props: any): HTMLElement;
  export function jsxs(type: any, props: any): HTMLElement;
  export function Fragment(props: { children: any[] }): HTMLElement;
  export function useRef(refName: string): HTMLElement | null;
}

export {};
