import { useContext } from "react";
import { MoodContext } from "../../hooks/contexts/MoodContext";

export const MoodEmoji = () => {
  const mood = useContext(MoodContext);
  return <p>{mood}</p>;
};
