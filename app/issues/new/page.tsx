"use client"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import "easymde/dist/easymde.min.css"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import SimpleMDE from "react-simplemde-editor"
import z from "zod"

const formSchema = z.object({
  title: z.string().min(3),
  description: z.string().min(5),
})

type formType = z.infer<typeof formSchema>

const NewIssuePage = () => {
  const form = useForm<formType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  })

  const router = useRouter()

  return (
    <Form {...form}>
      <form
        className="max-w-xl space-y-3"
        onSubmit={form.handleSubmit(async (data) => {
          await axios.post("/api/issues", data)
          router.push("/issues")
        })}
      >
        <FormField
          name="title"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="description"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <SimpleMDE placeholder="Description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Create Issue</Button>
      </form>
    </Form>
  )
}

export default NewIssuePage
