[← 홈](../README.md)

# Visual Studio Code

학습 과정에 사용되는 코드 에디터는 [Visual Studio Code](https://code.visualstudio.com/) 입니다. 
에디터 설치 후 `code` 명령을 터미널에서 사용할 수 있는지 확인합니다.

```sh
$ code -h
```

<details>
  <summary>code 명령 CLI 도움말</summary>
  <br/>
  
  ```sh
  Visual Studio Code 1.50.1

  # 사용법: code [옵션] [경로...]
  Usage: code [options][paths...]

  To read from stdin, append '-' (e.g. 'ps aux | grep code | code -')

  # 옵션
  Options
    -d --diff <file> <file>           두 파일을 서로 비교합니다.
    -a --add <folder>                 마지막 활성 창에 폴더를 추가합니다.
    -g --goto <file:line[:character]> 지정된 줄과 문자 위치의 경로에서 파일을 엽니다.
    -n --new-window                   새 창을 강제로 엽니다.
    -r --reuse-window                 이미 열린 창에서 파일 또는 폴더를 강제로 엽니다.
    --folder-uri <uri>                주어진 폴더 URI가 있는 창을 엽니다.
    --file-uri <uri>                  주어진 파일 URI로 창을 엽니다.
    -w --wait                         반환하기 전에 파일이 닫힐 때까지 기다리세요.
    --locale <locale>                 사용할 로케일 (예: en-US 또는 ko-KR).
    --user-data-dir <dir>             사용자 데이터가 보관되는 디렉터리를 지정합니다. Code의 여러 인스턴스를 여는 데 사용할 수 있습니다.
    -h --help                         도움말을 출력합니다.

  # 확장 관리
  Extensions Management
    --extensions-dir <dir>                                      확장의 루트 경로를 설정합니다.
    --list-extensions                                           설치된 확장을 나열합니다.
    --show-versions                                             --list-extension 명령을 사용할 때, 설치된 확장 프로그램의 버전을 표시합니다.
    --category                                                  --list-extension 명령을 사용할 때, 제공된 범주 별로 설치된 확장을 필터링합니다.
    --install-extension <extension-id[@version] | path-to-vsix> 확장을 설치하거나 업데이트합니다. 프롬프트를 피하려면 `--force` 인자를 사용하세요. 
                                                                확장의 식별자는 항상`${publisher}.${name}`입니다. 특정 버전을 설치하려면 `@${version}`. 
                                                                예를 들면: 'vscode.csharp@1.2.3'.
    --uninstall-extension <extension-id>                        확장을 제거합니다.
    --enable-proposed-api <extension-id>                        확장을 위해 제안된 API 기능을 활성화합니다. 개별적으로 활성화 할 하나 이상의 확장 ID를 받을 수 있습니다.

  # 문제 해결
  Troubleshooting
    -v --version                       버전 정보를 출력합니다.
    --verbose                          자세한 정보를 출력합니다. (`--wait` 의미).
    --log <level>                      사용할 로그 레벨입니다. 기본값은 'info'입니다. 허용되는 값은 'critical', 'error', 'warn', 'info', 'debug', 'trace', 'off' 입니다.
    -s --status                        프로세스 사용 및 진단 정보를 출력합니다.
    --prof-startup                     시작하는 동안 CPU 프로파일러 실행
    --disable-extensions               설치된 모든 확장을 비활성화 합니다.
    --disable-extension <extension-id> 확장을 비활성화 합니다.
    --sync <on> <off>                  동기화 기능을 켜기 또는 끄기 합니다.
    --inspect-extensions <port>        확장의 디버깅 및 프로파일링을 허용합니다. 연결 URI에 대한 개발자 도구를 확인하세요.
    --inspect-brk-extensions <port>    시작 후 일시 정지되는 확장 호스트를 사용하여 확장의 디버깅 및 프로파일링을 허용합니다. 연결 URI에 대한 개발자 도구를 확인하세요.
    --disable-gpu                      GPU 하드웨어 가속을 비활성화 합니다.
    --max-memory                       창의 최대 메모리 크기(MB)입니다.
    --telemetry                        VS Code가 수집하는 모든 원격 분석 이벤트를 표시합니다.
  ```
</details>

<br/>

## ␥ Windows 환경에서의 code 명령

**Windows에서는 기본적으로 `code` 명령이 설치되므로 별도로 설정할 필요가 없습니다.**

### ⚠️ code 명령을 못 찾을 경우, 해결책

VS Code에서 `code` 명령을 찾지 못해 사용할 수 없을 경우, VS Code `bin` 폴더를 경로에 수동으로 추가해야 합니다.

<details>
  <summary>해결 방법 자세히 보기</summary>

  #### 1. 환경 변수(Environment Variables) 창을 띄웁니다.

  - 내 컴퓨터(My Computer) `↓`
  - 속성(Properties) `↓`
  - 시스템(System) `↓`
  - 시스템 고급 설정(Advance system settings) `↓`
  - 고급 탭(Advanced tab) `↓`
  - 환경 변수(environment variables) `↓`
  - 경로 설정(Path)

  ![](https://i.stack.imgur.com/A67jJ.png)

  #### 2. 환경변수 `Path`에 VS Code bin 폴더 경로를 추가합니다.

  위 이미지를 참고하여 환경 변수 `Path`를 클릭한 후, 다음의 경로를 추가합니다.

  ```sh
  "C:\Users\사용자_계정\AppData\Local\Programs\Microsoft VS Code\bin"
  ```

  #### 3. `code` 명령 사용 여부 확인

  `Path`에 경로를 추가한 후, 터미널을 다시 시작하면 터미널에서 `code` 명령을 사용할 수 있습니다.

  ```sh
  $ code -v # 버전 정보 출력
  ```
</details>

<br/>

## ␥ VS Code 확장

개발(React 프로그래밍 포함)에 유용한 기능을 제공하는 VS Code 확장을 설치합니다.

### 확장 이름 및 버전 정보 출력

```sh
# VS Code Extensions: Print
$ npm run vsce:p
```

### 확장 설치

```sh
# VS Code Extensions: Install
$ npm run vsce:i
```

<br/>

> **NOTE.** 🐧 <br/>
> 확장 정보 출력 및 설치 명령은 [package.json](../package.json)에 등록된 NPM 스크립트 입니다.<br/>
> `xargs` 명령 사용을 위해서는 [WSL Bash 명령어 환경 구성](./wsl-bash-command-env.md)이 필요합니다.
>
> ```json
> {
>   "scripts": {
>     "vsce:i": "cat .vscode-extensions | xargs -L1 code --install-extension",
>     "vsce:p": "code --list-extensions --show-versions"
>   }
> }
> ```


<br/>

## ␥ 환경 구성

`.editorconfig`, `.gitignore`, `.env` 등 시스템 파일 관리에 유용한 확장입니다.

확장 | 설명
--- | ---
[EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) | `.editorconfig` 파일 생성
[gitignore](https://marketplace.visualstudio.com/items?itemName=codezombiech.gitignore) | `.gitignore` 파일 생성
[DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv) | `.env` 코드 하이라이팅

<br/>

## 문법 검사 / 코드 하이라이팅

HTML, CSS, Sass, JavaScript(ES6), JSX, Styled Components 문법 검사, 포맷터, 하이라이팅, 포멧 변경, 정렬 등에 유용한 확장입니다.

확장 | 설명
--- | ---
[HTMLHint](https://marketplace.visualstudio.com/items?itemName=mkaufman.HTMLHint) | HTML 파일 문법 검사 (`npm i -g htmlhint` 설치 필요)
[stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) | 스타일 파일 오류 검사 및 자동 수정
[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) | 스크립트 파일 오류 검사 및 자동 수정
[Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) | Prettier 코드 포맷터
[Sass](https://marketplace.visualstudio.com/items?itemName=Syler.sass-indented) | Sass 코드 하이라이팅
[es6-string-html](https://marketplace.visualstudio.com/items?itemName=Tobermory.es6-string-html) | ES6 템플릿 리터럴 구문의 HTML 코드 하이라이팅
[vscode-styled-components](https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components) | Styled Components 코드 하이라이팅
[HTML to JSX](https://marketplace.visualstudio.com/items?itemName=riazxrazor.html-to-jsx) | HTML → JSX 코드 변경
[CSS to JS](https://marketplace.visualstudio.com/items?itemName=infarkt.css-to-jss) | CSS 스타일 선언 ↔ JS 스타일 객체 변경
[PostCSS Sorting](https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-postcss-sorting) | CSS 속성 순서 자동 정렬 (사용자 정의)