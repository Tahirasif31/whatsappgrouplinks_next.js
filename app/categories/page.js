import CategoriesCard from "./CategoriesCard";

function Main() {
  const categories = [
    {
      img: "/card-one.jpg",
      title: "News Groups",
      description: "join news groups for daily news",
      route: "news",
    },
    {
      img: "/card-two.jpg",
      title: "Business Groups",
      description: "join business groups to grow your business",
      route: "business",
    },
    {
      img: "/card-three.jpg",
      title: "Cricket Groups",
      description: "join cricket groups to accelerate your passion",
      route: "cricket",
    },
    {
      img: "/card-four.jpg",
      title: "Pubg Groups",
      description: "join pubg groups for fun",
      route: "pubg",
    },
    {
      img: "/card-five.jpg",
      title: "Girls Groups",
      description: "join girls groups to find beauty products",
      route: "girls",
    },
    {
      img: "/card-seven.jpg",
      title: "Buy & Sell Groups",
      description: "join all kind of groups for fun",
      route: "buy-sell",
    },
    {
      img: "/card-eight.jpg",
      title: "Jobs Groups",
      description: "join all kind of groups for fun",
      route: "jobs",
    },
    {
      img: "/card-nine.jpg",
      title: "Online Earnings Groups",
      description: "join all kind of groups for fun",
      route: "online-earnings",
    },
    {
      img: "/card-six.jpg",
      title: "Other Groups",
      description: "join all kind of groups for fun",
      route: "others",
    },
  ];
  return (
    <main className="categories-main">
      <div className="categories-container">
        <div className="categories">
          {categories.map((category) => (
            <CategoriesCard category={category} key={categories.route} />
          ))}
        </div>
      </div>
    </main>
  );
}
export default Main;
