const { useState, useEffect } = require("react");
// data for home cards
const useSiteData = () => {
    const [site, setsite] = useState([])
    useEffect(() => {
        fetch('https://travelmama.onrender.com/sites').then(res => res.json()).then(data => setsite(data))
    }, [])
    return [site]
}
export default useSiteData;