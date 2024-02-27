import Image from "next/image"
import {allBlogs} from "contentlayer/generated"
import HomeCoverSection from "../components/Home/HomeCoverSection";
import FeaturedPost from "../components/Home/FeaturedPost";
import RecentPost from "../components/Home/RecentPost";
import { sortBlogs } from "../utils";

export default function Home() {
  // console.log(allBlogs.length);
  const sortedBlogs = sortBlogs(allBlogs)
  
  return <main className="flex flex-col items-center justify-center">
    <HomeCoverSection blogs={sortedBlogs}/>
    {sortBlogs.length > 3 && <FeaturedPost blogs={sortedBlogs}/>}
    {sortBlogs.length > 3 ? <RecentPost blogs={sortedBlogs.slice(4,10)}/> : <RecentPost blogs={sortedBlogs.slice(1,6)}/>}
  </main>
}
