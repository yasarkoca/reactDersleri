import React, { Component } from "react";

class NewsForm extends Component{
    constructor(){
        super();
        console.log(this);
    }
    addButton (){
        this.props.addNews();
    }
    render(){
        return(
            <button onClick={this.addButton.bind(this)} >
                Add
            </button>

        )
    }
}

export default NewsForm;