import React from 'react';

const ReviewTile = ({ summary, body, reviewerName, date }) => {
  return (
    <td className="review-card" data-testid="reviewTile">
      <p>{summary}</p>
      <p>{body}</p>
      <p>{reviewerName}</p>
      <p>{date}</p>
    </td>
  );
};

export default ReviewTile;