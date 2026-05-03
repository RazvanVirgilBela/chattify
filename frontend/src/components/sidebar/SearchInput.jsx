import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();

    const query = search.trim();
    if (!query) return;

    if (query.length < 3) {
      return toast.error("Search term must be at least 3 characters long");
    }

    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(query.toLowerCase()),
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error("No user has been found");
    }
  };

  return (
    <form className="flex items-center gap-2" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered rounded-full w-full"
        value={search} // ✅ controlled input
        onChange={(e) => setSearch(e.target.value)} // ✅ updates state
      />

      <button type="submit" className="btn btn-circle btn-primary">
        <IoSearchSharp className="w-5 h-5" />
      </button>
    </form>
  );
};

export default SearchInput;
