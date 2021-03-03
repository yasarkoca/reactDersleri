import React, { Component } from 'react'
import NewsItem from './NewsItem.js';
import NewsForm from './NewsForm.js';

class News extends Component{
    addNews(){
        console.log('YAŞAR1');
    }
    render (){
        const news = [{ 
        title :"title 1",
        description:"description 1"              
        },
        { title :"title 2",
        description :"description 2"              
        },
        { title :"title 3",
         description:"description 3"              
        }];
        return( 
            <div>
            <NewsItem title={news[0].title}
                       description={news[0].description}></NewsItem>

            <NewsItem title={news[1].title}
                       description={news[1].description}></NewsItem>
                       
            <NewsItem title={news[2].title}
                       description={news[2].description}></NewsItem>
            <NewsForm addNews={this.addNews}/>
            </div>
        )
    }
}

export default News;