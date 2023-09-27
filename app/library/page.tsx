import Link from 'next/link'
import PageTitle from '../../components/PageTitle'

// export function LibraryComponent({ filmData }) {
//   return
//   )
// }

export default async function Page() {
  const movies = [
    {
      Title: 'Psycho',
      Year: '1960',
      Rated: 'R',
      Released: '08 Sep 1960',
      Runtime: '109 min',
      Genre: 'Horror, Mystery, Thriller',
      Director: 'Alfred Hitchcock',
      Writer: 'Joseph Stefano, Robert Bloch',
      Actors: 'Anthony Perkins, Janet Leigh, Vera Miles',
      Plot: "A Phoenix secretary embezzles $40,000 from her employer's client, goes on the run and checks into a remote motel run by a young man under the domination of his mother.",
      Language: 'English',
      Country: 'United States',
      Awards: 'Nominated for 4 Oscars. 8 wins & 14 nominations total',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNTQwNDM1YzItNDAxZC00NWY2LTk0M2UtNDIwNWI5OGUyNWUxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
      Ratings: [
        {
          Source: 'Internet Movie Database',
          Value: '8.5/10',
        },
        {
          Source: 'Rotten Tomatoes',
          Value: '96%',
        },
        {
          Source: 'Metacritic',
          Value: '97/100',
        },
      ],
      Metascore: '97',
      imdbRating: '8.5',
      imdbVotes: '697,367',
      imdbID: 'tt0054215',
      Type: 'movie',
      DVD: '12 Feb 2014',
      BoxOffice: '$32,000,000',
      Production: 'N/A',
      Website: 'N/A',
      Response: 'True',
    },
    {
      Title: 'Birds of Prey',
      Year: '2020',
      Rated: 'R',
      Released: '07 Feb 2020',
      Runtime: '109 min',
      Genre: 'Action, Comedy, Crime',
      Director: 'Cathy Yan',
      Writer: 'Christina Hodson, Paul Dini, Bruce Timm',
      Actors: 'Margot Robbie, Rosie Perez, Mary Elizabeth Winstead',
      Plot: 'After splitting with the Joker, Harley Quinn joins superheroines Black Canary, Huntress, and Renee Montoya to save a young girl from an evil crime lord.',
      Language: 'English, Chinese',
      Country: 'United States',
      Awards: '18 wins & 83 nominations',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMzQ3NTQxMjItODBjYi00YzUzLWE1NzQtZTBlY2Y2NjZlNzkyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg',
      Ratings: [
        {
          Source: 'Internet Movie Database',
          Value: '6.1/10',
        },
        {
          Source: 'Rotten Tomatoes',
          Value: '78%',
        },
        {
          Source: 'Metacritic',
          Value: '60/100',
        },
      ],
      Metascore: '60',
      imdbRating: '6.1',
      imdbVotes: '255,250',
      imdbID: 'tt7713068',
      Type: 'movie',
      DVD: '23 Mar 2020',
      BoxOffice: '$84,172,791',
      Production: 'N/A',
      Website: 'N/A',
      Response: 'True',
    },
    {
      Title: 'Black Swan',
      Year: '2010',
      Rated: 'R',
      Released: '17 Dec 2010',
      Runtime: '108 min',
      Genre: 'Drama, Thriller',
      Director: 'Darren Aronofsky',
      Writer: 'Mark Heyman, Andres Heinz, John J. McLaughlin',
      Actors: 'Natalie Portman, Mila Kunis, Vincent Cassel',
      Plot: "Nina is a talented but unstable ballerina on the verge of stardom. Pushed to the breaking point by her artistic director and a seductive rival, Nina's grip on reality slips, plunging her into a waking nightmare.",
      Language: 'English, French, Italian',
      Country: 'United States',
      Awards: 'Won 1 Oscar. 97 wins & 279 nominations total',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNzY2NzI4OTE5MF5BMl5BanBnXkFtZTcwMjMyNDY4Mw@@._V1_SX300.jpg',
      Ratings: [
        {
          Source: 'Internet Movie Database',
          Value: '8.0/10',
        },
        {
          Source: 'Rotten Tomatoes',
          Value: '85%',
        },
        {
          Source: 'Metacritic',
          Value: '79/100',
        },
      ],
      Metascore: '79',
      imdbRating: '8.0',
      imdbVotes: '798,124',
      imdbID: 'tt0947798',
      Type: 'movie',
      DVD: '25 Nov 2015',
      BoxOffice: '$106,954,678',
      Production: 'N/A',
      Website: 'N/A',
      Response: 'True',
    },
    {
      Title: 'Requiem for a Dream',
      Year: '2000',
      Rated: 'Unrated',
      Released: '15 Dec 2000',
      Runtime: '102 min',
      Genre: 'Drama',
      Director: 'Darren Aronofsky',
      Writer: 'Hubert Selby Jr., Darren Aronofsky',
      Actors: 'Ellen Burstyn, Jared Leto, Jennifer Connelly',
      Plot: 'The drug-induced utopias of four Coney Island people are shattered when their addictions run deep.',
      Language: 'English',
      Country: 'United States',
      Awards: 'Nominated for 1 Oscar. 37 wins & 69 nominations total',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BOTdiNzJlOWUtNWMwNS00NmFlLWI0YTEtZmI3YjIzZWUyY2Y3XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
      Ratings: [
        {
          Source: 'Internet Movie Database',
          Value: '8.3/10',
        },
        {
          Source: 'Rotten Tomatoes',
          Value: '78%',
        },
        {
          Source: 'Metacritic',
          Value: '71/100',
        },
      ],
      Metascore: '71',
      imdbRating: '8.3',
      imdbVotes: '873,194',
      imdbID: 'tt0180093',
      Type: 'movie',
      DVD: '06 Dec 2015',
      BoxOffice: '$3,635,482',
      Production: 'N/A',
      Website: 'N/A',
      Response: 'True',
    },
    {
      Title: 'Fight Club',
      Year: '1999',
      Rated: 'R',
      Released: '15 Oct 1999',
      Runtime: '139 min',
      Genre: 'Drama',
      Director: 'David Fincher',
      Writer: 'Chuck Palahniuk, Jim Uhls',
      Actors: 'Brad Pitt, Edward Norton, Meat Loaf',
      Plot: 'An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.',
      Language: 'English',
      Country: 'Germany, United States',
      Awards: 'Nominated for 1 Oscar. 12 wins & 38 nominations total',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BODQ0OWJiMzktYjNlYi00MzcwLThlZWMtMzRkYTY4ZDgxNzgxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
      Ratings: [
        {
          Source: 'Internet Movie Database',
          Value: '8.8/10',
        },
        {
          Source: 'Rotten Tomatoes',
          Value: '79%',
        },
        {
          Source: 'Metacritic',
          Value: '67/100',
        },
      ],
      Metascore: '67',
      imdbRating: '8.8',
      imdbVotes: '2,224,281',
      imdbID: 'tt0137523',
      Type: 'movie',
      DVD: '19 Nov 2014',
      BoxOffice: '$37,030,102',
      Production: 'N/A',
      Website: 'N/A',
      Response: 'True',
    },
    {
      Title: 'Se7en',
      Year: '1995',
      Rated: 'R',
      Released: '22 Sep 1995',
      Runtime: '127 min',
      Genre: 'Crime, Drama, Mystery',
      Director: 'David Fincher',
      Writer: 'Andrew Kevin Walker',
      Actors: 'Morgan Freeman, Brad Pitt, Kevin Spacey',
      Plot: 'Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.',
      Language: 'English',
      Country: 'United States',
      Awards: 'Nominated for 1 Oscar. 29 wins & 43 nominations total',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
      Ratings: [
        {
          Source: 'Internet Movie Database',
          Value: '8.6/10',
        },
        {
          Source: 'Rotten Tomatoes',
          Value: '83%',
        },
        {
          Source: 'Metacritic',
          Value: '65/100',
        },
      ],
      Metascore: '65',
      imdbRating: '8.6',
      imdbVotes: '1,727,902',
      imdbID: 'tt0114369',
      Type: 'movie',
      DVD: '06 Jul 2010',
      BoxOffice: '$100,125,643',
      Production: 'N/A',
      Website: 'N/A',
      Response: 'True',
    },
    {
      Title: 'Vertigo',
      Year: '1958',
      Rated: 'PG',
      Released: '09 May 1963',
      Runtime: '128 min',
      Genre: 'Mystery, Romance, Thriller',
      Director: 'Alfred Hitchcock',
      Writer: 'Alec Coppel, Samuel A. Taylor, Pierre Boileau',
      Actors: 'James Stewart, Kim Novak, Barbara Bel Geddes',
      Plot: 'A former San Francisco police detective juggles wrestling with his personal demons and becoming obsessed with the hauntingly beautiful woman he has been hired to trail, who may be deeply disturbed.',
      Language: 'English',
      Country: 'United States',
      Awards: 'Nominated for 2 Oscars. 9 wins & 7 nominations total',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BYTE4ODEwZDUtNDFjOC00NjAxLWEzYTQtYTI1NGVmZmFlNjdiL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg',
      Ratings: [
        {
          Source: 'Internet Movie Database',
          Value: '8.3/10',
        },
        {
          Source: 'Rotten Tomatoes',
          Value: '92%',
        },
        {
          Source: 'Metacritic',
          Value: '100/100',
        },
      ],
      Metascore: '100',
      imdbRating: '8.3',
      imdbVotes: '415,454',
      imdbID: 'tt0052357',
      Type: 'movie',
      DVD: '02 Aug 2015',
      BoxOffice: '$7,705,225',
      Production: 'N/A',
      Website: 'N/A',
      Response: 'True',
    },
    {
      Title: 'Rear Window',
      Year: '1954',
      Rated: 'PG',
      Released: '01 Sep 1954',
      Runtime: '112 min',
      Genre: 'Mystery, Thriller',
      Director: 'Alfred Hitchcock',
      Writer: 'John Michael Hayes, Cornell Woolrich',
      Actors: 'James Stewart, Grace Kelly, Wendell Corey',
      Plot: 'A photographer in a wheelchair spies on his neighbors from his Greenwich Village courtyard apartment window, and becomes convinced one of them has committed murder, despite the skepticism of his fashion-model girlfriend.',
      Language: 'English',
      Country: 'United States',
      Awards: 'Nominated for 4 Oscars. 6 wins & 13 nominations total',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNGUxYWM3M2MtMGM3Mi00ZmRiLWE0NGQtZjE5ODI2OTJhNTU0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
      Ratings: [
        {
          Source: 'Internet Movie Database',
          Value: '8.5/10',
        },
        {
          Source: 'Rotten Tomatoes',
          Value: '98%',
        },
        {
          Source: 'Metacritic',
          Value: '100/100',
        },
      ],
      Metascore: '100',
      imdbRating: '8.5',
      imdbVotes: '507,559',
      imdbID: 'tt0047396',
      Type: 'movie',
      DVD: '18 Aug 2015',
      BoxOffice: '$36,764,313',
      Production: 'N/A',
      Website: 'N/A',
      Response: 'True',
    },
    {
      Title: 'The Wrestler',
      Year: '2008',
      Rated: 'R',
      Released: '30 Jan 2009',
      Runtime: '109 min',
      Genre: 'Drama, Sport',
      Director: 'Darren Aronofsky',
      Writer: 'Robert Siegel',
      Actors: 'Mickey Rourke, Marisa Tomei, Evan Rachel Wood',
      Plot: 'A faded professional wrestler must retire, but finds his quest for a new life outside the ring a dispiriting struggle.',
      Language: 'English',
      Country: 'United States, France',
      Awards: 'Nominated for 2 Oscars. 58 wins & 93 nominations total',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMTc5MjYyOTg4MF5BMl5BanBnXkFtZTcwNDc2MzQwMg@@._V1_SX300.jpg',
      Ratings: [
        {
          Source: 'Internet Movie Database',
          Value: '7.9/10',
        },
        {
          Source: 'Rotten Tomatoes',
          Value: '98%',
        },
        {
          Source: 'Metacritic',
          Value: '80/100',
        },
      ],
      Metascore: '80',
      imdbRating: '7.9',
      imdbVotes: '314,930',
      imdbID: 'tt1125849',
      Type: 'movie',
      DVD: '12 Dec 2015',
      BoxOffice: '$26,238,243',
      Production: 'N/A',
      Website: 'N/A',
      Response: 'True',
    },
    {
      Title: 'Pi',
      Year: '1998',
      Rated: 'R',
      Released: '10 Jul 1998',
      Runtime: '84 min',
      Genre: 'Drama, Horror, Mystery',
      Director: 'Darren Aronofsky',
      Writer: 'Darren Aronofsky, Sean Gullette, Eric Watson',
      Actors: 'Sean Gullette, Mark Margolis, Ben Shenkman',
      Plot: 'A paranoid mathematician searches for a key number that will unlock the universal patterns found in nature.',
      Language: 'English, Hebrew',
      Country: 'United States',
      Awards: '8 wins & 12 nominations',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMTk3MThhNGEtY2E4NS00MWMwLTg4MzQtMTk4ZTcwYzRlNDNiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg',
      Ratings: [
        {
          Source: 'Internet Movie Database',
          Value: '7.3/10',
        },
        {
          Source: 'Rotten Tomatoes',
          Value: '88%',
        },
        {
          Source: 'Metacritic',
          Value: '72/100',
        },
      ],
      Metascore: '72',
      imdbRating: '7.3',
      imdbVotes: '184,085',
      imdbID: 'tt0138704',
      Type: 'movie',
      DVD: '07 Jan 2014',
      BoxOffice: '$3,221,152',
      Production: 'N/A',
      Website: 'N/A',
      Response: 'True',
    },
    {
      Title: 'The Social Network',
      Year: '2010',
      Rated: 'PG-13',
      Released: '01 Oct 2010',
      Runtime: '120 min',
      Genre: 'Biography, Drama',
      Director: 'David Fincher',
      Writer: 'Aaron Sorkin, Ben Mezrich',
      Actors: 'Jesse Eisenberg, Andrew Garfield, Justin Timberlake',
      Plot: 'As Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook, he is sued by the twins who claimed he stole their idea and by the co-founder who was later squeezed out of the business.',
      Language: 'English, French',
      Country: 'United States',
      Awards: 'Won 3 Oscars. 173 wins & 186 nominations total',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BOGUyZDUxZjEtMmIzMC00MzlmLTg4MGItZWJmMzBhZjE0Mjc1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
      Ratings: [
        {
          Source: 'Internet Movie Database',
          Value: '7.8/10',
        },
        {
          Source: 'Rotten Tomatoes',
          Value: '96%',
        },
        {
          Source: 'Metacritic',
          Value: '95/100',
        },
      ],
      Metascore: '95',
      imdbRating: '7.8',
      imdbVotes: '735,077',
      imdbID: 'tt1285016',
      Type: 'movie',
      DVD: '05 Jun 2012',
      BoxOffice: '$96,962,694',
      Production: 'N/A',
      Website: 'N/A',
      Response: 'True',
    },
    {
      Title: 'Gone Girl',
      Year: '2014',
      Rated: 'R',
      Released: '03 Oct 2014',
      Runtime: '149 min',
      Genre: 'Drama, Mystery, Thriller',
      Director: 'David Fincher',
      Writer: 'Gillian Flynn',
      Actors: 'Ben Affleck, Rosamund Pike, Neil Patrick Harris',
      Plot: "With his wife's disappearance having become the focus of an intense media circus, a man sees the spotlight turned on him when it's suspected that he may not be innocent.",
      Language: 'English',
      Country: 'United States',
      Awards: 'Nominated for 1 Oscar. 64 wins & 188 nominations total',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMTk0MDQ3MzAzOV5BMl5BanBnXkFtZTgwNzU1NzE3MjE@._V1_SX300.jpg',
      Ratings: [
        {
          Source: 'Internet Movie Database',
          Value: '8.1/10',
        },
        {
          Source: 'Rotten Tomatoes',
          Value: '87%',
        },
        {
          Source: 'Metacritic',
          Value: '79/100',
        },
      ],
      Metascore: '79',
      imdbRating: '8.1',
      imdbVotes: '1,027,381',
      imdbID: 'tt2267998',
      Type: 'movie',
      DVD: '01 Jun 2016',
      BoxOffice: '$167,767,189',
      Production: 'N/A',
      Website: 'N/A',
      Response: 'True',
    },
  ]

  const books = [
    {
      Title: 'A Treatise of Human Nature',
      Author: 'David Hume',
      Year: '1739',
      Subject: 'Philosophy of Mind, Epistemology, Ethics',
      Category: 'Philosophy',
      Summary:
        'A foundational text in modern philosophy, Hume critically examines human nature, introducing the idea of empiricism and challenging the prevailing views of causation and personal identity.',
    },
    {
      Title: 'Enquiry Concerning Human Understanding',
      Author: 'David Hume',
      Year: '1748',
      Subject: 'Epistemology, Philosophy of Religion',
      Category: 'Philosophy',
      Summary:
        'A more accessible rendition of his earlier work, this book delves into the nature and limits of human understanding, emphasizing empirical knowledge.',
    },
    {
      Title: 'Critique of Pure Reason',
      Author: 'Immanuel Kant',
      Year: '1781',
      Subject: 'Epistemology, Metaphysics',
      Category: 'Philosophy',
      Summary:
        "Kant's magnum opus, where he seeks to determine the limits and scope of pure reason, introducing the concepts of synthetic a priori judgments and the transcendental.",
    },
    {
      Title: 'Critique of Practical Reason',
      Author: 'Immanuel Kant',
      Year: '1788',
      Subject: 'Ethics, Moral Philosophy',
      Category: 'Philosophy',
      Summary:
        'In this work, Kant delves into moral philosophy, presenting his views on the nature of duty and the categorical imperative.',
    },
    {
      Title: 'Phenomenology of Spirit',
      Author: 'Georg Wilhelm Friedrich Hegel',
      Year: '1807',
      Subject: 'Abstract Aspects of Reality',
      Category: 'Philosophy',
      Summary:
        "Hegel's exploration of the development of consciousness and the spirit, culminating in Absolute Knowing, tracing the path of the self's relationship with itself and its surroundings.",
    },
    {
      Title: 'Science of Logic',
      Author: 'Georg Wilhelm Friedrich Hegel',
      Year: '1812',
      Subject: 'Logic, Metaphysics',
      Category: 'Philosophy',
      Summary:
        "A complex work detailing Hegel's logic, challenging traditional views of logic and laying out the fundamentals of his own dialectical method.",
    },
    {
      Title: 'Thus Spoke Zarathustra',
      Author: 'Friedrich Nietzsche',
      Year: '1883',
      Subject: 'Existentialism, Overman Concept',
      Category: 'Philosophy',
      Summary:
        'A philosophical novel wherein the prophet Zarathustra proclaims the death of God and introduces the concept of the Übermensch (Overman) as a goal for humanity.',
    },
    {
      Title: 'Beyond Good and Evil',
      Author: 'Friedrich Nietzsche',
      Year: '1886',
      Subject: 'Ethics, Critique of Traditional European Morality',
      Category: 'Philosophy',
      Summary:
        'Nietzsche critiques past philosophers and their moral prejudices, while positing his own philosophical ideas and perspectives on morality and truth.',
    },
    {
      Title: 'Crime and Punishment',
      Author: 'Fyodor Dostoevsky',
      Year: '1866',
      Subject: 'Moral Dilemmas, Crime, Redemption',
      Category: 'Literature',
      Summary:
        'The gripping tale of a former student, Raskolnikov, who commits a heinous crime and then grapples with guilt, morality, and redemption.',
    },
    {
      Title: 'The Brothers Karamazov',
      Author: 'Fyodor Dostoevsky',
      Year: '1880',
      Subject: 'Faith, Doubt, Morality',
      Category: 'Literature',
      Summary:
        'A profound exploration of faith, doubt, and morality through the lives of the three Karamazov brothers and the murder of their debauched father.',
    },
  ]

  return (
    <>
      <PageTitle>Books</PageTitle>
      <div className="mb-4 rounded-xl border border-gray-100 bg-gray-50 p-5 dark:border-gray-700 dark:bg-gray-800">
        <ol className="divider-gray-200 divide-y dark:divide-gray-700">
          {books.map((book) => {
            return (
              <li key={book.Title}>
                <Link
                  className="block items-center p-3 hover:bg-gray-100 dark:hover:bg-gray-700 sm:flex"
                  href={'www.google.com'}
                >
                  <div className="text-gray-600 dark:text-gray-400">
                    <div className="text-base font-normal">
                      <span className="font-medium text-gray-900 dark:text-white">
                        <b>{book.Title}</b>
                      </span>
                      <br />
                    </div>
                    <div className="text-sm font-normal">{book.Subject}</div>
                    <div>
                      <span className="inline-flex items-center text-xs font-normal text-yellow-500">
                        {`${book.Author} ${book.Year}`}
                      </span>
                      <span className="inline-flex items-center text-xs font-normal text-gray-500">
                        {`${book.Summary}`}
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
            )
          })}
        </ol>
      </div>

      <PageTitle>Movies</PageTitle>
      <div className="mb-3.5 rounded-xl border border-gray-100 bg-gray-50 p-5 dark:border-gray-700 dark:bg-gray-800">
        <ol className="divider-gray-200 divide-y dark:divide-gray-700">
          {movies.map((filmData) => {
            return (
              <li key={filmData.imdbID}>
                <div className="block items-center p-3 hover:bg-gray-100 dark:hover:bg-gray-700 sm:flex">
                  <img
                    className="mb-3 mr-3 h-12 w-12 rounded-full sm:mb-0"
                    src={filmData.Poster}
                    alt={filmData.Title}
                  />
                  <div className="text-gray-600 dark:text-gray-400">
                    <div className="text-base font-normal">
                      <span className="font-medium text-gray-900 dark:text-white">
                        <b>{filmData.Title}</b>
                      </span>
                      <br />
                    </div>
                    <div className="text-sm font-normal">{filmData.Genre}</div>
                    <div>
                      <span className="inline-flex items-center text-xs font-normal text-yellow-500">
                        {`${filmData.Director} ${filmData.Year}`}
                      </span>

                      <span className="text-sm font-normal text-gray-500 mt-1.5">{` ${filmData.Actors}`}</span>
                    </div>
                  </div>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </>
  )
}
