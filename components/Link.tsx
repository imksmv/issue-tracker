import NextLink from "next/link"

interface Props {
  href: string
  children: string
}

const Link = ({ href, children }: Props) => {
  return (
    <NextLink
      className="text-primary underline-offset-4 hover:underline"
      href={href}
    >
      {children}
    </NextLink>
  )
}

export default Link
