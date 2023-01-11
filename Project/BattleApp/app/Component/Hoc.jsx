import * as React from 'react';

// This is just a compostion, However we need to place same hovering code logic in all the components that is needed.
// Based on the hovering state, we should be showing the tool tip.
export class Info extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            hovering: false,
        }

        this.mouseOver = this.mouseOver.bind(this);
        this.mouseOut = this.mouseOut.bind(this);
    }

    mouseOver(){
      this.setState({ hovering: true })  
    }

    mouseOut(){
        this.setState({ hovering: false})
    }

    render(){
        return (
            <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
                {this.state.hovering === true ? "Show Tool Tip" : null}
                <svg
                className="Icon-svg Icon--hoverable-svg"
                height={this.props.height}
                viewBox="0 0 16 16"
                width="16"
                >
                <path d="M9 8a1 1 0 0 0-1-1H5.5a1 1 0 1 0 0 2H7v4a1 1 0 0 0 2 0zM4 0h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4zm4 5.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                </svg>
          </div>
        );
    }
}

// This is a Hoc, where the hover logic will be. we need to pass the component that needs to get the logic
// By default the propName will be hovering, if the propName is differnt, we need to map the hovering to the component prop name
function withHover(Component, propName = "hovering"){
    return class withHover extends React.Component{
        constructor(props){
            super(props);

            this.state = {
                hovering: false
            }

            this.mouseOver = this.mouseOver.bind(this);
            this.mouseOut = this.mouseOut.bind(this);
        }

        mouseOver(){
            this.setState({ hovering: true})
        }

        mouseOut(){
            this.setState( { hovering: false })
        }

        render(){
            return(
                <div onMouseOut={this.mouseOut} onMouseOver = {this.mouseOver}>
                    <Component hovering = {this.state.hovering}/>
                </div>
             );
        }
    }
}

// this is callback component used in the HOC
function InfoCallBack({hovering, heights}){
    return(
        <div>
        {hovering === true ? "Show ToolTip" : null}
        <svg
        className="Icon-svg Icon--hoverable-svg"
        height={height}
        viewBox="0 0 16 16"
        width="16"
        >
            <path d="M9 8a1 1 0 0 0-1-1H5.5a1 1 0 1 0 0 2H7v4a1 1 0 0 0 2 0zM4 0h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4zm4 5.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
        </svg>
        </div>
    );
}


// this is callback component used in the HOC with differnt propName for hovering
function Info1CallBack({showToolTip, heights}){
    return(
        <div>
        {showToolTip === true ? "Show ToolTip" : null}
        <svg
        className="Icon-svg Icon--hoverable-svg"
        height={height}
        viewBox="0 0 16 16"
        width="16"
        >
            <path d="M9 8a1 1 0 0 0-1-1H5.5a1 1 0 1 0 0 2H7v4a1 1 0 0 0 2 0zM4 0h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4zm4 5.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
        </svg>
        </div>
    );
}

const InfowithHover = withHover(InfoCallBack)
const Info1withHover = withHover(Info1CallBack, "showToolTip")