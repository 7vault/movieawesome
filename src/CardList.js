import React from "react";
import Card from "./Card";

const imageUrl = "https://image.tmdb.org/t/p/w200/";

const CardList = ({ movies }) => {
  return (
    <div>
      {movies.map((movie, i) => (
        <Card
          key={i}
          release_date={movie.release_date}
          title={movie.title}
          poster_path={imageUrl + movie.poster_path}
        />
      ))}
    </div>
  );
};

export default CardList;

// import React from "react";
// import Card from "./Card";

// const CardList = ({ movies }) => {
//   const cardComponent = movies.map((movie, i) => {
//     return (
//       <Card
//         key={i}
//         year={movies[i].release_date}
//         title={movies[i].title}
//         poster={movies[i].poster_path}
//       />
//     );
//   });

//   return <div>{cardComponent}</div>;
// };

// export default CardList;
