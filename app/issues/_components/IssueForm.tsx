"use client"

import { createIssueSchema } from "@/app/validationSchemas"
import Spinner from "@/components/Spinner"
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
import { Issue } from "@prisma/client"
import axios from "axios"
import "easymde/dist/easymde.min.css"
import dynamic from "next/dynamic"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
import z from "zod"

const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
})

type IssueFormData = z.infer<typeof createIssueSchema>

const IssueForm = ({ issue }: { issue?: Issue }) => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<IssueFormData>({
    resolver: zodResolver(createIssueSchema),
  })

  const router = useRouter()
  const { toast } = useToast()

  const onSubmit = form.handleSubmit(async (data) => {
    try {
      setIsSubmitting(true)
      await axios.post("/api/issues", data)
      router.push("/issues")
    } catch (error) {
      setIsSubmitting(false)
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      })
    }
  })

  return (
    <section className="container">
      <Form {...form}>
        <form className="max-w-xl space-y-3" onSubmit={onSubmit}>
          <FormField
            name="title"
            control={form.control}
            defaultValue={issue?.title || ""}
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
            defaultValue={issue?.description || ""}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <SimpleMDE placeholder="Description" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button variant="outline" disabled={isSubmitting} type="submit">
            {isSubmitting ? <Spinner label="Processing..." /> : "Create Issue"}
          </Button>
        </form>
      </Form>
    </section>
  )
}

export default IssueForm
