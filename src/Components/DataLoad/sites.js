const { useState, useEffect } = require("react");

const useSiteData = () => {
    const [site, setsite] = useState([])
    useEffect(() => {
        fetch('https://enigmatic-earth-69756.herokuapp.com/sites').then(res => res.json()).then(data => setsite(data))
    }, [])
    return [site]
}
export default useSiteData;