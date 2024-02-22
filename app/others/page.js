import Heading from "../components/Heading";
import Fetcher from "../components/Fetcher";

function Girls() {
  return (
    <main className="container">
      <Heading title={"Fun Groups"} end={"Entertainment"} />
      <article className="content-article">
        Welcome to the ultimate hub of fun and entertainment! Dive into a world
        of laughter, excitement, and endless amusement by joining our exclusive
        WhatsApp group. Discover a diverse community of fun-seekers where every
        moment is packed with joy and camaraderie. Whether you&apos;re
        passionate about sharing hilarious memes, engaging in lively debates, or
        simply connecting with fellow enthusiasts, you&apos;ll find your perfect
        match here. Join us today and unlock a treasure trove of unforgettable
        experiences. Let&apos;s create memories, share laughter, and make every
        moment count together! Don&apos;t miss out &mdash; join our
        fun&mdash;filled WhatsApp group now!
      </article>
      <Fetcher title={"others"} />
    </main>
  );
}

export default Girls;
