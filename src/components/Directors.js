const data = {
  // ...
};

function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>
      {data.directors && Array.isArray(data.directors) ? (
        data.directors.map((director, index) => (
          <div key={index}>
            <h2>{director.name}</h2>
            <ul>
              {director.movies.map((movie, index) => (
                <li key={index}>{movie}</li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <p>No director data available.</p>
      )}
    </div>
  );
}

export default Directors;


