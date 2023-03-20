import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useRouter } from "next/router";
import { useState } from "react";
import AppLayout from "../../component/AppLayout/AppLayout";
import { getAppProps } from "../../utils/getAppProps";

const newPost = (props) => {
  const [topic, setTopic] = useState("");
  const [keywords, setKeywords] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/generatePost", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ topic, keywords }),
    });
    const json = await response.json();
    console.log("Result: ", json);
    if (json?.postId) {
      router.push(`/post/${json.postId}`);
    }
  };

  return (
    <>
      <form
        className="w-[60vw] h-auto mx-auto rounded-md shadow-lg mt-10 p-5"
        onSubmit={handleSubmit}
      >
        <div>
          <label>
            <strong>Generate a blog post on the topic of:</strong>
          </label>
          <textarea
            className="resize-none border  border-slate-500 w-full block my-2 px-4 py-2 rounded-lg"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
        </div>
        <div>
          <label>
            <strong>Targeting the following keywords :</strong>
          </label>
          <textarea
            className="resize-none border  border-slate-500 w-full block my-2 px-4 py-2 rounded-lg"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
          />
        </div>
        <button className="btn" type="submit">
          Generate
        </button>
      </form>
    </>
  );
};

newPost.getLayout = function getLayout(page, pageProps) {
  return <AppLayout {...pageProps}>{page}</AppLayout>;
};

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    const props = await getAppProps(ctx);
    return {
      props,
    };
  },
});

export default newPost;
