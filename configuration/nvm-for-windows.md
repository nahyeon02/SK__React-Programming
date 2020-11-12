[← 홈](../README.md)

# NVM4W (NVM for Windows)

학습 과정에 사용되는 런타임 환경은 [Node.js](https://nodejs.org/ko/)입니다. 
Windows 환경에서 Node.js 버전을 효율적으로 관리하기 위해 [nvm-setup.zip](https://github.com/coreybutler/nvm-windows/releases) 파일을 다운로드 받아 설치합니다.
NVM4W는 [nvm](https://github.com/creationix/nvm)과 유사하지만, Windows 전용 도구이며 별도의 설치 프로그램을 제공합니다. (관리자 권한 필요)

![](https://bit.ly/35hqLss)

<!-- <br/> -->

## 이미 Node.js가 설치되어 있다면?

**nvm-windows를 설치하기 전에 기존에 설치된 Node.js 버전을 제거해야 합니다. (그렇지 않을 경우 버전 충돌 발생)**
그리고 제거 후에도 남아있을 수 있는 기존 Node.js 설치 디렉토리(예: `C:\Program Files\nodejs`)를 삭제합니다. 
NVM에서 생성된 심볼릭 링크(symlink)는 기존 설치 디렉토리를 덮어 쓰지 않습니다. (디렉토리가 비어있어도 마찬가지)

기존 npm 설치 위치(예: `C:\Users\<user>\AppData\Roaming\npm`)를 삭제하여 전역 모듈 충돌을 방지합니다.
전역 npmrc 구성(예: `C:\Users\&lt;user&gt;\AppData\Roaming\npm\etc\npmrc`)을 백업하거나, 설정을 사용자 구성(`C:\Users\&lt;user&gt;\.npmrc`)에 복사해야 합니다.

## LTS 버전 설치

```sh
$ nvm install latest # LTS 버전 설치
```

## 설치 가능한 버전 확인

```sh
$ nvm list [available]
```

## 버전 사용 설정

```sh
$ nvm use <version>
```

## 버전 제거

```sh
$ nvm uninstall <version>
```

<br/>

> 자세한 사용 방법은 [Usage ← nvm-windows](https://github.com/coreybutler/nvm-windows#usage)를 참고하세요.

<br/>

## nvm-windows 업데이트

nvm-windows를 업그레이드 하려면 다시 설치 프로그램을 다운로드 받아 실행합니다. 다시 설치해도 이미 설치 된 Node.js를 건드리지 않고 업데이트 해야하는 파일을 안전하게 덮어 씁니다. 
다만 동일한 위치에 재설치 하지 않을 경우 symlink 폴더를 사용하는 지 확인해야 합니다. 원래 기본 위치에 설치한 경우는 완료 될 때까지 "다음" 버튼을 클릭해 설치하면 됩니다.