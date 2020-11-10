[← 홈](../README.md)

# NVM for Windows

학습 과정에 사용되는 런타임 환경은 [Node.js](https://nodejs.org/ko/)입니다. 
버전 관리를 효과적으로 하기 위해 [nvm-setup.zip](https://github.com/coreybutler/nvm-windows/releases) 파일을 다운로드 받아 설치합니다.

![](https://이듬.run/preparing-for-class/nvm-02.jpg)

<!-- <br/> -->

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