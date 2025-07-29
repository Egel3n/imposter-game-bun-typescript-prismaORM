import {db} from "../db.ts"
import {Room} from "./Room.ts"
import {v4 as uuidv4} from "uuid";

export class RoomManager {
    private static rooms: Map<string, Room> = new Map();

    static async createRoom(name: string, wordList:string[], winRatio:number): Promise<Room> {
        const id = uuidv4();

        //create room in memory
        const room = new Room(id,name,wordList,winRatio);
        this.rooms.set(id, room);

        //save room into db
        try{
            await db.room.create({data:{
                    id,
                    name,
                    wordList,
                    winRatio
                }})

        }catch(err){
            console.error("Error creating room", err);
        }
        return room;
    }

    static getRoom(id:string):Room | undefined {
        return this.rooms.get(id)
    }

    static removeRoom(id:string):void {
        this.rooms.delete(id)
    }

    static getAllRooms():Room[] {
        return Array.from(this.rooms.values())
    }
}