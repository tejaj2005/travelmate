import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import LeftNavbar from "../components/LeftNavbar";
import RightSidebar from "../components/RightSidebar";
import PostCard from "../components/PostCard";

const initialPosts = [
  {
    id: 1,
    username: "lewishamilton",
    location: "Manali, India",
    userAvatar: "https://i.pravatar.cc/150?img=12",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    likes: 28500,
    caption:
      "Manali is a serene mountain getaway wrapped in snow-capped peaks and fresh Himalayan air 🏔️✨",
    time: "5 hours ago",
  },
  {
    id: 2,
    username: "natgeo",
    location: "Patagonia, Chile",
    userAvatar: "https://i.pravatar.cc/150?img=22",
    image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1",
    likes: 42000,
    caption:
      "Patagonia’s landscapes remind us how vast and untouched the world still is 🌍",
    time: "8 hours ago",
  },
];

/* FEED PAGE */

const FeedPage = () => {
  const [posts, setPosts] = useState(initialPosts);
  const [loading, setLoading] = useState(false);
  const loaderRef = useRef(null);

  // Load more posts (mock API)
  const loadMorePosts = () => {
    if (loading) return;

    setLoading(true);

    setTimeout(() => {
      setPosts((prev) => [
        ...prev,
        ...initialPosts.map((post, index) => ({
          ...post,
          id: prev.length + index + 1,
        })),
      ]);
      setLoading(false);
    }, 900);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          loadMorePosts();
        }
      },
      { threshold: 1 }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="min-h-screen transition-colors"
      style={{
        backgroundColor: "var(--bg)",
        color: "var(--text)",
      }}
    >
      {/* Top Navbar */}
      <Navbar />

      <div className="flex pt-20 pl-64">

        {/* Left Sidebar */}
        <LeftNavbar />

        {/* Feed Center */}
        <main className="flex-1 flex justify-center mt-4">
          <div className="w-full max-w-[820px] space-y-2">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}

            {/* Loader */}
            <div
              ref={loaderRef}
              className="h-24 flex items-center justify-center"
            >
              {loading && (
                <span className="text-sm opacity-60 animate-pulse">
                  Loading more adventures...
                </span>
              )}
            </div>
          </div>
        </main>

        {/* Right Sidebar */}
        <div className="hidden xl:block sticky top-24 h-fit pr-6">
          <RightSidebar />
        </div>

      </div>
    </div>
  );
};

export default FeedPage;
