import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react"
import { TypographyP } from "./TypographyP"
import { Button } from "./ui/button"

interface Props {
  itemCount: number
  pageSize: number
  currentPage: number
}

const Pagination = ({ itemCount, pageSize, currentPage }: Props) => {
  const pageCount = Math.ceil(itemCount / pageSize)
  if (pageCount <= 1) return null
  return (
    <div className="flex items-center gap-2">
      <TypographyP>
        Page {currentPage} of {pageCount}
      </TypographyP>

      <Button variant="ghost" size="icon" disabled={currentPage === 1}>
        <ChevronsLeft />
      </Button>
      <Button variant="ghost" size="icon" disabled={currentPage === 1}>
        <ChevronLeft size={20} />
      </Button>

      <Button variant="ghost" size="icon" disabled={currentPage === pageCount}>
        <ChevronRight size={20} />
      </Button>
      <Button variant="ghost" size="icon" disabled={currentPage === pageCount}>
        <ChevronsRight />
      </Button>
    </div>
  )
}

export default Pagination
