import Heading from "../components/Heading";
import Fetcher from "../components/Fetcher";

function Jobs() {
  return (
    <main className="container">
      <Heading
        title={"Job"}
        end={
          "for daily updates on job openings, career advice & networking opportunities."
        }
      />
      <article className="content-article">
        Welcome to our vibrant community of Jobs WhatsApp groups! Are you ready
        to take your career to new heights? Look no further. Our platform offers
        a warm and inviting space where job seekers and professionals come
        together to explore exciting opportunities. Whether you&apos;re seeking
        your first job, transitioning careers, or aiming for that dream
        promotion, we&apos;ve got you covered. Join us today to connect with
        like&mdash;minded individuals, access exclusive job listings, and embark
        on a journey towards professional success. Let&apos;s build your future
        together, one opportunity at a time!
      </article>
      <Fetcher title={"jobs"} />
    </main>
  );
}

export default Jobs;
