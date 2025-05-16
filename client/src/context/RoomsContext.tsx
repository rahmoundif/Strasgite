import { createContext, useContext, useMemo } from "react";
import { useTranslation } from "../context/TranslationContext";
import roomsData from "../data/roomsData.json";

//Typage d'une chambre
export interface Room {
  id: number;
  images: string[];
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

// creation du context
const RoomsContext = createContext<RoomsContextType | undefined>(undefined);

export const RoomsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { text_translation } = useTranslation();

  const rooms = useMemo<Room[]>(
    () =>
      roomsData.map((room) => ({
        ...room,
        images: room.images || [],
        description: text_translation(`room_${room.id}_description`),
        price: text_translation(`room_${room.id}_price`),
      })),
    [text_translation],
  );

  return (
    <RoomsContext.Provider value={{ rooms }}>{children}</RoomsContext.Provider>
  );
};

// Perso hook useRooms
export const useRooms = (): Room[] => {
  const context = useContext(RoomsContext);
  if (!context)
    throw new Error("useRooms doit être utilisé dans un RoomsProvider");
  return context.rooms;
};
