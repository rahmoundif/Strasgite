import { createContext, useContext } from "react";
import roomsData from "../data/roomsData.json";

//Typage d'une chambre
export interface Room {
  id: number;
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

//typage du tableau Json complet
interface RoomsContextType {
  rooms: Room[];
}

// creation du context
const RoomsContext = createContext<RoomsContextType>({ rooms: [] });

// creation du provider afin de consommer le context avec securité
export const RoomsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <RoomsContext.Provider
      value={{
        rooms: roomsData,
      }}
    >
      {children}
    </RoomsContext.Provider>
  );
};

// Perso hook useRooms
export const useRooms = (): Room[] => {
  const context = useContext(RoomsContext);
  if (!context) {
    throw new Error("useRooms must be used within a RoomProvider");
  }
  return context.rooms;
};
