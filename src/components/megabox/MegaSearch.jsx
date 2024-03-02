import { useEffect, useState } from "react";
import { MegaSearchForm } from "../styled/megaboxStyle";
import { FaSearch } from "react-icons/fa";

const MegaSearch = ({ onSearch }) => {
  const [text, setText] = useState("");

  const changeInput = (e) => {
    const { value } = e.target;
    setText(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onSearch(text.trim());
  };

  useEffect(() => {
    onSearch(text);
  }, []);

  return (
    <MegaSearchForm onSubmit={onSubmit}>
      <input type="text" placeholder="영화명을 검색하세요" value={text} onChange={changeInput} />
      <button type="submit">
        <i>
          <FaSearch />
        </i>
      </button>
    </MegaSearchForm>
  );
};

export default MegaSearch;
