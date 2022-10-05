import React from "react";

const SearchResult = ({ results }) => {
  return (
    <div className="mx-auto  w-full px-3 sm:pl-[5%] md:pl-[14%]  lg:pl-52">
      <p className="text-gray-600 text-md mb-5 mt-3">
        About {results.searchInformation?.formattedTotalResults}
        results ({results.searchInformation?.searchTime} seconds)
      </p>

      {results.items?.map((result) => (
        <div key={result.link} className="max-w-xl mb-8">
          <div className='group'>
            <a href={result.link} className="text-sml">
              {result.formattedUrl}
            </a>
            <a href={result.link}>
                <h2 className='truncate text-xl group-hover:underline  text-blue-800 font-medium '>
                    {result.title}
                </h2>
            </a>
          </div>
          <p className='line-clamp-3'>{result.snippet}</p>
        </div>
      ))}
    
    </div>
  );
};

export default SearchResult;
