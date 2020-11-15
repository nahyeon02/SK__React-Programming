const { setTimeout, clearTimeout } = window

let wallpapers = [
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

wallpapers = wallpapers.map((path) => `https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/${path}`)

const DISPLAY_WALLPAPER_COUNT = 6

const CLASSES = {
  appHeader: 'appHeader',
  appNavigationButton: {
    normal: 'appNavigation__button',
    active: 'appNavigation__button--active',
    goToSection: 'button--goToSection',
    next: 'button--next',
    first: 'button--first',
  },
  featureSection: 'featureSection',
  dialog: {
    self: 'dialog',
    button: 'button__privacyPolicy',
    closeButton: 'dialog__button',
    dim: 'dialog__dim',
    selfShow: 'dialog--show',
    dimShow: 'dialog__dim--show',
  },
}

const SHOW_TIMEOUT = 500
const SCROLL_TIMEOUT = 1000

shuffle(wallpapers)
  .filter((wallpaper, index) => index < DISPLAY_WALLPAPER_COUNT)
  .forEach((imagePath, index) => {
    const selector = `.${CLASSES.featureSection}:nth-of-type(${index + 1})::before`

    insertStyleRules(selector, {
      'background-image': `url(${imagePath}.jpg)`,
    })

    setTimeout(() => insertStyleRules(selector, { opacity: 1 }), SHOW_TIMEOUT)
  })

const featureSections = document.querySelectorAll(`.${CLASSES.featureSection}`)

const handleGoToSectionWrapper = (index) => {
  return function () {
    let targetIndex = 0

    const {
      normal: buttonClassNormal,
      first: buttonClassFirst,
    } = CLASSES.appNavigationButton

    if (this.className.includes(buttonClassNormal)) {
      targetIndex = index
      goToSection(targetIndex, true)
    } else {
      const isGoToFirst = this.classList.contains(buttonClassFirst)
      targetIndex = !isGoToFirst ? index + 1 : 0
      !isGoToFirst ? goToSection(targetIndex) : goToSection(targetIndex, true)
    }
  }
}

const goToSection = (index, usingAppNavigation) => {
  const targetSection = featureSections[index]

  targetSection.scrollIntoView({ behavior: 'smooth' })

  activeAppNavButton(index)

  if (usingAppNavigation) {
    goToSection.timeoutId && clearTimeout(goToSection.timeoutId)

    goToSection.timeoutId = setTimeout(() => {
      targetSection.focus()
    }, SCROLL_TIMEOUT)
  }
}

goToSection.timeoutId = null

featureSections.forEach((section) => section.setAttribute('tabindex', -1))

makeArray(featureSections).forEach((section, index) => {
  const { goToSection } = CLASSES.appNavigationButton
  const buttonGoToSection = section.querySelector(`.${goToSection}`)
  buttonGoToSection.addEventListener('click', handleGoToSectionWrapper(index))
})

const {
  normal: appNavButton,
  active: appNavButtonActive,
} = CLASSES.appNavigationButton

const appNavButtons = document.querySelectorAll(`.${appNavButton}`)

const activeAppNavButton = (index) => {
  const activeClassName = appNavButtonActive
  const activeNavButton = appNavButtons[index]
  const preActiveButton = makeArray(appNavButtons).find(
    (button) => button.classList.contains(activeClassName)
  )

  if (!activeNavButton.isEqualNode(preActiveButton)) {
    preActiveButton.classList.remove(activeClassName)
  }

  activeNavButton.classList.add(activeClassName)
}

makeArray(appNavButtons).forEach((button, index) =>
  button.addEventListener('click', handleGoToSectionWrapper(index))
)

let prevScrollYposition = 0
let activeIndex = 0
let clearTimeoutId = null

const isInActiveSectionArea = (section) => {
  const rect = section.getBoundingClientRect()
  const top = rect.top
  const halfHeight = rect.height / 2
  return top > -halfHeight && top <= halfHeight
}

const findIndexOfActiveSectionArea = () => {
  const findedIndex = makeArray(featureSections).findIndex((section) =>
    isInActiveSectionArea(section)
  )
  return findedIndex
}

const showAppHeader = () => (appHeader.style.transform = 'translate(-50%, 0)')
const hideAppHeader = () => (appHeader.style.transform = 'translate(-50%, -100%)')

const appHeader = document.querySelector(`.${CLASSES.appHeader}`)

window.addEventListener('scroll', () => {
  const { scrollY: currentScrollYposition } = window

  if (
    prevScrollYposition > currentScrollYposition ||
    prevScrollYposition === 0
  ) {
    showAppHeader()
  }

  if (prevScrollYposition <= currentScrollYposition) {
    hideAppHeader()
  }

  activeIndex = findIndexOfActiveSectionArea()

  activeAppNavButton(activeIndex)

  clearTimeoutId && clearTimeout(clearTimeoutId)
  clearTimeoutId = setTimeout(() => goToSection(activeIndex), 1000)

  prevScrollYposition = currentScrollYposition
})

const {
  self: dialogClass,
  button: dialogButtonClass,
  closeButton: dialogCloseButtonClass,
  dim: dialogDimClass,
  selfShow: dialogShowClass,
  dimShow: dialogdimShowClass,
} = CLASSES.dialog

const buttonPrivacyPolicy = document.querySelector(`.${dialogButtonClass}`)
const dialog = document.querySelector(`.${dialogClass}`)
const buttonDialog = dialog.querySelector(`.${dialogCloseButtonClass}`)
const dialogDim = document.querySelector(`.${dialogDimClass}`)

const handleShowDialog = () => {
  dialog.classList.add(dialogShowClass)
  dialogDim.classList.add(dialogdimShowClass)
  dialog.focus()
}

const handleHideDialog = () => {
  dialog.classList.remove(dialogShowClass)
  dialogDim.classList.remove(dialogdimShowClass)
  buttonPrivacyPolicy.focus()
}

dialog.setAttribute('tabindex', -1)

buttonPrivacyPolicy.addEventListener('click', handleShowDialog)
buttonDialog.addEventListener('click', handleHideDialog)

window.addEventListener('keyup', (e) => {
  const key = Number(e.key)
  if (e.ctrlKey && typeof key === 'number') {
    const keyIndex = key - 1
    if (keyIndex < featureSections.length) {
      goToSection(keyIndex)
    }
  }
})
