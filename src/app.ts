import Header from './components/header.ts';
import Home from './components/home.ts';
import scroll from './components/scroll.ts';

export default function App(){

  const root: any = document.getElementById('root');

  root.appendChild(Header());
  root.appendChild(Home())

  scroll()
}