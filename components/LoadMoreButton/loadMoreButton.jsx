import { useState } from "react";
import "./loadMoreButton.css";

const LoadMoreButton = ({ onLoadMore }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);

    try {
      await onLoadMore();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={isLoading}
      className="load-more-btn"
    >
      {isLoading ? (
        <>
          <span className="spinner"></span>
          Loading...
        </>
      ) : (
        <>
          Load More
          <span className="arrow">↓</span>
        </>
      )}
    </button>
  );
};

export default LoadMoreButton;