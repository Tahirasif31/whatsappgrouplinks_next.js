"use client";
import Heading from "../components/Heading";
import LinkHeader from "../components/LinkHeader";
import LinkRows from "../components/LinkRows";
import { useFetchGroups } from "../hooks/useFetchGroups";

function News() {
  const [groups, isLoading] = useFetchGroups("news");

  if (isLoading) return <p>Loading</p>;

  return (
    <main className="container">
      <Heading title={"News"} />
      <section className="content-container">
        <LinkHeader />
        {groups.map((group) => (
          <LinkRows group={group} key={group} />
        ))}
      </section>
    </main>
  );
}

export default News;
