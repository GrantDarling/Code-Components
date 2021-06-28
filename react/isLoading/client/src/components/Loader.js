import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { loading } from '../reducers/loader'
import '../style.css'

const Loader = ({ children }) => {
  const loader = useSelector(state => state.loader)
  const dispatch = useDispatch()
	const refresh = loader.refresh
	
  useEffect(() => {
		const timer = setInterval(() => {
			console.log("waiting...");
    	if("component" === "component") {
        clearInterval(timer);
        return dispatch(loading(false))
    	}
		}, refresh);
  }, [dispatch])

	return loader.isLoading 
		? (<div className="animateMe">Loading...</div>)
		: (<>{children}</>)
	}

export default Loader