import BlogHeader from "./BlogHeader";
import BlogList from "./BlogList";

export default function Blog() {
  return (
    <section id="blog" className="py-12 md:py-20 text-gray-100">
      <div className="container2">
        <BlogHeader />
        <BlogList />
      </div>
    </section>
  );
}
