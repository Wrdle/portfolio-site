import Head from "next/head";

const Meta = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="keywords"
        content="blog, Matt D'Agostino, Matthew D'Agostino, Portfolio, kotlin, kubernetes, Brisbane, Australia,
         Software, Engineer, Sofware Engineer, DevOps, Developer"
      />
    </Head>
  );
};

export default Meta;

// Default title
Meta.defaultProps = {
  title: "Matt's Personal Blog",
};
