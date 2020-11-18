// 네트워크 데이터 요청, 응답 받는 커스텀 훅
import { useState, useEffect } from 'react'

export default function useFetch(endpoint, callback = null, method = 'json') {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [hasError, setHasError] = useState(null)

  useEffect(() => {
    fetch(endpoint)
      .then((res) => res[method]())
      .then((result) => {
        setData(result)
        setLoading(false)
        // 콜백 설정
        callback &&
          typeof callback === 'function' &&
          callback({ data, loading, hasError })
      })
      .catch(({ message }) => {
        setHasError({ message })
        setLoading(false)
      })
  })
  return [data, loading, hasError]
}
