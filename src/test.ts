// @ts-nocheck
import { Example } from './components/my-components';

console.log('Starting test...');

// Create a div to mount our component
// const root = document.createElement('div');
// root.id = 'root';
document.body.appendChild(Example());

// Render the Example component
// console.log('Creating Example component...');
// try {
//   const example = Example();
//   console.log('Created element:', example);

//   // Mount the component
//   console.log('Mounting component...');
//   root.appendChild(example);
//   console.log('Component mounted!');
// } catch (error) {
//   console.error('Error creating/mounting component:', error);
// }

// // Add some basic styles
// document.body.style.margin = '0';
// document.body.style.padding = '20px';
// document.body.style.fontFamily = 'system-ui, sans-serif';
