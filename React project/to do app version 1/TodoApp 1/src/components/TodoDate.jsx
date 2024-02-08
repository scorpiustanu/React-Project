import { useEffect, useState } from "react";

function TodoDate() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  });

  return (
    <center>
      <h1>
        current time - {time.toLocaleDateString()}-{time.toLocaleTimeString()}
      </h1>
    </center>
  );
}
export default TodoDate;
