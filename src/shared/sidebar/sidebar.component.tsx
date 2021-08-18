import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Sidebar = () => {

    return (
      <Router>
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
                <a href="widgets.html">
                  <i className="icon_genius" />
                  <span>Widgets</span>
                </a>
              </li>
              <li>
                <a href="Charts.component.tsx">
                  <i className="icon_piechart" />
                  <span>Charts</span>
                </a>
              </li>
              
              <li className="sub-menu">
                <a href="/" >
                  <i className="icon_documents_alt" />
                  <span>Pages</span>
                  <span className="menu-arrow arrow_carrot-right" />
                </a>
                <ul className="sub">
                  <li><a href="blank.html">Blank Page</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </aside>
        </Router>
            )
}

export{
    Sidebar
}