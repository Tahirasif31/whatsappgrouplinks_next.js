"use client";
import Heading from "../components/Heading";
import LinkHeader from "../components/LinkHeader";
import LinkRows from "../components/LinkRows";
import { useFetchGroups } from "../hooks/useFetchGroups";

function Business() {
  const [groups, isLoading] = useFetchGroups("business");

  if (isLoading) return <p>loading</p>;

  return (
    <div className="container">
      <Heading title={"Business"} />
      <div className="content-container">
        <LinkHeader />
        {groups.map((group) => (
          <LinkRows group={group} key={group} />
        ))}
      </div>
    </div>
  );
}

export default Business;
