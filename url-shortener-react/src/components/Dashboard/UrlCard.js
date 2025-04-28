import React from 'react';

const UrlCard = ({ urlData }) => {
  const { originalUrl, shortUrl, clicks } = urlData;

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    alert('Copied to clipboard!');
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">Original URL:</h5>
        <p>{originalUrl}</p>
        <h6 className="card-subtitle mb-2 text-muted">Short URL:</h6>
        <p>
          <a href={shortUrl} target="_blank" rel="noreferrer">{shortUrl}</a>
        </p>
        <p><strong>Clicks:</strong> {clicks}</p>
        <button className="btn btn-outline-primary" onClick={handleCopy}>Copy</button>
      </div>
    </div>
  );
};

export default UrlCard;
