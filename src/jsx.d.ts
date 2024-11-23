declare namespace JSX {
  interface Element extends HTMLElement {}
  
  interface ElementClass {
    render(): Element;
  }

  interface ElementAttributesProperty {
    props: {};
  }
  
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}
