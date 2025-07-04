import { useEffect, useState } from "react";
import "./Clock.scss";

export default function Clock() {
  const [time, setTime] = useState(new Date());
  const [formattedTime, setFormattedTime] = useState<string>();
  const [formattedDate, setFormattedDate] = useState<string>();

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 10000); // обновляем каждую секунду

    return () => clearInterval(timer); // очищаем при размонтировании
  }, []);

  useEffect(() => {
    // Форматируем время: часы и минуты с ведущим нулём при необходимости
    const hours = String(time.getHours()).padStart(2, "0");
    const minutes = String(time.getMinutes()).padStart(2, "0");
    // const formattedTime = `${hours} ${minutes}`;
    setFormattedTime(`${hours} ${minutes}`);

    // Форматируем дату
    const weekday = time.toLocaleDateString("en-US", { weekday: "short" }); // Fri
    const day = String(time.getDate()).padStart(2, "0"); // 12
    const month = String(time.getMonth() + 1).padStart(2, "0"); // 05
    // const formattedDate = `${weekday}, ${day}.${month}`;
    setFormattedDate(`${weekday}, ${month}.${day}`);
  }, [time]);

  return (
    <div className="clock">
      <div className="time">
        <p>{formattedTime}</p>
      </div>
      <data className="date">
        <p>{formattedDate}</p>
      </data>
    </div>
  );
}
