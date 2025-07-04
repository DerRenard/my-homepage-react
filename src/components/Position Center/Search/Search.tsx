import { useRef } from "react";
import "./Search.scss";

export default function Search() {
  const formInput = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const query = formInput.current?.value;
        // console.dir(formInput.current.value);
        if (query) {
          console.dir(query);
          window.location.href = `https://www.google.com/search?q=${encodeURIComponent(
            query
          )}`;
        }
      }}
      className="search"
    >
      <div id="inputWrapper">
        <input
          type="text"
          id="input"
          placeholder="Type here to search"
          ref={formInput}
        />
      </div>
      <button type="submit" id="submit">
        <img src="/submit.svg" alt="sub" />
      </button>
    </form>
  );
}
