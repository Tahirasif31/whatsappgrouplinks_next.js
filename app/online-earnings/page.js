import Heading from "../components/Heading";
import Fetcher from "../components/Fetcher";

function OnlineEarnings() {
  return (
    <main className="container">
      <Heading
        title={"Online Earnings"}
        end={
          "to explore new avenues of earning money from the comfort of your home."
        }
      />
      <article className="content-article">
        Welcome to our vibrant Online Earning WhatsApp group links! Are you
        ready to embark on a journey towards financial empowerment? Look no
        further! Our platform serves as a gateway to a plethora of lucrative
        online earning opportunities, meticulously curated to help you maximize
        your income potential. Join our community today to connect with fellow
        earners, gain access to exclusive resources, and stay updated on the
        latest trends and strategies in the world of online earning. Whether
        you&apos;re a seasoned entrepreneur or just starting your journey,
        we&apos;re here to support you every step of the way. Let&apos;s turn
        your dreams of financial independence into reality&mdash;join groups now
        and start your journey towards unlimited earning potential!
      </article>
      <Fetcher title={"onlineEarnings"} />
    </main>
  );
}

export default OnlineEarnings;
