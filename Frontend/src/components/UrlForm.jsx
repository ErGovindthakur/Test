import { useState } from 'react';
import axios from 'axios';

const UrlForm = () => {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:5050/api/shortenUrl', { originalUrl });
    console.log(`Response -: ${res.data.shortUrl}`)
    setShortUrl(res.data.shortUrl);
  };

  return (
    <div className="bg-white p-6 rounded shadow-lg w-96">
      <h1 className="text-xl font-bold mb-4">URL Shortener</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="url"
          className="border p-2 w-full mb-2"
          placeholder="Enter long URL"
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
          required
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Shorten</button>
      </form>
      {shortUrl && (
        <p className="mt-4 text-green-600">
          Short URL: <a href={shortUrl} target="_blank" rel="noopener noreferrer">{shortUrl}</a>
        </p>
      )}
    </div>
  );
};

export default UrlForm;
