"use client"

import notFoundDark from "@/public/not-found-dark.svg"
import notFoundLight from "@/public/not-found-light.svg"
import { useTheme } from "next-themes"
import Image from "next/image"

const NotFound = () => {
  const { theme } = useTheme()
  const notFoundSvgColor = theme === "dark" ? notFoundLight : notFoundDark

  return (
    <div className="grid place-content-center h-[calc(100vh-73px)]">
      <Image
        className="lg:h-[600px] lg:w-[600px]"
        src={notFoundSvgColor}
        alt="not-found"
        priority
      />
    </div>
  )
}

export default NotFound
