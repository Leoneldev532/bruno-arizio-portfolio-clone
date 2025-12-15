import { createContext } from "react";
import type { MyContextType } from "../../lib/utils";


export const MyContext = createContext<MyContextType | null>(null);
