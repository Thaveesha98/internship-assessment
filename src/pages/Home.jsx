import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Pending,Fulfilled,Rejected} from '../constants'
import {
  fetchCharacters,
  setPage,
} from "../features/characters/characterSlice";
import CharacterCard from "../components/CharacterCard";
import Pagination from "../components/Pagination";
import Footer from "../components/Footer";

const Home = () => {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters.data);
  const characterStatus = useSelector((state) => state.characters.status);
  const error = useSelector((state) => state.characters.error);
  const info = useSelector((state) => state.characters.info);
  const page = useSelector((state) => state.characters.page);

  
  useEffect(() => {
    dispatch(fetchCharacters(page));
  }, [dispatch, page]);

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > (info?.pages)) return;
    dispatch(setPage(newPage));
  };

  let content;

  if (characterStatus === Pending) {
    content = <p>Loading...</p>;
  } else if (characterStatus === Fulfilled) {
    content = (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {characters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      </>
    );
  } else if (characterStatus === Rejected) {
    content = <p>Error: {error}</p>;
  }

  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Rick and Morty Characters
        </h1>
        {content}
      </div>
      <div className="flex justify-center max-sm:justify-end m-5 max-sm:w-[80%]">
        <Pagination
          currentPage={page}
          totalPages={info?.pages || 1}
          onPageChange={handlePageChange}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
