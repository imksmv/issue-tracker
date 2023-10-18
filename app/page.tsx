import Pagination from "@/components/Pagination"

export default function Home() {
  return (
    <section className="container">
      <Pagination itemCount={100} pageSize={10} currentPage={10} />
    </section>
  )
}
