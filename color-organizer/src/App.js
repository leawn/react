import './App.css';
import React from 'react';
//import colorData from './data/color-data.json'; I don't need it anymore because of createContext()
import ColorList from './components/ColorList';
import AddColorForm from "./components/AddColorForm";
//import { v4 } from 'uuid'; I don't need it anymore because of createContext()

function App() {
//  const [colors, setColors] = useState(colorData); I don't need it anymore because of createContext()
  return (
      <>
      <ColorList />
                 {/*colors={colors}
                 onRateColor={(id, rating) => {
                     const newColors = colors.map(color =>
                         color.id === id ? { ...color, rating } : color
                     );
                     setColors(newColors);
                 }}
                 onRemoveColor={id => {
                     const newColors = colors.filter(color => color.id !== id);
                     setColors(newColors);
                 }}*/}
      <AddColorForm />
          {/*onNewColor={(title, color) => {
              const newColors = [
                  ...colors,
                  {
                      id: v4(),
                      rating: 0,
                      title,
                      color
                  }
              ];
              setColors(newColors);
          }}*/}
      </>
  );
}

export default App;
