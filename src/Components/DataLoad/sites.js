const { useState, useEffect } = require("react");

const useSiteData = () => {
    const [site, setsite] = useState([])
    useEffect(() => {
        fetch('http://localhost:7000/sites').then(res => res.json()).then(data => setsite(data))
    }, [])
    return [site]
}
export default useSiteData;