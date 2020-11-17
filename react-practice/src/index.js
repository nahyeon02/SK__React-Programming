import 'react-app-polyfill/ie11'

// React v17 부터 새로운 JSX 트랜스폼을 사용하므로 JSX 사용 시, React를 불러오지 않아도 됩니다.
// 자세히 알아보기 : https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html
import { StrictMode } from 'react'
import { render } from 'react-dom'
import App from '~/App'

render(
  // React.StrictMode는 애플리케이션 내의 잠재적인 문제를 알아내기 위한 도구입니다.
  // Fragment와 같이 UI를 렌더링하지 않으며, 자손들에 대한 부가적인 검사와 경고를 활성화합니다.
  // Strict 모드는 개발 모드에서만 활성화되기 때문에, 프로덕션 빌드에는 영향을 끼치지 않습니다.
  // 자세히 알아보기 : https://ko.reactjs.org/docs/strict-mode.html
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('reactApp')
)

// Web Vitals는 웹 페이지의 사용자 경험을 캡처하는 것을 목표로하는 유용한 메트릭 집합입니다.
// Create React App에서 타사 라이브러리를 사용하여 이러한 메트릭 ( web-vitals ) 을 측정합니다 .
// 앱의 성능을 측정 시작하려면 결과를 로깅하는 함수(예 : reportWebVitals(console.log))를 전달하거나
// 분석 엔드 포인트로 보냅니다. 자세히 알아보기 : https://bit.ly/CRA-vitals
// 참고: Web Vitals 소개 https://developers-kr.googleblog.com/2020/05/Introducing-Web-Vitals.html

// [동적 import() 사용해보기] reportWebVitals 또는 serviceWorker (PWA)
// 조건 분기 (개발 모드 또는 배포 모드)
if (process.env.production) {
  const usingVitals = true
  const usingPWA = true
  // 배포 모드
  // Promise 객체 반환
  // .then(data => {})
  // .catch(error => {})
  usingVitals &&
    import('web-vitals')
      .then((reportWebVitals) => reportWebVitals(console.log))
      .catceh(({ message }) => console.error(message))

  usingPWA &&
    import('serviceWorker')
      .then((serviceWorker) => serviceWorker.register())
      .catceh(({ message }) => console.error(message))
}
