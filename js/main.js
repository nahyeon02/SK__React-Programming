/* -------------------------------------------------------------------------- */
// 실습 1. 월페이퍼 리스트 만들기

var wallpapers = [
  'v1598872050/ixylk0psxr8zjasxqce6',
  'v1598871763/p8gblpumiwypzg1yzrnx',
  'v1599214078/yz7ovukznj2qqlau1vmp',
  'v1598871708/tgqu1cbnjmkoah2mnmkb',
  'v1598871678/tdedx3m1riyandczb8j5',
  'v1598871674/x8t4ye47c7gzanwdwgrv',
  'v1598871759/hz6kswq4f5wzioux3tyf',
  'v1598871647/cdljrxuxce5usqkz10zg',
  'v1598871911/oiea6ibwgtjvribxsrfr',
  'v1598871981/ikuzi8gjmcre1yimccr0',
  'v1598871916/xuoywo76biw3zxpiimcm',
  'v1598871741/hvdbxowg6yqjhvtkdtl3',
  'v1598871732/f2k4xrsjwytwuaqhuhls',
  'v1600078664/vjc3uabufnijpbpyn9ib',
  'v1601293397/ginhyqun9ku7so3begbs',
  'v1603872867/aaaadxhssdqrpvnebmjp',
  'v1598871780/kre1o4asdmo4jpa5tnfj',
  'v1598871803/jtwr2mypjgdsccxgbn2r',
  'v1598871820/z2xowvbdbohb1wqh27g4',
  'v1598871763/p8gblpumiwypzg1yzrnx',
  'v1598871736/oyv81viqlrh05si2racx',
  'v1598871704/tgbircgpt6nj70vj7row',
  'v1598871884/x2sravrbbjtxhriqj7lm',
  'v1598872028/j0wdpxdlce3r5tvuyuhf',
  'v1598871746/dzfdd9i1gpts69cgnwnz',
  'v1598871687/p7pyhekzmgb3sscwj8y7',
  'v1598872039/pnhda368bammgzxqd79x',
  'v1598871816/rcvsdpkdfy3ag0ve6zew',
  'v1601293376/s9eqagr1ibpy78cnhzf8',
  'v1598871838/qtuxer7m0mma1k9dykgf',
  'v1598871944/vhwqvkxuws65y1ktflxy',
  'v1604920644/ikfaibutr1ija8tttcle',
  'v1603708966/cmiozflbxxrh1jiekdrv',
  'v1598871718/evzrvkday70p28whsyeg',
  'v1598871722/h7wz9zlsrnx6uk4ccr6d',
  'v1598871713/y2imdocqg0qlo2xlo8c7',
  'v1598871656/r4bpqotyaz98ckgvgepx',
  'v1598871692/cxhwmadpo4o9yeiribge',
  'v1598872002/lbh8tismjjhto8fhmixx',
  'v1598871772/buymmshxvklvpxdnw968',
  'v1598872045/yejizhji2kl6v6vq7im5',
]

wallpapers = wallpapers.map(function (path) {
  return 'https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/' + path;
});

/* -------------------------------------------------------------------------- */
// 실습 0. 프로젝트에 사용된 상수 설정

// 화면에 표시 할 월페이지 개수
var DISPLAY_WALLPAPER_COUNT = 6;

// 클래스 이름
var CLASSES = {
  featureSection: 'featureSection',
  appNavigationButton: {
    normal: 'appNavigation__button',
    active: 'appNavigation__button--active',
  },
};

// 타임아웃
var SHOW_TIMEOUT = 500;
var SCROLL_TIMEOUT = 1000;

/* -------------------------------------------------------------------------- */
// 실습 2. 월페이퍼 랜덤 셔플 → 필터링 → 로딩 → 표시

shuffle(wallpapers)
  // [1] 월페이퍼 뒤섞어 화면에 표시 할 개수만큼 골라내기
  .filter(function (wallpaper, index) {
    return index < DISPLAY_WALLPAPER_COUNT;
  })
  // [2] 필터링 된 배열을 순환
  .forEach(function (imagePath, index) {
    // [3] 월페이퍼를 그릴 섹션의 가상 클래스 선택자 설정
    var selector = '.' + CLASSES.featureSection + ':nth-of-type(' + ++index + ')::before';

    // [4] 설정된 가상 클래스 선택자에 배경 이미지 스타일 규칙 삽입
    insertStyleRules(selector, {
      'background-image': 'url(' + imagePath + '.jpg)',
    });

    // [5] 화면에 표시 할 타임아웃 설정에 따라
    window.setTimeout(function () {
      // 불투명도 1 설정 추가 삽입
      insertStyleRules(selector, { 'opacity': 1 });
    }, SHOW_TIMEOUT);
  });

/* -------------------------------------------------------------------------- */
// 실습 3. 섹션 수집 및 이벤트 핸들링

// [1] 섹션 요소 수집
var featureSections = document.querySelectorAll('.' + CLASSES.featureSection);

// [3] 이벤트 리스너 작성
// 클로저 함수를 반환하는 래퍼 함수
var handleGoToSectionWrapper = function (index) {
  // 이벤트 리스너로 반환 될 클로저 함수
  return function () {
    // 목표 인덱스 초기 설정
    var targetIndex = 0;

    // appNavigation 버튼인 경우
    if (this.className.includes(CLASSES.appNavigationButton.normal)) {
      // 래퍼 함수를 통해 기억된 index를 목표 인덱스로 설정
      targetIndex = index;
      goToSection(targetIndex, true);
    }
    // goToSection 버튼인 경우
    else {
      // 첫번째 섹션으로 이동하는 버튼인지 확인
      var isGoToFirst = this.classList.contains('button--first');
      // 조건 처리에 따라 목표 인덱스 설정
      targetIndex = !isGoToFirst ? index + 1 : 0;
      // 조건 처리에 따라 섹션 이동 함수 실행 (옵션 설정)
      !isGoToFirst ? goToSection(targetIndex) : goToSection(targetIndex, true);
    }
  };
};

// [4] 섹션 이동 함수 설정
var goToSection = function (index, usingAppNavigation) {
  // 목표 섹션 참조
  var targetSection = featureSections[index];

  // 목표 섹션으로 스크롤 이동
  targetSection.scrollIntoView({ behavior: 'smooth' });

  // 설정한 index에 해당하는 앱 내비게이션 버튼 (인디케이터) 활성화
  activeAppNavButton(index);

  // 앱 내비게이션 버튼(인디케이터)을 클릭한 경우
  if (usingAppNavigation) {
    // 타이머 설정
    // 이미 설정된 타임아웃 ID가 있을 경우
    if (goToSection.timeoutId) {
      // 설정된 타임아웃 클리어(해제)
      window.clearTimeout(goToSection.timeoutId);
    }
    // [접근성] 스크롤 타임아웃이 지나면, 
    // 타임아웃 설정 ID 값을 메모리(기억) → 필요할 때 설정 해제 목적
    goToSection.timeoutId = window.setTimeout(function () {
      // 목표 섹션에 포커스 설정
      targetSection.focus();
    }, SCROLL_TIMEOUT);
  }
};

// 함수는 객체이므로 속성 설정이 가능
// 일종의 네임스페이스 객체로 활용하여 타임아웃 ID를 저장하기 위한 속성으로 활용
goToSection.timeoutId = null;

// [접근성] 키보드 포커싱 설정
// 모든 섹션에 JavaScript를 사용한 키보드 접근이 가능하도록 tabindex 속성 설정
// 일반적인 사용자의 키보드 Tab 포커스로는 접근이 가능하지 않음
featureSections.forEach(function (section) {
  section.setAttribute('tabindex', -1);
});

// 이벤트 연결
// 섹션 NodeList 집합을 배열로 변경한 후, forEach()를 사용해 순환 처리
makeArray(featureSections).forEach(function (section, index) {
  // 개별 섹션에서 다른 섹션으로 이동하는 기능을 설정할 버튼 요소 참조
  var buttonGoToSection = section.querySelector('.button--goToSection');
  // 버튼 요소에 click 이벤트 연결 ← 이벤트 리스너(클로저 함수)를 반환하는 래퍼 함수에 index 전달
  buttonGoToSection.addEventListener('click', handleGoToSectionWrapper(index));
});

/* -------------------------------------------------------------------------- */
// 실습 4. 앱 내비게이션 버튼 수집 및 이벤트 핸들링

// 앱 내비게이션 버튼(인디케이터)을 모두 수집하여 참조
var appNavButtons = document.querySelectorAll('.appNavigation__button');

// 앱 내비게이션 버튼(인디케이터) 활성화 설정 함수
var activeAppNavButton = function (index) {
  // 활성 클래스 이름 추출
  var activeClassName = CLASSES.appNavigationButton.active;
  // 활성 처리 할 내비게이션 버튼 추출 및 참조
  var activeNavButton = appNavButtons[index];

  // 이전에 활성화 된 버튼 요소 참조
  var preActiveButton =
    // 앱 내비게이션 버튼 NodeList를 배열로 변경한 후,
    makeArray(appNavButtons)
      // 활성 클래스 이름을 가진 버튼을 찾아 추출
      .find(function (button) {
        return button.classList.contains(activeClassName);
      });

  // 이전에 활성화 된 버튼 요소와 현재 활성화 된 버튼 요소가 같지 않은 경우
  if (!activeNavButton.isEqualNode(preActiveButton)) {
    // 이전 활성화 버튼 요소의 활성 클래스 이름 제거
    preActiveButton.classList.remove(activeClassName);
  }

  // 활성화 처리해야 할 버튼에 활성 클래스 이름 추가
  activeNavButton.classList.add(activeClassName);
};

// 이벤트 연결
// 앱 내비게이션 버튼(인디케이터) 배열화
makeArray(appNavButtons)
  // 배열 데이터 순환
  .forEach(function (button, index) {
    // 버튼 요소에 click 이벤트 연결 ← 이벤트 리스너(클로저 함수)를 반환하는 래퍼 함수에 index 전달
    button.addEventListener('click', handleGoToSectionWrapper(index));
  });

/* -------------------------------------------------------------------------- */
// 실습 5. 앱 헤더 표시, 감춤 설정

// 스크롤 상태 설정 
// [1] 이전 스크롤 Y축 높이
var prevScrollYposition = 0;
// [2] 활성 인덱스
var activeIndex = 0;
// [3] 타임아웃 ID
var clearTimeoutId = null;

// 스크롤 Y축 높이와 섹션 영역의 높이를 비교하여 활성 상태 유무를 반환하는 함수
var isInActiveSectionArea = function (section) {
  // 섹션의 박스 모델 정보 추출
  var rect = section.getBoundingClientRect();
  // 섹션의 top 위치
  var top = rect.top;
  // 섹션의 절반 높이 (높이 ÷ 2)
  var halfHeight = rect.height / 2;
  // top 값이 음수 절반 높이 보다 크고
  // top 값이 양수 절반 높이 보다 작거나 같으면 true
  return top > -halfHeight && top <= halfHeight;
};

// 활성화 된 섹션의 인덱스를 반환하는 함수
var findIndexOfActiveSectionArea = function () {
  var findedIndex = 
    // 섹션 집합을 배열화
    makeArray(featureSections)
    // 활성화 된 섹션의 인덱스를 찾아 반환
    .findIndex(function (section) {
    return isInActiveSectionArea(section);
  });

  // 찾은 인덱스 반환
  return findedIndex;
};

// 앱 헤더를 화면에 표시하는 함수
var showAppHeader = function () {
  appHeader.style.transform = 'translate(-50%, 0)';
};

// 앱 헤더를 화면에서 감추는 함수
var hideAppHeader = function () {
  appHeader.style.transform = 'translate(-50%, -100%)';
};

// 앱 헤더 요소 찾아 참조
var appHeader = document.querySelector('.appHeader');

// scroll 이벤트 연결
window.addEventListener('scroll', function () {
  // 브라우저 창의 스크롤 Y축 높이 값을 현재 스크롤 위치로 설정
  var currentScrollYposition = window.scrollY;

  // 조건 처리
  if (
    /* 이전 스크롤 Y축 높이 값이 현재 스크롤 Y축 높이 값보다 크거나 */
    prevScrollYposition > currentScrollYposition ||
    /* 이전 스크롤 Y축 높이 값이 0인 경우 */
    prevScrollYposition === 0
  ) {
    // 앱 헤더 표시
    showAppHeader();
  }

  // 이전 스크롤 Y축 높이 값이 현재 스크롤 Y축 높이 값보다 작은 경우
  if (prevScrollYposition <= currentScrollYposition) {
    // 앱 헤더 감춤
    hideAppHeader();
  }

  // 현재 활성화 된 섹션의 인덱스를 찾아 activeIndex로 설정
  activeIndex = findIndexOfActiveSectionArea();
  // 앱 내비게이션 버튼(인디케이터) 활성화 처리 - activeIndex 전달
  activeAppNavButton(activeIndex);

  // 타임 컨트롤
  // 설정된 타임아웃 ID가 있을 경우
  if (clearTimeoutId) {
    // 타임아웃 ID를 전달해 설정된 타임아웃 해제
    window.clearTimeout(clearTimeoutId);
  }

  // 1초 뒤에 섹션으로 이동되도록 goToSection() 함수 실행 - activeIndex 전달
  clearTimeoutId = window.setTimeout(function () {
    goToSection(activeIndex);
  }, 1000);

  // 현재 스크롤 Y 높이 값 → 이전 스크롤 Y 높이 값 업데이트
  prevScrollYposition = currentScrollYposition;
});

/* -------------------------------------------------------------------------- */
// 실습 6. 다이얼로그 표시, 감춤 설정

// '개인정보 처리 방침' 버튼 참조
var buttonPrivacyPolicy = document.querySelector('.button__privacyPolicy');
// 다이얼로그 요소 참조
var dialog = document.querySelector('.dialog');
// 다이얼로그 닫기 버튼 요소 참조
var buttonDialog = dialog.querySelector('.dialog__button');
// 다이얼로그 딤 요소 참조
var dialogDim = document.querySelector('.dialog__dim');

// 다이얼로그 표시 이벤트 리스너
var handleShowDialog = function () {
  // 다이얼로그 표시 클래스 속성 이름 추가
  dialog.classList.add('dialog--show');
  // 다이얼로그 딤 표시 클래스 속성 이름 추가
  dialogDim.classList.add('dialog__dim--show');
  // [접근성] 다이얼로그 포커스 이동
  dialog.focus();
};

// 다이얼로그 감춤 이벤트 리스너
var handleHideDialog = function () {
  // 다이얼로그 감춤 클래스 속성 이름 제거
  dialog.classList.remove('dialog--show');
  // 다이얼로그 딤 감춤 클래스 속성 이름 제거
  dialogDim.classList.remove('dialog__dim--show');
  // [접근성] '개인정보 처리 방침' 버튼에 포커스 이동
  buttonPrivacyPolicy.focus();
};

// [접근성] JavaScript를 사용해 다이얼로그에 포커스 이동이 가능하도록 tabindex 속성 설정
dialog.setAttribute('tabindex', -1);

// '개인정보 처리 방침' 버튼에 click 이벤트 연결 ← 이벤트 리스너
buttonPrivacyPolicy.addEventListener('click', handleShowDialog);

// 다이얼로그 버튼에 click 이벤트 연결 ← 이벤트 리스너
buttonDialog.addEventListener('click', handleHideDialog);

/* -------------------------------------------------------------------------- */
// 실습 7. 내비게이션 단축키 제공

// keyup 이벤트 연결
window.addEventListener('keyup', function(e) { 
  // 키 입력 값을 숫자로 변경
  var key = Number(e.key);

  // ctrl 키 + 숫자 키패드인 경우
  if (e.ctrlKey && typeof key === 'number') {
    var keyIndex = key - 1;
    // 키 입력(숫자) - 1 값이 섹션의 총 개수보다 작은 경우
    if (keyIndex < featureSections.length) {
      // 단축키를 누른 해당 섹션으로 이동
      goToSection(keyIndex);
    }
  }
})