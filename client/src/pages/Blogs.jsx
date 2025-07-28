import React from "react";

const blogPosts = [
  {
    id: 1,
    title: "Top 10 Ethical Hacking Tools You Must Know",
    excerpt:
      "Explore the most powerful and widely used ethical hacking tools for penetration testing and vulnerability analysis.",
    date: "July 20, 2025",
    author: "Alex Johnson",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    url: "/blog/top-10-ethical-hacking-tools",
  },
  {
    id: 2,
    title: "How to Prepare for Your CISSP Certification",
    excerpt:
      "A detailed guide on preparing effectively for the CISSP exam, including study tips, topics, and resources.",
    date: "July 15, 2025",
    author: "Maria Patel",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    url: "/blog/cissp-certification-preparation",
  },
  {
    id: 3,
    title: "The Future of Cloud Security in 2025",
    excerpt:
      "An overview of emerging cloud security trends and how to protect your data in a rapidly evolving landscape.",
    date: "July 10, 2025",
    author: "David Kim",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    url: "/blog/future-cloud-security-2025",
  },
  // Add more posts if needed
];

const BlogListPage = () => {
  return (
    <main className="bg-black min-h-screen py-16 px-6">
      <section className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-extrabold text-white mb-4">
          CyberSec Academy Blog
        </h1>
        <p className="text-red-400 text-lg max-w-3xl mx-auto">
          Latest cybersecurity news, tutorials, tips, and expert insights.
        </p>
      </section>

      <section className="max-w-5xl mx-auto space-y-10">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="flex flex-col md:flex-row gap-6 bg-gray-900 rounded-lg shadow-lg overflow-hidden"
          >
            {/* Image */}
            <a href={post.url} className="md:flex-shrink-0 block md:w-56 h-40 md:h-auto overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </a>

            {/* Content */}
            <div className="p-6 flex flex-col justify-between">
              <div>
                <time className="text-red-600 text-sm">{post.date}</time>
                <h2 className="text-2xl font-semibold text-white mt-1 mb-3">
                  <a href={post.url} className="hover:text-red-500 transition-colors">
                    {post.title}
                  </a>
                </h2>
                <p className="text-gray-300">{post.excerpt}</p>
              </div>
              <div className="mt-6 flex items-center justify-between text-red-400 font-semibold">
                <span>{post.author}</span>
                <a
                  href={post.url}
                  className="text-red-600 hover:text-red-500 transition-colors"
                  aria-label={`Read more about ${post.title}`}
                >
                  Read More &rarr;
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default BlogListPage;
