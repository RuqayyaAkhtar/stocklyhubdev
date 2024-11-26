// blogs/[id]/page.js

import blogData from "@/app/blogs/data"; // Adjust path if needed
import BlogDetail from "@/app/blogs/[id]/jsx"; // Move the client component to a separate file

// Server-side function to generate static parameters
export async function generateStaticParams() {
  const params = blogData.map((blog) => ({ id: blog.id.toString() }));
  return params;
}

// Server component for the page
export default function BlogPage({ params }) {
  const { id } = params;
  const blog = blogData.find((blog) => blog.id === parseInt(id, 10));

  if (!blog) {
    return <p>Blog not found.</p>;
  }

  return <BlogDetail blog={blog} />;
}
