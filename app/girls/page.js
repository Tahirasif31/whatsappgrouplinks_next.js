"use client";
import Heading from "../components/Heading";
import LinkHeader from "../components/LinkHeader";
import LinkRows from "../components/LinkRows";
import { useFetchGroups } from "../hooks/useFetchGroups";

function Girls() {
  const [groups, isLoading] = useFetchGroups("girls");

  if (isLoading) return <p>Loading</p>;

  return (
    <main className="container">
      <Heading title={"Girls"} />
      <section className="content-container">
        <LinkHeader />
        {groups.map((group) => (
          <LinkRows group={group} key={group} />
        ))}
      </section>
    </main>
  );
}

export default Girls;
