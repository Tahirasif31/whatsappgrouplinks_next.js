"use client";
import LinkHeader from "./LinkHeader";
import LinkRows from "./LinkRows";
import LoadingSpinner from "./LoadingSpinner";
import { useFetchGroups } from "../hooks/useFetchGroups";
function Fetcher({ title }) {
  const [groups, isLoading] = useFetchGroups(title);

  if (isLoading) return <LoadingSpinner />;

  return (
    <section className="content-container">
      <LinkHeader />
      {groups.map((group) => (
        <LinkRows group={group} key={group} />
      ))}
    </section>
  );
}

export default Fetcher;
