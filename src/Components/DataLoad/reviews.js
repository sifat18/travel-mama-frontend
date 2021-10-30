const { useState, useEffect } = require("react");
// data for home slider
const useReviewData = () => {
    const [reviews, setreviews] = useState([])
    useEffect(() => {
        fetch('https://enigmatic-earth-69756.herokuapp.com/reviews').then(res => res.json()).then(data => setreviews(data))
    }, [])
    return [reviews]
}
export default useReviewData;