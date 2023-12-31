"use client"

import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import { TypographyP } from "./TypographyP"
import { Button } from "./ui/button"

interface Props {
  itemCount: number
  pageSize: number
  currentPage: number
}

const Pagination = ({ itemCount, pageSize, currentPage }: Props) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const changePage = (page: number) => {
    const params = new URLSearchParams(searchParams)
    params.set("page", page.toString())
    router.push("?" + params)
  }

  const pageCount = Math.ceil(itemCount / pageSize)
  if (pageCount <= 1) return null

  return (
    <div className="flex items-center justify-center">
      <TypographyP>
        Page {currentPage} of {pageCount}
      </TypographyP>

      <div className="flex ml-1">
        <Button
          className="h-8 w-8"
          variant="ghost"
          size="icon"
          disabled={currentPage === 1}
          onClick={() => changePage(1)}
        >
          <ChevronsLeft />
        </Button>
        <Button
          className="h-8 w-8"
          variant="ghost"
          size="icon"
          disabled={currentPage === 1}
          onClick={() => changePage(currentPage - 1)}
        >
          <ChevronLeft size={20} />
        </Button>

        <Button
          className="h-8 w-8"
          variant="ghost"
          size="icon"
          disabled={currentPage === pageCount}
          onClick={() => changePage(currentPage + 1)}
        >
          <ChevronRight size={20} />
        </Button>
        <Button
          className="h-8 w-8"
          variant="ghost"
          size="icon"
          disabled={currentPage === pageCount}
          onClick={() => changePage(pageCount)}
        >
          <ChevronsRight />
        </Button>
      </div>
    </div>
  )
}

export default Pagination
