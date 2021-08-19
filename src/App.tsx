import './App.css';
import { Charts } from './pages/Charts.component';
import { Header } from './shared/header/header.component';
import { Sidebar } from './shared/sidebar/sidebar.component';
import { Wrapper } from './widgets/Wrapper.component';



const App = () => {
  
  return (
    <section id="container"  className={''} >
      <Header/>
      <Sidebar/>
        <section id="main-content">
      <Wrapper pagina={<Charts/>}/>
      </section>
    </section>
  );
}

export default App;
