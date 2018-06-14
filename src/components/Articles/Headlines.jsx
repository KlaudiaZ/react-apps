import React from 'react';
import SingleHeadline from './SingleHeadline';

const Headlines = ({headlines, onArticleSelect, selectedArticle}) => {
    return (
        <div>
            <ul className="article-list menu-list">
                <SingleHeadline headlines={headlines} handleArticleSelect={onArticleSelect} selectedArticle={selectedArticle} />
                {/* <li><a>Article 1</a></li>
                <li><a className="is-active" >Article 2</a></li>
                <li><a>Article 3</a></li>
                <li><a>Article 4</a></li>
                <li><a>Article 5</a></li> */}
            </ul>  
        </div>
    )
}

export default Headlines;