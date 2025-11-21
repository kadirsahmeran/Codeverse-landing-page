import { type BlogPost } from "./BlogList";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <a
      href="/"
      className="card-base rounded-xl group flex flex-col overflow-hidden hover:border-cyan-500 shadow-xl hover:shadow-cyan-900/40"
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="p-6 flex flex-col grow">
        <div className="flex justify-between items-center text-sm mb-3">
          <span className="text-cyan-400 font-medium bg-gray-800 px-3 py-1 rounded-full">
            {post.category}
          </span>
          <span className="text-gray-500">{post.date}</span>
        </div>

        <h3 className="text-xl font-bold text-white mb-2 leading-snug group-hover:text-cyan-300 transition-colors">
          {post.title}
        </h3>
        <p className="text-gray-400 mb-4 grow line-clamp-3">{post.excerpt}</p>

        <div className="mt-auto flex justify-between items-center pt-2 border-t border-gray-800">
          <span className="text-sm font-medium text-cyan-400">
            {post.readTime}
          </span>
          <span className="text-cyan-400 font-semibold text-sm">
            Read More &rarr;
          </span>
        </div>
      </div>
    </a>
  );
}
