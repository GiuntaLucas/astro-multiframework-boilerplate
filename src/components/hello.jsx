import { useEffect, useState } from "react";
import { helloSubject } from "../stores/hello.store";

const ReactHello = ({ name }) => {
  const [yoFrom, setYoFrom] = useState("");
  useEffect(() => {
    helloSubject.subscribe((x) => setYoFrom(x));
  });
  function yo() {
    helloSubject.next("Yo from React");
  }

  return (
    <>
      <h2 className="text-blue-500">Hello {name}</h2>
      <button onClick={yo}>Yo</button>
      <p>{yoFrom}</p>
    </>
  );
};

export default ReactHello;
