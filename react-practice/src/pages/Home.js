// pages/Home.js 함수 컴포넌트 작성
import A11yHidden from 'components/A11yHidden'
import AccordionContainer from 'containers/accordion'
import Heading from 'components/Heading'

export default function Home() {
  return (
    <>
      {/* <h1>헤드라인</h1> */}
      <Heading
        as="h1"
        id="documentHeadline"
        content="헤드라인"
        title="Heading Component"
      />
      <Heading content="헤드라인 h2" title="Heading Component" />
      <A11yHidden as="p" aria-describedby="documentHeadline">
        화면에 표시되지 않지만, 스크린리더에서는 읽히는 콘텐츠
      </A11yHidden>
      <p>서브 콘텐츠</p>

      <AccordionContainer
        list={[
          {
            id: 'kjkwrs1',
            handleText: 'accordion 1',
            panelContent: 'this is panel text content 1',
          },
          {
            id: 'kcsere2',
            handleText: 'accordion 2',
            panelContent: 'this is panel text content 2',
          },
        ]}
      />
    </>
  )
}
