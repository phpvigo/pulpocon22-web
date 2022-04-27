import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(nuxtApp => {
  tarteaucitron.init({
    privacyUrl: '',

    hashtag: '#tarteaucitron',
    cookieName: 'tarteaucitron',

    orientation: 'bottom',
    showAlertSmall: true,
    cookieslist: true,

    adblocker: false,
    AcceptAllCta: true,
    highPrivacy: false,
    handleBrowserDNTRequest: false,

    removeCredit: true,
    moreInfoLink: true,
    useExternalCss: false,

    readmoreLink: '/cookies-policy'
  })

  tarteaucitron.user.analyticsUa = 'UA-71877009-2'
  tarteaucitron.user.analyticsMore = function () {
    /* add here your optional ga.push() */
  }
  ;(tarteaucitron.job = tarteaucitron.job || []).push('analytics')

})
