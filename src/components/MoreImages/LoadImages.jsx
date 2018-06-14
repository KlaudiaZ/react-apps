import React, {Fragment} from 'react';
import Loader from '../../Loader';

const LoadImages = ({images}) => {
    return (
        <Fragment>
            {images.length === 0 && <Loader />}
            {images.map((image, index) => {
                return <div key={index}><img src={image} alt={index} /></div>
            })}
        </Fragment>
    );
}

export default LoadImages;