const { useState, useEffect } = require("react");

const useReviewData = () => {
    const [reviews, setreviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:7000/reviews').then(res => res.json()).then(data => setreviews(data))
    }, [])
    return [reviews]
}
export default useReviewData;