import { compareDesc, parseISO } from "date-fns"

export const cx = (...classNames: any) => classNames.filter(Boolean).join(" ")

export const sortBlogs = (blogs:any) => {
    return blogs.slice().filter((item:any) => item.isPublished === true).sort((a:any,b:any)=>compareDesc(parseISO(a.publishedAt),parseISO(b.publishedAt)))
}