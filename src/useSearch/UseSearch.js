import { useState, useEffect } from 'react'
import Axios from 'axios'
import { useCounterAddImage } from '../useCounter/useCounter'
import { useStateValue } from '../stateProvider/StateProvider'
function UseSearch() {
  const [{ paramsUrl }] = useStateValue()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [addImages] = useCounterAddImage()
  const [hasMore, sethasMore] = useState(false)
  useEffect(() => {
    setLoading(true)
    Axios({
      method: 'GET',
      url: 'https://pixabay.com/api/?key=18457839-6eab5ae2caca6daf8a2bf064d',
      params: {
        q: paramsUrl.query,
        image_type: paramsUrl.catagory,
        per_page: paramsUrl.pageNumber,
      },
    })
      .then((res) => {
        setLoading(false)
        addImages(res.data.hits)
        sethasMore(res.data.hits.length > 0)
      })
      .catch((err) => {
        setError(true)
        setLoading(false)
        if (Axios.isCancel(err)) return
      })
  }, [paramsUrl.query, paramsUrl.catagory, paramsUrl.pageNumber])
  return { error, loading, hasMore }
}

export default UseSearch
