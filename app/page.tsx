import Image from "next/image";
import { allPosts } from "contentlayer/generated";
import Link from "next/link";
import { NextSeo } from "next-seo";
import siteMetadata from "../siteMetadata";

export default function Home() {
  return (
    <>
      <main className=" bg-gray-800 h-screen overflow-auto">
        <div className="mt-14 pt-4 ">
          {allPosts.map((post) => {
            return (
              <div
                key={post._id}
                className="text-center bg-gray-400 my-4 w-2/3 mx-auto "
              >
                <h2 className="bg-gray-600 text-white text-2xl">
                  {post.title}
                </h2>
                <p>{post.description}...</p>

                <Link href={`${post.url}`}>
                  {" "}
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-xs px-3 py-1 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  >
                    View Details
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}
