import { h, render } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import './style.css'

function App() {
  const [items, setItems] = useState([])
  useEffect(()=>{
    fetch('/data/news.json').then(r=>r.json()).then(setItems).catch(()=>setItems([]))
  },[])
  return (
    <div>
      <h1>News PWA</h1>
      <ul>
        {items.map(it => (
          <li key={it.id}><a href={it.url} target="_blank" rel="noopener">{it.text}</a></li>
        ))}
      </ul>
    </div>
  )
}

render(<App />, document.getElementById('app'))
