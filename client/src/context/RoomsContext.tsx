import { createContext, useContext } from "react";
import roomsData from "../data/roomsData.json";

interface Room {
  key: number;
  imageUrl: string;
  title: string;
  description: string;
  price: string | number;
  kids: number;
  singleBed: boolean;
  sb_n: number;
  doubleBed: boolean;
  db_n: number;
  pmrRoom: boolean;
}

interface RoomsContextType {
  rooms: Room[];
}

const rooms: Room[] = roomsData as Room[];

// creation du context
const RoomsContext = createContext<RoomsContextType | undefined>(undefined);

// creation du provider afin de consommer le context avec securité
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
    throw new Error("Error");
  }
  return context;
};

export default RoomsContext;
