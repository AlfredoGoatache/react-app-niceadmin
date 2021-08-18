import { router } from "../../widgets/Router.component"


const Sidebar = () => {

    return (
<aside>
  <div id="sidebar" className="nav-collapse ">

    <ul className="sidebar-menu">
      <li className="active">
        <a href="index.html">
          <i className="icon_house_alt" />
          <span>Dashboard</span>
        </a>
      </li>
      
      <li>
      <a href="/#" onClick={() => router('widgets')}>
          <i className="icon_genius" />
          <span>Widgets</span>
        </a>
      </li>
      <li>
        <a href="/#" onClick={() => router('charts')}>
          <i className="icon_piechart" />
          <span>Charts</span>
        </a>
      </li>
    
    </ul>
  </div>
</aside>
    )
}

export{
    Sidebar
}