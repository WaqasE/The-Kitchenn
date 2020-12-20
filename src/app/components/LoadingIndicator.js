import React,{useEffect} from 'react';
import lottie from 'lottie-web'
import animationData from  '../assets/loading.json'

function LoadingIndicator( {visible=false} ) {
    useEffect(() => {
        lottie.loadAnimation({
          container: document.querySelector("#loading"),
          animationData:animationData
        });
      }, []);
      if(!visible) return null
        return (
            <div id="loading" />
        );
}

export default LoadingIndicator;