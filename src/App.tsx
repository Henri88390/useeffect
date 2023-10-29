import "./App.css";
import { MoodEmoji } from "./components/MoodEmoji/MoodEmoji";
import { MoodContext } from "./hooks/contexts/MoodContext";
import { useDisplayName } from "./hooks/custom/useDisplayName";
import { moods } from "./models/enums/moods";

const App = () => {
  const displayName = useDisplayName();
  return (
    <MoodContext.Provider value={moods.happy}>
      <MoodEmoji />
      {displayName}
    </MoodContext.Provider>
  );
};

export default App;
