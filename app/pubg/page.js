"use client";
import Heading from "../components/Heading";
import LinkHeader from "../components/LinkHeader";
import LinkRows from "../components/LinkRows";
import { useFetchGroups } from "../hooks/useFetchGroups";

function Pubg() {
  const [groups, isLoading] = useFetchGroups("pubg");

  if (isLoading) return <p>Loading</p>;

  return (
    <div className="container">
      <Heading title={"Other"} />
      <div className="content-container">
        <LinkHeader />
        {groups.map((group) => (
          <LinkRows group={group} key={group} />
        ))}
      </div>
    </div>
  );
}

export default Pubg;
