// pages/Home.js 함수 컴포넌트 작성
import Heading from 'components/Heading'

export default function Home() {
  return (
    <>
      {/* <h1>헤드라인</h1> */}
      <Heading as="h1" content="헤드라인" title="Heading Component" />
      <Heading content="헤드라인 h2" title="Heading Component" />
      <Heading as="h9" title="Heading Component">
        헤드라인 h9
      </Heading>
      <p>서브 콘텐츠</p>
    </>
  )
}
