
const router = (ruta: string) => {
  console.log("Clicked", ruta);

  switch (ruta) {
    case 'widgets':
      console.log("Caso 1");
    break;
    case 'charts':
      console.log("Caso 2");
    break;
    case 'tables':
      console.log("Caso 3");
    break;
    case 'pages':
      console.log("Caso 4");
    break;

    default:
      console.log("Not found 404");

  }

}


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
      <li className="sub-menu">
        <a href="/" >
          <i className="icon_document_alt" />
          <span>Forms</span>
          <span className="menu-arrow arrow_carrot-right" />
        </a>
        <ul className="sub">
          <li><a href="form_component.html">Form Elements</a></li>
          <li><a href="form_validation.html">Form Validation</a></li>
        </ul>
      </li>
      <li className="sub-menu">
        <a href="/#" onClick={() => router('no existe')}>
          <i className="icon_desktop" />
          <span>UI Fitures</span>
          <span className="menu-arrow arrow_carrot-right" />
        </a>
        <ul className="sub">
          <li><a href="general.html">Elements</a></li>
          <li><a href="buttons.html">Buttons</a></li>
          <li><a href="grids.html">Grids</a></li>
        </ul>
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
      <li className="sub-menu">
        <a href="/#" onClick={() => router('tables')}>
          <i className="icon_table" />
          <span>Tables</span>
          <span className="menu-arrow arrow_carrot-right" />
        </a>
        <ul className="sub">
          <li><a href="basic_table.html">Basic Table</a></li>
        </ul>
      </li>
      <li className="sub-menu">
        <a href="/#" onClick={() => router('pages')}>
          <i className="icon_documents_alt" />
          <span>Pages</span>
          <span className="menu-arrow arrow_carrot-right" />
        </a>
        <ul className="sub">
          <li><a href="profile.html">Profile</a></li>
          <li><a href="login.html"><span>Login Page</span></a></li>
          <li><a href="contact.html"><span>Contact Page</span></a></li>
          <li><a href="blank.html">Blank Page</a></li>
          <li><a href="404.html">404 Error</a></li>
        </ul>
      </li>
    </ul>
  </div>
</aside>
    )
}

 


export{
    Sidebar
}