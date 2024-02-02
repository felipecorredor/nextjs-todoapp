"use client";

import React from "react";
import { Book } from "../types/book";

import { useBookStore } from "@/app/store/book";

const ListBooks = () => {
  const books = useBookStore((state) => state.books);
  const removeAllBooks = useBookStore((state) => state.removeAllBooks);
  const initialBooks = useBookStore((state) => state.initialBooks);
  const deleteBook = useBookStore((state) => state.deleteBook);
  const selectBook = useBookStore((state) => state.selectBook);
  const setIsEditing = useBookStore((state) => state.setIsEditing);

  const handleEditBook = (book: Book) => {
    selectBook(book);
    setIsEditing(true);
  };

  return (
    <div className="flex flex-col w-full space-y-4">
      {books.map((book: Book) => (
        <div
          key={book.id}
          className="flex px-4 py-2 justify-between items-center border rounded-md hover:bg-neutral-800"
        >
          <div>
            <p className="font-semibold">{book.title}</p>
            <div className="flex space-x-1 text-sm text-gray-500">
              <p>{book.author}</p>
              <p>-</p>
              <p>{book.genre}</p>
            </div>
          </div>

          <div className="space-x-4">
            <button
              className="bg-white text-black px-2 rounded-md h-9"
              onClick={() => handleEditBook(book)}
            >
              Update
            </button>

            <button
              className="bg-red-500 text-white px-2 rounded-md h-9"
              onClick={() => deleteBook(book.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      <div className="space-x-4">
        {!books.length && (
          <button
            className="bg-white text-black px-2 rounded-md h-9"
            onClick={initialBooks}
          >
            Initial state
          </button>
        )}

        {!!books.length && (
          <button
            className="bg-red-500 text-white px-2 rounded-md h-9"
            onClick={removeAllBooks}
          >
            Delete list
          </button>
        )}
      </div>
    </div>
  );
};

export default ListBooks;
