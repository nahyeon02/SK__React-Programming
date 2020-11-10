[← 홈](../README.md)

# WSL Bash 명령어 환경 구성

학습 과정 중에 사용되는 명령어는 **Bash** 쉘 스크립트입니다. 
Windows 환경에서 Bash 명령어를 사용하기 위한 환경을 구성합니다.

<br/>
<img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Gnu-bash-logo.svg" alt style="height: 70px">
<br/>
<br/>

## 환경 구성 조건

Windows 10의 [<abbr title="Windows Subsystem for Linux">WSL</abbr>](https://ko.wikipedia.org/wiki/%EB%A6%AC%EB%88%85%EC%8A%A4%EC%9A%A9_%EC%9C%88%EB%8F%84%EC%9A%B0_%ED%95%98%EC%9C%84_%EC%8B%9C%EC%8A%A4%ED%85%9C)를 사용해 Linux 명령어 사용 환경을 구성하려면 **Windows 10 Pro (64bit)** 운영체제가 필요합니다.

<br/>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Windows_10_Logo.svg/500px-Windows_10_Logo.svg.png" alt style="height: 50px">
<br/>
<br/>

## 환경 구성

### WSL & Ubuntu 설치

<details>
  <summary>설치 과정 자세히 보기</summary>
  <br/>

  > [Forbes](https://forbes.tistory.com/543) 블로그에 작성된 글을 참고해 Windows에 Linux 환경을 구성해봅니다.

  <br/>

  제어판 > 프로그램 > 프로그램 및 기능 > **Windows 기능 켜기/끄기**로 이동 후 목록에서 **'Linux용 Windows 하위 시스템'** 기능을 체크하여 활성화 하고 [확인] 버튼을 클릭합니다.

  ![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile30.uf.tistory.com%2Fimage%2F99B0D2405E4AB2CA31722E)

  Windows 기능 추가 후 [다시시작(N)] 버튼을 눌러 시스템을 재부팅 합니다.

  ![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile9.uf.tistory.com%2Fimage%2F99AF8F405E4AB2CD3188A0)

  재부팅 후, **시작 메뉴**에서 **Microsoft Store**를 열고 검색창에 **'Ubuntu'** 검색, **[Windows에서 Linux 실해하기]** 앱을 다운로드 합니다.

  ![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile25.uf.tistory.com%2Fimage%2F998508405E4AB2CF2A5B70)

  Linux 배포 버전을 클릭한 다음 [무료] 버튼을 눌러 설치합니다. 설치 완료 후 [실행] 버튼을 눌러 Ubuntu를 시작합니다.

  ![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile7.uf.tistory.com%2Fimage%2F99D13A405E4AB2D3398B0B)
</details>

<br/>

## VS Code 기본 쉘 스크립트 설정

VS Code를 구동한 후 명령어 팔레트(`Ctrl + Shift + P`)를 띄우고 `Select Default Shell`을 검색합니다.
출력된 옵션 목록 중 **WSL Bash**를 선택합니다. VS Code 터미널(<code>Ctrl + `</code>)을 구동하면 기본 쉘이 WSL Bash로 설정되어 Bash 명령을 사용할 수 있습니다.

![](https://i.stack.imgur.com/ECCAy.png)