import React, { useEffect } from "react";
import { X, Image, Video } from "lucide-react";

const StoryUploadModal = ({ onClose }) => {
  // Disable background scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    console.log("Uploaded story:", file);

    // Auto close after upload
    setTimeout(onClose, 300);
  };

  return (
    <>
      <div
        className="fixed inset-0 z-100 bg-black/40 backdrop-blur-md"
        onClick={onClose}
      />

      {/* MODAL */}
      <div className="fixed inset-0 z-101 flex items-center justify-center px-4">
        <div
          className="w-full max-w-md rounded-2xl p-6 shadow-2xl"
          style={{
            backgroundColor: "var(--card-bg)",
            border: "1px solid var(--border)",
            color: "var(--text)",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* HEADER */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">Add Story</h2>
            <button onClick={onClose} className="opacity-70 hover:opacity-100">
              <X size={18} />
            </button>
          </div>

          {/* UPLOAD OPTIONS */}
          <div className="space-y-4">
            {/* IMAGE */}
            <label className="flex items-center gap-4 p-4 rounded-xl cursor-pointer transition hover:bg-black/5 dark:hover:bg-white/5">
              <div className="p-3 rounded-lg bg-[#1C769A]/15">
                <Image size={20} className="text-[#1C769A]" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-sm">Upload Image</p>
                <p className="text-xs opacity-60">PNG, JPG, JPEG</p>
              </div>
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={handleFileChange}
              />
            </label>

            {/* VIDEO */}
            <label className="flex items-center gap-4 p-4 rounded-xl cursor-pointer transition hover:bg-black/5 dark:hover:bg-white/5">
              <div className="p-3 rounded-lg bg-[#1C769A]/15">
                <Video size={20} className="text-[#1C769A]" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-sm">Upload Video</p>
                <p className="text-xs opacity-60">MP4, MOV</p>
              </div>
              <input
                type="file"
                accept="video/*"
                hidden
                onChange={handleFileChange}
              />
            </label>
          </div>

          <p className="mt-6 text-xs opacity-50 text-center">
            Stories disappear after 24 hours
          </p>
        </div>
      </div>
    </>
  );
};

export default StoryUploadModal;
