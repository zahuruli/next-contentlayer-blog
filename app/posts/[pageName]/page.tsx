import { NextPage } from "next";
import { allPosts } from "contentlayer/generated";
import Link from "next/link";
import { FaBackward } from "react-icons/fa6";

const page: NextPage = ({ params }) => {
  const { pageName } = params;
  const selectedPost = allPosts?.find(
    (post) => post._raw.flattenedPath === pageName
  );

  return (
    <>
      <div className="h-screen bg-gray-700 overflow-hidden">
        <div className="text-center bg-gray-400 my-4 p-4 w-2/3 mx-auto h-5/6 pb-10 mt-20">
          <h2 className="text-white text-2xl p-4 bg-gray-500">
            {selectedPost?.title}
            <p className="text-xs">
              {new Date(selectedPost?.date).toLocaleDateString("un-us")}
            </p>
          </h2>
          <div className="flex ">
            <div>
              <Link href="/" className="mr-6 text-md text-blue-200">
                <FaBackward />
              </Link>
            </div>
            {selectedPost?.tags.map((tag) => {
              return (
                <div key={tag} className=" mx-2">
                  <div className="text-xs">#{tag}</div>
                </div>
              );
            })}
          </div>

          <div className="bg-black  h-4/5 overflow-scroll overflow-x-hidden   pt-4">
            <div
              dangerouslySetInnerHTML={{ __html: selectedPost?.body.html }}
              className="prose text-white mx-auto"
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
