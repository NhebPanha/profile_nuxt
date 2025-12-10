// plugins/lenis.client.ts
import Lenis from 'lenis'

export default defineNuxtPlugin(() => {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    smoothTouch: true,
  })

function raf(time: number) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

  return {
    provide: {
      lenis,
    },
  }
})
