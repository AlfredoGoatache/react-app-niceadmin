import { Panel } from "../widgets/Panel";

const Dashboard =() => {
    return (
      <div className="row">
          <div className="col-md-6">
            <Panel titulo={'Panel 1'} contenido={"Esto es la data"}/>
          </div>
          <div className="col-md-6">
          <Panel titulo={'Panel 2'}/>
          </div>
  
          <div className="col-md-6">
            <Panel titulo={'Panel 1'} contenido={"Esto es la data"}/>
          </div>
          <div className="col-md-6">
          <Panel titulo={'Panel 2'}/>
          </div>
  
          <div className="col-md-6">
            <Panel titulo={'Panel 1'} contenido={"Esto es la data"}/>
          </div>
          <div className="col-md-6">
          <Panel titulo={'Panel 2'}/>
          </div>
  
          <div className="col-md-6">
            <Panel titulo={'Panel 1'} contenido={"Esto es la data"}/>
          </div>
          <div className="col-md-6">
          <Panel titulo={'Panel 2'}/>
          </div>
  
          <div className="col-md-6">
            <Panel titulo={'Panel 1'} contenido={"Esto es la data"}/>
          </div>
          <div className="col-md-6">
          <Panel titulo={'Panel 2'}/>
          </div>
      </div>
    );
  }

export{
    Dashboard
}