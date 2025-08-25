import React, { useState, useEffect, useContext } from "react";
import { Calendar, User, ArrowRight, Plus, Edit, Trash2 } from "lucide-react";
import { blogsAPI } from "../services/api";
import { useAuth } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { isAdmin } = useAuth();
  const { darkMode } = useContext(ThemeContext);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const response = await blogsAPI.getAll();
      setBlogs(response.data);
    } catch (error) {
      setError("Failed to load blogs");
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Loading blogs...
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white dark:bg-gray-900" id="blogs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Latest Insights
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Stay updated with the latest crypto market analysis, trading
            strategies, and industry insights from our expert team.
          </p>
        </div>

        {error && (
          <div className="mb-8 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        {blogs.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 dark:text-gray-500 mb-4">
              <Calendar size={48} className="mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No blogs yet
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {isAdmin()
                ? "Create your first blog post to get started!"
                : "Check back soon for the latest insights."}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <article
                key={blog.id}
                className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 ${
                  darkMode ? "border border-gray-700" : "border border-gray-200"
                }`}
              >
                {blog.image && (
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                )}

                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <User size={16} className="mr-2" />
                    <span>{blog.author?.username || "Anonymous"}</span>
                    <span className="mx-2">•</span>
                    <Calendar size={16} className="mr-2" />
                    <span>{formatDate(blog.created_at)}</span>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2">
                    {blog.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {blog.content.length > 150
                      ? `${blog.content.substring(0, 150)}...`
                      : blog.content}
                  </p>

                  <div className="flex items-center justify-between">
                    <button className="text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 font-medium flex items-center">
                      Read More
                      <ArrowRight size={16} className="ml-1" />
                    </button>

                    {isAdmin() && (
                      <div className="flex items-center space-x-2">
                        <button className="p-1 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                          <Edit size={16} />
                        </button>
                        <button className="p-1 text-gray-400 hover:text-red-600 dark:hover:text-red-400">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {isAdmin() && (
          <div className="text-center mt-12">
            <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium rounded-lg transition-all hover:shadow-lg">
              <Plus size={20} className="mr-2" />
              Create New Blog Post
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
