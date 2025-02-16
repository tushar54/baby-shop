import EachBlog from "./EachBlog";

export default function BlogSection  ()  {
    const blogPosts = [
      {
        date: "5",
        month: "May",
        image: "https://i.ibb.co.com/93wfc7n0/b-m-l-img-1-768x595.jpg",
        title: "Fun colourful cutlery for toddlers to more enjoy dining",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      },
      {
        date: "9",
        month: "May",
        image: "https://i.ibb.co.com/tGWTcz1/b-m-l-img-2-768x768.jpg",
        title: "Fun childhood with furry toys ready for best cuddles",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      },
      {
        date: "13",
        month: "May",
        image: "https://i.ibb.co.com/7xYLxNry/b-m-l-img-3-768x499.jpg",
        title: "Dotted design summertime swimsuit collection for toddlers",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      },
    ];
  
    return (
      <div className="container mx-auto justify-center items-center  px-4 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <EachBlog key={index} {...post} />
        ))}
      </div>
    );
  };