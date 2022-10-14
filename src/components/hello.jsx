import { useEffect, useState } from "react";
import { helloSubject } from "../stores/hello.store";
import { searchSubject } from '../stores/search.store';

const ReactHello = ({ name }) => {
  const [yoFrom, setYoFrom] = useState("");
  const [search, setSearch] = useState("");
  useEffect(() => {
    helloSubject.subscribe((x) => setYoFrom(x));
    searchSubject.subscribe((x) => setSearch(x));
  });
  function yo() {
    helloSubject.next("Yo from React click");
  }

  return (
    <>
      <h2 className="text-blue-500">Hello {name}</h2>
      <button onClick={yo}>Yo</button>
      <p>{yoFrom}</p>
      <p>{search}</p>
    </>
  );
};

export default ReactHello;
