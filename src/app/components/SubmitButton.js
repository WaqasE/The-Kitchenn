import React from 'react';
import Loading from './LoadingIndicator'
function Button( {isSubmiting, ...otherprops} ) {


        if(!isSubmiting){
            return(
                    <>
                    <input  id="btn" {...otherprops}/>
                    </>
            );}
    else{
        return (
        <div id="submitLoadingWrapper">
            <Loading visible={true}/>
        </div>);
    }
}

export default Button;