import './styles.css'

import colorData from './data/colorData'
import Header from './components/Header'

export default function App() {
  function ColorCard({ color, id }) {
    return (
      <div className="color-card" style={{ background: color }}>
        <p>
          <span>{id + 1}.</span> {color}
        </p>
      </div>
    )
  }

  return (
    <div className="wrapper">
      <Header />
      {colorData.map((color, id) => (
        <ColorCard key={id} color={color} id={id} />
      ))}
    </div>
  )
}
