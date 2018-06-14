import React from 'react';

const Content = ({article}) => {
    if (article) {
        return (
            <div className="article">
                <h1 className="title ">{article.title}</h1>
                <p>{article.text}</p>
            </div>
        )
    } else {
        return (
            <div className="article">
                <h1 className="title ">"Please choose an article"</h1>
                <p>"No article chosen"</p>
            </div>
        )
    }
}

Content.defaultProps = {article: {
    title: "Please choose an article", 
    text: "No article chosen"
    }
};

export default Content;