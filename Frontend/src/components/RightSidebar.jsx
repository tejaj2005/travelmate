import React, { useState } from "react";
import { Plus, Check } from "lucide-react";

const stories = [
  { id: 1, name: "Alex", avatar: "https://i.pravatar.cc/100?img=11" },
  { id: 2, name: "Mia", avatar: "https://i.pravatar.cc/100?img=12" },
  { id: 3, name: "Leo", avatar: "https://i.pravatar.cc/100?img=13" },
  { id: 4, name: "Sara", avatar: "https://i.pravatar.cc/100?img=14" },
];

const suggestions = [
  {
    id: 1,
    name: "Emma Watson",
    location: "Paris, France",
    avatar: "https://i.pravatar.cc/100?img=32",
  },
  {
    id: 2,
    name: "Noah Miles",
    location: "Rome, Italy",
    avatar: "https://i.pravatar.cc/100?img=33",
  },
  {
    id: 3,
    name: "Liam Scott",
    location: "Kyoto, Japan",
    avatar: "https://i.pravatar.cc/100?img=34",
  },
  {
    id: 4,
    name: "Ava Martinez",
    location: "Barcelona, Spain",
    avatar: "https://i.pravatar.cc/100?img=12",
  },
  {
    id: 5,
    name: "Noah Williams",
    location: "Toronto, Canada",
    avatar: "https://i.pravatar.cc/100?img=45",
  },
  {
    id: 6,
    name: "Sophia Chen",
    location: "Taipei, Taiwan",
    avatar: "https://i.pravatar.cc/100?img=23",
  },
  {
    id: 7,
    name: "Ethan Brown",
    location: "Melbourne, Australia",
    avatar: "https://i.pravatar.cc/100?img=56",
  },
  {
    id: 8,
    name: "Isabella Rossi",
    location: "Milan, Italy",
    avatar: "https://i.pravatar.cc/100?img=18",
  },
  {
    id: 9,
    name: "Arjun Mehta",
    location: "Mumbai, India",
    avatar: "https://i.pravatar.cc/100?img=60",
  },
  {
    id: 10,
    name: "Lina Johansson",
    location: "Stockholm, Sweden",
    avatar: "https://i.pravatar.cc/100?img=29",
  },
];


const RightSidebar = () => {
  return (
    <aside className="w-80 space-y-2">
      {/* Stories */}
      <div
        className="rounded-xl p-4 backdrop-blur-xl transition-colors duration-300"
        style={{
          backgroundColor: "var(--card-bg)",
          border: "1px solid var(--border)",
          color: "var(--text)",
        }}
      >
        <div className="flex items-center justify-between mb-4">
          <p className="text-xs font-medium text-[#1C769A]">Stories</p>
          <Plus
            size={16}
            className="opacity-70 cursor-pointer hover:opacity-100"
          />
        </div>

        <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
          {stories.map((story) => (
            <StoryAvatar key={story.id} story={story} />
          ))}
        </div>
      </div>

      {/* Recommended Tra */}
      <div
        className="rounded-xl p-4 backdrop-blur-xl transition-colors duration-300"
        style={{
          backgroundColor: "var(--card-bg)",
          border: "1px solid var(--border)",
          color: "var(--text)",
        }}
      >
        <p className="text-xs text-[#1C769A] font-medium mb-4">
          Recommended Travellers
        </p>

        <div className="space-y-4">
          {suggestions.map((user) => (
            <SuggestionItem key={user.id} user={user} />
          ))}
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;

/* Story Avatar */

const StoryAvatar = ({ story }) => {
  return (
    <div className="flex flex-col items-center shrink-0 cursor-pointer group">
      {/* Gradient Ring */}
      <div className="p-0.5 rounded-full bg-linear-to-tr from-[#1C769A] to-cyan-400">
        <img
          src={story.avatar}
          alt={story.name}
          className="
            h-12 w-12 rounded-full object-cover
            border-2
            transition-transform duration-300
            group-hover:scale-105
          "
          style={{ borderColor: "var(--card-bg)" }}
        />
      </div>

      {/* Username */}
      <span
        className="
          text-xs mt-1
          opacity-80
          max-w-16
          truncate
          group-hover:opacity-100
        "
      >
        {story.name}
      </span>
    </div>
  );
};

/* Suggestion Item */

const SuggestionItem = ({ user }) => {
  const [connect, setConnect] = useState(false);

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <img
          src={user.avatar}
          alt={user.name}
          className="h-10 w-10 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-medium">{user.name}</p>
          <p className="text-xs opacity-60">{user.location}</p>
        </div>
      </div>

      {/* Connect Button */}
      <button
        onClick={() => setConnect(!connect)}
        className={`
          relative overflow-hidden
          px-5.5 py-1.5 rounded-full
          text-xs font-medium
          transition-all duration-300
          active:scale-95
          ${
            connect
              ? "bg-[#1C769A]/10 text-[#1C769A]"
              : "text-[#1C769A] hover:bg-[#1C769A]/10"
          }
        `}
      >
        {/* Connect */}
        <span
          className={`
            flex items-center justify-center
            transition-all duration-300
            ${connect ? "opacity-0 scale-90" : "opacity-100"}
          `}
        >
          Connect
        </span>

        {/* Connected */}
        <span
          className={`
            absolute inset-0
            flex items-center justify-center space-x-1
            transition-all duration-300
            ${connect ? "opacity-100 scale-100" : "opacity-0 scale-110"}
          `}
        >
          <Check size={14} />
          <span>Connected</span>
        </span>
      </button>
    </div>
  );
};
