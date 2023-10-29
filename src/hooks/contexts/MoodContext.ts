import { createContext } from "react";
import { moods } from "../../models/enums/moods";

export const MoodContext = createContext<moods | undefined>(undefined);
