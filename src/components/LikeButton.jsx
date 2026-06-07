import { useEffect, useState } from "react";

export default function LikeButton({ showId }) {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(`like-${showId}`);
    if (saved === "true") {
      setLiked(true);
    }
  }, [showId]);

  const toggleLike = () => {
    const newValue = !liked;
    setLiked(newValue);
    localStorage.setItem(`like-${showId}`, newValue.toString());
  };

  return (
    <button
      onClick={toggleLike}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        fontSize: "28px",
      }}
      aria-label="Me gusta"
    >
      {liked ? "❤️" : "🤍"}
    </button>
  );
}