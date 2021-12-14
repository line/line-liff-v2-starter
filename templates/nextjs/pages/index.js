import Head from "next/head";
import packageJson from "../package.json";

export default function Home(props) {
  /** You can access to liff and liffError object through the props.
   *  const { liff, liffError } = props;
   *  console.log(liff.getVersion());
   *
   *  Learn more about LIFF API documentation (https://developers.line.biz/en/reference/liff)
   **/
  return (
    <div>
      <Head>
        <title>LIFF Starter</title>
      </Head>
      <div className="home">
        <h1 className="home__title">
          Welcome to <br />
          <a
            className="home__title__link"
            href="https://developers.line.biz/en/docs/liff/overview/"
          >
            LIFF Starter!
          </a>
        </h1>
        <div className="home__badges">
          <span className="home__badges__badge badge--primary">
            LIFF Starter
          </span>
          <span className="home__badges__badge badge--secondary">nextjs</span>
          <span className="home__badges__badge badge--primary">
            {packageJson.version}
          </span>
          <a
            href="https://github.com/line/line-liff-v2-starter"
            target="_blank"
            rel="noreferrer"
            className="home__badges__badge badge--secondary"
          >
            GitHub
          </a>
        </div>
        <div className="home__buttons">
          <a
            href="https://developers.line.biz/en/docs/liff/developing-liff-apps/"
            target="_blank"
            rel="noreferrer"
            className="home__buttons__button button--primary"
          >
            LIFF Documentation
          </a>
          <a
            href="https://liff-playground.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="home__buttons__button button--tertiary"
          >
            LIFF Playground
          </a>
          <a
            href="https://developers.line.biz/console/"
            target="_blank"
            rel="noreferrer"
            className="home__buttons__button button--secondary"
          >
            LINE Developers Console
          </a>
        </div>
      </div>
    </div>
  );
}
