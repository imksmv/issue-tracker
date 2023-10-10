"use client"

import { Button, TextArea, TextField } from "@radix-ui/themes"

const NewIssuePage = () => {
  return (
    <div className="container max-w-lg m-0 space-y-3">
      <TextField.Root>
        <TextField.Input placeholder="Title" />
      </TextField.Root>
      <TextArea placeholder="Description" />
      <Button>Submit New Issue</Button>
    </div>
  )
}

export default NewIssuePage
