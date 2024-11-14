import type { JSX as ReactJSX } from 'react';

declare global {
  namespace JSX {
    // Extend IntrinsicElements from React's JSX types to get HTML support
    interface IntrinsicElements extends ReactJSX.IntrinsicElements {}

    // Optionally, define any custom attributes or elements
    interface IntrinsicAttributes {
      ref?: any;
    }
  }
}
