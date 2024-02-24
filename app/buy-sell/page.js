import Heading from "../components/Heading";
import Fetcher from "../components/Fetcher";

function BuySell() {
  return (
    <main className="container">
      <Heading
        title={"Buy & Sell"}
        end={"for easy access to a diverse marketplace"}
      />
      <article className="content-article">
        Looking to streamline your buying and selling experience? Look no
        further than our comprehensive WhatsApp groups dedicated to connecting
        buyers and sellers seamlessly! Our platform offers a diverse marketplace
        where you can discover a plethora of items, from electronics and
        clothing to household goods and beyond. With easy access to these
        groups, you can effortlessly browse listings, negotiate deals, and
        arrange transactions—all within the convenience of WhatsApp. Say goodbye
        to the hassle of traditional marketplaces and join our community today
        to unlock endless possibilities for buying and selling with ease!
      </article>
      <Fetcher title={"buysell"} />
    </main>
  );
}

export default BuySell;
