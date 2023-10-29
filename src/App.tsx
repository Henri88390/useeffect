import "./App.css";
import { MoodEmoji } from "./components/MoodEmoji/MoodEmoji";
import { MoodContext } from "./hooks/contexts/MoodContext";
import { moods } from "./models/enums/moods";

const App = () => {
  return (
    <MoodContext.Provider value={moods.happy}>
      <MoodEmoji />
    </MoodContext.Provider>
  );
};

export default App;
