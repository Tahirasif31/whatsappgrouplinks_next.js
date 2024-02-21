"use client";
import Heading from "../components/Heading";
import LinkHeader from "../components/LinkHeader";
import LinkRows from "../components/LinkRows";
import { useFetchGroups } from "../hooks/useFetchGroups";

function Business() {
  const [groups, isLoading] = useFetchGroups("business");

  if (isLoading) return <p>loading</p>;

  return (
    <main className="container">
      <Heading title={"Business"} />
      <section className="content-container">
        <LinkHeader />
        {groups.map((group) => (
          <LinkRows group={group} key={group} />
        ))}
      </section>
    </main>
  );
}

export default Business;
