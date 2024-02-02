import AddBook from "./books/components/AddBook";
import ListBooks from "./books/components/listBooks";

export default function Home() {
  return (
    <div className="max-w-7xl m-auto space-y-4 pt-32 px-24 xl:px-0 min-h-screen">
      <div className="flex justify-between">
        <h1 className="text-lg font-bold">My list of books</h1>
      </div>

      <div className="xl:flex justify-between xl:space-x-12 space-y-12 xl:space-y-0">
        <ListBooks />
        <AddBook />
      </div>
    </div>
  );
}
