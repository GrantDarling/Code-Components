import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch, useStore } from 'react-redux'
import { loading } from './reducers/isLoading'
import './style.css'

export default function App() {
  const isLoading = useSelector(state => state.isLoading)
  const dispatch = useDispatch()
  const divEl = useRef(null);

  const timer = (seconds, resolve) => {
    const milliseconds = seconds * 1000
    let x = 0
    const y = setInterval(() => { 
      console.log("waiting...");
      x++;
      // console.log(divEl.current.style.left)
      if(x === 3) {
        clearInterval(y);
        return resolve(false)
      }
    }, milliseconds);
  }

  useEffect(() => {
    const animation = () => {
      return new Promise((resolve, reject) => {
         return timer(1, resolve)
      })
    }

    async function waitForAnimation() {
      const response = await animation()
      console.log("response");
      return dispatch(loading(response))
    }

    waitForAnimation()
  }, [])

  if (isLoading) {
    return (
      <>
        <div ref={divEl} className="animateMe" name="animatione">Im loading still tho.</div>
        <button onClick={() => dispatch(loading(!isLoading))}>click</button>
      </>
    )
  }

  return (
    <div className="App">
      <h1>Content Loaded</h1>
      <button onClick={() => dispatch(loading(!isLoading))}>click</button>
    </div>
  );
}
