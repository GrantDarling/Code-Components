import React from "react";
import { useSelector, useDispatch } from 'react-redux'

export default function App() {
  const isLoading = useSelector(state => state.isLoading)
  const dispatch = useDispatch()

  console.log(`Content is ${isLoading}`, isLoading)
  return (
    <div className="App">
      <h1>Content Loaded</h1>
    </div>
  );
}
