import * as React from 'react';

// this wrapper class that render other components
// Children is a function -> we pass the current hovering state to the function and based on the component will be rendered. 
//   {this.props.children(this.state.hovering)}  
// we are going to pass the a function to hover1 component and based on the hovering state , it going to render a component.
class Hover1 extends React.Component {
    constructor(props) {
      super(props)
  
      this.state = {
        hovering: false
      }
  
      this.mouseOver = this.mouseOver.bind(this)
      this.mouseOut = this.mouseOut.bind(this)
    }
    mouseOver() {
      this.setState({ hovering: true })
    }
    mouseOut() {
      this.setState({ hovering: false })
    }
    render() {
      return (
        <div
          onMouseOver={this.mouseOver}
          onMouseOut={this.mouseOut}
        >
          {this.props.render(this.state.hovering)} 
        </div>
      )
    }
  }


// In the main app, we need to pass the function that needs to  render the component based on the hovering state 
function aps(){
    return(<div>
        <Hover1 render = {(hovering) => <Info hovering = {hovering} />}/>
        <Hover1 render = {(hovering) => <TrendChart hovering = {hovering} />}/> 
    </div>);
}

// we need to pass hovering as props to make something visibile
function Info(props){
    return(
        <div>
        {props.hovering === true ? "Show Info": null}
        </div>
    )
}

function TrendChart(props){
    return(
        <div>
        {props.hovering === true ? "Show TrendInfo": null}
        </div>
    )
}
