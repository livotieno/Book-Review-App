import React, { useState } from 'react';

function App() {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);

  const handleSearch = async () => {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
    const data = await response.json();
    setBooks(data.items);
  };
 

  return (
    
    <div>
    <header>3LIV BOOKSTORE</header>
    <p>Welcome to 3LIV BOOKSTORE where you can embark on a reading experience like never before, where every chapter invites you to escape reality and immerse yourself in the enchanting embrace of storytelling. <br /> Welcome to a digital haven for book lovers—the adventure begins here! <br /> For newcomers the site only provides brief information concerning the book in focus.  </p>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search for a book"
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <h2>{book.volumeInfo.title}</h2>
            <p>{book.volumeInfo.authors}</p>
            <p>{book.volumeInfo.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;