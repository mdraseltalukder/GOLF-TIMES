import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

export default function Root() {
  return (
<>
    <main>
        <Header/>
        <Outlet/>
    </main>
    <Footer/>
</>
  )
}
