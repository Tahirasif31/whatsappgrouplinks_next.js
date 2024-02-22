import Heading from "../components/Heading";
import Fetcher from "./Fetcher";

function News() {
  return (
    <main className="container">
      <Heading title={"News"} />
      <article className="content-article">
        Welcome to our Daily News WhatsApp group Communities, where staying
        informed is just a message away! Join our dynamic community of avid news
        enthusiasts to receive real-time updates on the latest headlines,
        trends, and stories shaping the world. From breaking news alerts to
        in-depth analysis and thought-provoking discussions, our WhatsApp groups
        delivers curated content straight to your device, ensuring you're always
        ahead of the curve. Whether you're passionate about politics, business,
        technology, entertainment, or sports, our group covers it all, fostering
        a vibrant space for sharing knowledge and insights. Don't miss out on
        being part of this engaging community—Join now and experience the
        convenience of staying informed right at your fingertips.
      </article>
      <Fetcher title={"news"} />
    </main>
  );
}

export default News;
