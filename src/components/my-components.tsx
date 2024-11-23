import { getRef, jsx } from '../jsx-runtime';

export function Example() {
  console.log('Rendering Example component');

  const handleClick = () => {
    console.log('Button clicked!');
    const button = getRef('myButton');
    if (button) {
      console.log('Found button:', button);
      button.textContent = 'Clicked!';
    }
  };

  const handleTitleClick = () => {
    console.log('Title clicked!');
    const title = getRef('myTitle');
    if (title) {
      console.log('Found title:', title);
      title.style.color = title.style.color === '#fff' ? '#ff0' : '#fff';
    }
  };

  return (
    <div
      style={{
        padding: '20px',
        maxWidth: '600px',
        margin: '0 auto',
        color: '#fff',
        backgroundColor: '#000',
        borderRadius: '8px',
      }}
    >
      <h1
        ref="myTitle"
        onClick={handleTitleClick}
        style={{
          fontSize: '24px',
          marginBottom: '20px',
          cursor: 'pointer',
        }}
      >
        Click me to change color!
      </h1>

      <button
        ref="myButton"
        className="button"
        onClick={handleClick}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          backgroundColor: '#333',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
        }}
      >
        Click me!
      </button>
    </div>
  );
}
