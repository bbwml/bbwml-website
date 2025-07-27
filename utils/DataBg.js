'use client'
import { useEffect } from 'react'

export default function DataBg() {
  useEffect(() => {
    document.querySelectorAll('[data-background]').forEach((element) => {
      element.style.backgroundImage = `url(${element.getAttribute('data-background')})`
    })
  }, [])

  return null
}
