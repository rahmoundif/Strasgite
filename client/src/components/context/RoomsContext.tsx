import { createContext, useContext } from "react";
import rooms from "../../data/rooms.json";

interface Room {
  key: number;
  imageUrl: string;
  title: string;
  description: string;
  price: string | number;
}

interface RoomsContextType {
  rooms: Room[];
}

// creation du context
const RoomsContext = createContext<RoomsContextType | undefined>(undefined);

// creation du provider afin de consommer le context
export const RoomsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <RoomsContext.Provider value={{ rooms }}>{children}</RoomsContext.Provider>
  );
};

// initialisation du hook useRooms
export const useRooms = (): RoomsContextType => {
  const context = useContext(RoomsContext);
  if (!context) {
    throw new Error("useRooms must be used within a RoomsProvider");
  }
  return context;
};

export default RoomsContext;
