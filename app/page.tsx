import Pagination from "@/components/Pagination"

export default function Home({
  searchParams,
}: {
  searchParams: { page: string }
}) {
  return (
    <section className="container">
      <Pagination
        itemCount={100}
        pageSize={10}
        currentPage={parseInt(searchParams.page)}
      />
    </section>
  )
}
