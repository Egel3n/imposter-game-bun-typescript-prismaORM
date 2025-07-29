import {describe, it, expect} from "bun:test";
import {RoomManager} from "../src/core/RoomManager.ts";

describe("RoomManager Class",()=> {

    it("Should create & retrieve a room", async () => {
        const room = await RoomManager.createRoom("living room",["word1","word2"],50);
        expect(RoomManager.getRoom(room.id)).toBe(room);
    })

    it("should return all rooms", async () => {
        await RoomManager.createRoom("living room",["word1","word2"],50);
        await RoomManager.createRoom("bathroom",["word1","word2"],50);
        await RoomManager.createRoom("vroom",["word1","word2"],50);
        const rooms = await RoomManager.getAllRooms();
        expect(rooms.length).toBeGreaterThan(3);
        expect(rooms[0].name).toBe("living room");
    })

    it("should remove room", async () => {
        const room = await RoomManager.createRoom("living room",["word1"],50);
        RoomManager.removeRoom(room.id);
        expect(RoomManager.getRoom(room.id)).toBe(undefined);
    })
})