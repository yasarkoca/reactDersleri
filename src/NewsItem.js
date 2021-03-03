import React, { Component } from 'react'
import './NewsItem.css'

class NewsItem extends Component{

    constructor(){
        super();
        console.log('hey');
    }
    render (){
        return( 
            <div>
                <h1>{this.props.title}</h1>
                <h1>{this.props.description}</h1>
            </div>
        )
    }
}

export default NewsItem; 