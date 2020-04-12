import React from "react";

class Icon extends React.Component{
    state = {
        isHover: false
    };
    onChangeHover = () => {
        this.setState({
            isHover: !this.state.isHover
        })
    };

    render(){
        return  <img src={this.state.isHover ? this.props.link : this.props.linkHover}
                     alt='icon'
                     onMouseOver={this.onChangeHover}
                     onMouseOut={this.onChangeHover} />
    }
}

export default Icon;
