"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import Button from "@/app/components/Button";
import TextField from "@/app/components/TextField";
import React from "react";
import { useBookStore } from "@/app/store/book";
import { v4 as uuidv4 } from "uuid";

type Inputs = {
  title: string;
  author: string;
  genre: string;
};

const AddBook = () => {
  const addBook = useBookStore((state) => state.addBook);
  const updateBook = useBookStore((state) => state.updateBook);
  const bookToUpdate = useBookStore((state) => state.book);
  const isEditing = useBookStore((state) => state.isEditing);
  const setIsEditing = useBookStore((state) => state.setIsEditing);
  const clearSelectBook = useBookStore((state) => state.clearSelectBook);

  const { register, handleSubmit, reset } = useForm<Inputs>({
    values: bookToUpdate,
  });

  const resetForm = () => {
    clearSelectBook();
    setIsEditing(false);
    reset();
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const book = {
      ...data,
      id: isEditing ? bookToUpdate.id : uuidv4(),
    };

    isEditing ? updateBook(book) : addBook(book);

    resetForm();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 flex flex-col w-full"
    >
      <div>
        <TextField
          label="title"
          placeholder="Add a title"
          {...register("title")}
        />
      </div>
      <div>
        <TextField
          label="author"
          placeholder="Add an author"
          {...register("author")}
        />
      </div>
      <div>
        <TextField
          label="genre"
          placeholder="Add a genre"
          {...register("genre")}
        />
      </div>

      <Button className="bg-white text-black" type="submit">
        Send
      </Button>
    </form>
  );
};

export default AddBook;
