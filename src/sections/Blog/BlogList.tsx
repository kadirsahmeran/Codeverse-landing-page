import Button from "../../components/Button";
import BlogCard from "./BlogCard";

export type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  imageUrl: string;
  readTime: string;
};

const latestPosts: BlogPost[] = [
  {
    id: 1,
    title: "Performance Optimization Techniques in React",
    excerpt:
      "Memoization, lazy loading, and virtual DOM tips that you can use to improve React performance in large-scale applications.",
    category: "Development",
    date: "October 25, 2025",
    imageUrl: "/blog.jpg",
    readTime: "7 min read",
  },
  {
    id: 2,
    title: "Increase Design Speed ​​by 10X with Tailwind CSS",
    excerpt:
      "Discover why Tailwind is a revolution in modern web development and the benefits of its utility-first approach.",
    category: "Design & CSS",
    date: "October 18, 2025",
    imageUrl: "/blog1.jpg",
    readTime: "5 min read",
  },
  {
    id: 3,
    title: "The Rising Importance of Cybersecurity in 2025",
    excerpt:
      "As digital threats evolve, protecting your data has never been more critical. Discover the latest strategies companies use to stay one step ahead of cyber attackers.",
    category: "Technology",
    date: "October 10, 2025",
    imageUrl: "/blog2.jpg",
    readTime: "9 min read",
  },
];

export default function BlogList() {
  return (
    <>
      <div
        data-aos="fade-up"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {latestPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>

      <div data-aos="fade-up" className="text-center mt-5 md:mt-12">
        <Button href="/">See all posts</Button>
      </div>
    </>
  );
}
