import React from 'react';
import { fetchPost } from './api';


/*
  Instructions:
    Finish implementing the `useWait` custom Hook.
    `useWait` should return a boolean that changes from
    `false` to `true` after `delay` seconds.
*/

export function useWait(delay){
    const [show, setShow] = React.useState(false);
    React.useEffect(() => {
      const id = window.setTimeout(() => setShow(true),delay);
      return () => window.clearTimeout(id);
    },[delay])

  return show;
}

/*
  Instructions:
    You're given a `useWindowDimensions` custom Hook. Your
    job is to finish implementing it. It should return
    an object with a `width` property that represents the current
    width of the window and a `height` property which represents
    the current height.

    To get those values, you can use teh `window.addEventListener`
    API.https://developer.mozilla.org/en-US/docs/Web/API/Window/resize_event
*/

function useWindowDimensions(){
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);

  React.useEffect(() => {
    const listener = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  },[])

  return { width, height};
}

export function ResizeApp(){

  const {width, height} = useWindowDimensions();

  return(
    <div>
      <h2>Width : {width}</h2>
      <h2>Height : {height}</h2>
    </div>
  );

}

function useFetch(id){
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    setLoading(true)
    setError(null)
    fetchPost(id)
      .then((post) =>{
        setPost(post)
        setLoading(false)
        setError(null)
      })
      .catch((e) => {
        setError(e.message)
        setLoading(false)
      })
  }, [url]);

  return { loading, data, error}
}