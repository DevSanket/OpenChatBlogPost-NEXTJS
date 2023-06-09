import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import AppLayout from "../component/AppLayout/AppLayout";
import { getAppProps } from "../utils/getAppProps";

const TokenTopUp = () => {
  const handleClick = async () => {
    await fetch(`/api/addToken`, {
      method: "POST",
    });
  };
  return (
    <>
      <h1>Token Top Up</h1>
      <button className="btn" onClick={handleClick}>
        Add Token
      </button>
    </>
  );
};

TokenTopUp.getLayout = function getLayout(page, pageProps) {
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

export default TokenTopUp;
