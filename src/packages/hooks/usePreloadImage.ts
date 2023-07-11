import { useEffect } from 'react'

const preloadImageMap = new Map()

export const usePreloadImages = (imageSources: string[]) => {
  useEffect(() => {
    for (const src of imageSources) {
      if (!preloadImageMap.has(src)) {
        preloadImageMap.set(src, true)
        const img = new Image()
        img.src = src
      }
    }
  }, [imageSources])
}
