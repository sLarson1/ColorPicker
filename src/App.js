import React from 'react';

const changeColors = (colors, setColors, index) => {

}

function App() {
  const [colors, setColors] = React.useState([
    '#FFD500',
    '#FF0040',
  ]);
  
  const colorStops = colors.join(', ');
  const backgroundImage = `linear-gradient(${colorStops})`;

  return (
    <div className="wrapper">
      <div className="actions">
        <button
          onClick={ (event) => {                                        
            console.log('Remove color');
            const nextColors = [...colors];
            nextColors.pop();

            setColors(nextColors);
          }
          }        
        >
          Remove color
        </button>
        <button
          onClick={ (event) => {                                        
            console.log('Add color');
            const nextColors = [...colors];
            nextColors.push('#FF0000');

            setColors(nextColors);
          }
          }
        >
          Add color
        </button>
      </div>
      
      <div
        className="gradient-preview"
        style={{
          backgroundImage,
        }}
      />
      
      <div className="colors">
        {colors.map((color, index) => {
          const colorId = `color-${index}`;
          return (
            <div key={colorId} className="color-wrapper">
              <label htmlFor={colorId}>
                Color {index + 1}:
              </label>
              <div className="input-wrapper">
                <input
                  id={colorId}
                  type="color"
                  value={color}
                  onChange={ (event) => {                                        
                    console.log('current color:'+color +' new color:'+event.target.value);
                    const nextColors = [...colors];
                    nextColors[index] = event.target.value;
  
                    setColors(nextColors);
                  }
                  }
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;