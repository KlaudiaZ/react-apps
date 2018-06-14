import React, {Fragment} from 'react';
import Loader from '../../Loader';

const SingleHeadline = ({headlines, handleArticleSelect, selectedArticle}) => {
    if (headlines) {
        return (
            <Fragment>
            {headlines.map((headline) => {
                return (
                    <li key={headline.id}>
                        <a  onClick={() => {handleArticleSelect(headline.id)}}>
                            {headline.title}
                        </a>
                    </li>
                    );
            })}
            </Fragment>
        );
    } else {
        return (
            <Loader />
        );
    }
}

export default SingleHeadline;