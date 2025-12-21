import React, { useState } from "react";
import {
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  MoreHorizontal,
} from "lucide-react";

const PostCard = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showHeart, setShowHeart] = useState(false);

  const handleLike = () => {
    setLiked((prev) => !prev);
  };

  const handleDoubleTap = () => {
    if (!liked) setLiked(true);
    setShowHeart(true);
    setTimeout(() => setShowHeart(false), 700);
  };

  return (
    <div
      className="rounded-xl backdrop-blur-xl transition-all duration-300 hover:shadow-2xl"
      style={{
        backgroundColor: "var(--card-bg)",
        border: "1px solid var(--border)",
        color: "var(--text)",
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-3">
          <img
            src={post.userAvatar}
            alt={post.username}
            className="h-10 w-10 rounded-full object-cover ring-2 ring-[#1C769A]/30"
          />
          <div>
            <p className="text-sm font-medium">{post.username}</p>
            <p className="text-xs opacity-70">{post.location}</p>
          </div>
        </div>
        <MoreHorizontal size={18} className="opacity-70 cursor-pointer" />
      </div>

      {/* Image Double Tap */}
      <div
        className="relative overflow-hidden cursor-pointer rounded-lg m-2"
        onDoubleClick={handleDoubleTap}
      >
        <img
          src={post.image}
          alt="Post"
          className="w-full max-h-[520px] object-cover transition-transform duration-700 hover:scale-105"
        />

        {/* Heart Popup */}
        {showHeart && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Heart
              size={96}
              strokeWidth={0.5}
              className="fill-[#1C769A] animate-heart-pop drop-shadow-xl"
            />
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-5">
          {/* Like */}
          <button
            onClick={handleLike}
            className="relative transition-transform duration-300 active:scale-90"
          >
            <Heart
              size={22}
              className={`
                transition-all duration-300
                ${
                  liked
                    ? "text-[#1C769A] fill-[#1C769A] scale-125"
                    : "opacity-80"
                }
              `}
            />

            {/* Heart Animation */}
            {liked && <span className="absolute inset-0 animate-heart-burst" />}
          </button>

          <IconButton icon={MessageCircle} />
          <IconButton icon={Send} />
        </div>

        {/* Save Bookmark */}
        <button
          onClick={() => setSaved((prev) => !prev)}
          className="transition-transform duration-300 active:scale-90"
        >
          <Bookmark
            size={22}
            className={`
              transition-all duration-300
              ${
                saved ? "fill-[#1C769A] text-[#1C769A] scale-110" : "opacity-80"
              }
            `}
          />
        </button>
      </div>

      {/* Content */}
      <div className="px-4 pb-4 space-y-2">
        <p className="text-sm font-medium">
          {post.likes + (liked ? 1 : 0)} likes
        </p>

        <p className="text-sm leading-relaxed opacity-90">{post.caption}</p>

        <p className="text-xs opacity-60">{post.time}</p>
      </div>
    </div>
  );
};

export default PostCard;


const IconButton = ({ icon: Icon }) => {
  return (
    <button className="transition-all duration-300 hover:scale-110 hover:text-[#1C769A] active:scale-95">
      <Icon size={20} />
    </button>
  );
};
