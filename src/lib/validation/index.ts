import * as z from "zod"

export const signupValidation = z.object({

    name: z.string().min(2, {message: "too short!"}),
    username: z.string().min(2, {message: "too short!"}),
    email: z.string().email(),
    password: z.string().min(8, {message: "password most be at least 8 characters."} )

 })
export const signinValidation = z.object({
    email: z.string().email(),
    password: z.string().min(8, {message: "password most be at least 8 characters."} )

 })