import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
import { Book } from "../books/types/book";

const initialBooks: Book[] = [
  {
    id: uuidv4(),
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Fiction",
  },
  {
    id: uuidv4(),
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Classics",
  },
  {
    id: uuidv4(),
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
  },
];

interface BookStore {
  books: Book[];
  book: Book;
  isEditing: boolean;
  addBook: (book: Book) => void;
  setIsEditing: (isEditing: boolean) => void;
  removeAllBooks: () => void;
  deleteBook: (id: string) => void;
  initialBooks: () => void;
  selectBook: (book: Book) => void;
  updateBook: (book: Book) => void;
  clearSelectBook: () => void;
}

const initialValues = {
  id: "",
  title: "",
  author: "",
  genre: "",
};

export const useBookStore = create(
  (set: (fn: (state: BookStore) => void) => void) => ({
    books: initialBooks,
    isEditing: false,
    book: { ...initialValues },
    addBook: (book: Book) =>
      set((state) => ({ books: [...state.books, book] })),
    removeAllBooks: () => set(() => ({ books: [] })),
    deleteBook: (id: string) =>
      set((state) => ({ books: state.books.filter((book) => book.id !== id) })),
    initialBooks: () => set(() => ({ books: initialBooks })),
    selectBook: (book: Book) => set(() => ({ book })),
    clearSelectBook: () => set(() => ({ book: { ...initialValues } })),
    setIsEditing: (isEditing) => set(() => ({ isEditing: isEditing })),
    updateBook: (bookUpdate: Book) =>
      set((state) => ({
        books: state.books.map((book) =>
          book.id === bookUpdate.id ? { ...bookUpdate } : book
        ),
      })),
  })
);
