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
import { useToast } from "@/components/ui/use-toast"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import "easymde/dist/easymde.min.css"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import SimpleMDE from "react-simplemde-editor"
import z from "zod"

// const formSchema = z.object({
//   title: z.string().min(3),
//   description: z.string().min(5),
// })

// type formType = z.infer<typeof formSchema>

const NewIssuePage = () => {
  // const form = useForm<formType>({
  //   resolver: zodResolver(formSchema),
  //   defaultValues: {
  //     title: "",
  //     description: "",
  //   },
  // })

  const form = useForm()

  const router = useRouter()

  const { toast } = useToast()

  return (
    <section className="container">
      <Form {...form}>
        <form
          className="max-w-xl space-y-3"
          onSubmit={form.handleSubmit(async (data) => {
            try {
              await axios.post("/api/issues", data)
              router.push("/issues")
            } catch (error) {
              toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "There was a problem with your request.",
              })
            }
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
                {/* <FormMessage /> */}
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
                {/* <FormMessage /> */}
              </FormItem>
            )}
          />
          <Button type="submit">Create Issue</Button>
        </form>
      </Form>
    </section>
  )
}

export default NewIssuePage
