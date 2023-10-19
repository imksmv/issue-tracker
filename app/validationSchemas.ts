import z from "zod"

const statuses = ["OPEN", "IN_PROGRESS", "CLOSED"] as const

export const issueSchema = z.object({
  title: z.string().min(1, "Title is required.").max(255),
  description: z.string().min(1, "Description is required.").max(65535),
})

export const patchIssueSchema = z.object({
  title: z.string().min(1, "Title is required.").max(255).optional(),
  description: z
    .string()
    .min(1, "Description is required.")
    .max(65535)
    .optional(),
  assignedToUserId: z
    .string()
    .min(1, "This field is required.")
    .max(255)
    .optional()
    .nullable(),
  status: z
    .enum(statuses, {
      errorMap: () => ({
        message: "This field only accepts OPEN, IN_PROGRESS or CLOSED",
      }),
    })
    .optional(),
})
