import Heading from "../components/Heading";
import Fetcher from "../components/Fetcher";

function Cricket() {
  return (
    <main className="container">
      <Heading title={"Cricket"} end={"Real-Time Updates"} />
      <article className="content-article">
        Welcome to the ultimate hub for WhatsApp cricket group links! If
        you&apos;re a die-hard cricket fan seeking a vibrant community to share
        your passion, you&apos;ve come to the right place. Our website is
        brimming with an extensive array of cricket groups on WhatsApp, each
        offering a warm and inviting atmosphere for enthusiasts like you to
        connect, discuss matches, exchange insights, and revel in the thrill of
        the game together. Whether you&apos;re into international fixtures, T20
        leagues, or local tournaments, there&apos;s a group tailored just for
        you. Joining is simple &mdash; explore our carefully curated selection
        of links, click, and immerse yourself in the exciting world of cricket
        camaraderie. Don&apos;t miss out on the fun &mdash; join us today and be
        part of an engaging community where cricket reigns supreme!
      </article>
      <Fetcher title={"cricket"} />
    </main>
  );
}

export default Cricket;
