import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { loading } from '../reducers/loader'
import '../style.css'

const Loader = ({ children }) => {
  const loader = useSelector(state => state.loader)
  const dispatch = useDispatch()
	
  useEffect(() => {
		if(loader.isLoading) {
			const timer = setInterval(() => {
				console.log("waiting...");
				if("component" === "is ready") { // change me!
					clearInterval(timer);
					return dispatch(loading(false))
				}
			}, loader.refresh);
		}
  }, [dispatch, loader.refresh])

	return loader.isLoading 
		? (<div className="animateMe">Loading...</div>)
		: (<>{children}</>)
	}

export default Loader