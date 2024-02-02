import AddBook from "./books/components/AddBook";
import ListBooks from "./books/components/listBooks";

export default function Home() {
  return (
    <div className="space-y-4 p-52 min-h-screen">
      <div className="flex justify-between">
        <h1 className="text-lg font-bold">My list of books</h1>
      </div>

      <div className="flex justify-between space-x-12">
        <ListBooks />
        <AddBook />
      </div>
    </div>
  );
}
