"use client";
import Heading from "../components/Heading";
import LinkHeader from "../components/LinkHeader";
import LinkRows from "../components/LinkRows";
import LoadingSpinner from "../components/LoadingSpinner";
import { useFetchGroups } from "../hooks/useFetchGroups";
function Fetcher() {
  const [groups, isLoading] = useFetchGroups("news");

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
