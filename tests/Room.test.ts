import {Room} from "../src/core/Room.ts"
import {Player} from "../src/core/Player.ts"

import {describe,it,expect} from "bun:test";

describe("Room Class", () => {

    const fakeSocket = {} as WebSocket;

    it("should initialize with correct values", async () => {
        const room = new Room("1","living room",["word","word2"],50);
        expect(room.name).toBe("living room");
        expect(room.wordList).toEqual(["word","word2"]);
        expect(room.usedWords).toEqual([]);
        expect(room.currentWord).toBe(null);
        expect(room.players).toEqual([]);
    })

    it("should add new player & retrieve it", async () => {
        const room = new Room("2","living room",["word","word2"],50);
        const player = new Player("1","Ahmet","127.0.0.1",fakeSocket);

        room.addPlayer(player);
        expect(room.getPlayer(player.id)).not.toBe(undefined);
    })

    it("should remove player", async () => {
        const room = new Room("3","living room",["word","word2"],50);
        const player = new Player("2","Ahmet","127.0.0.1",fakeSocket);
        room.addPlayer(player);
        room.removePlayer(player);
        expect(room.getPlayer(player.id)).toBe(undefined);
    })

    it("should check if the game is over", async () => {
        const room = new Room("4","living room",["word","word2","word3"],50);
        room.usedWords = ["word","word2"];
        expect(room.isGameOver()).toBe(true);

        const room2 = new Room("5","living room",["word","word2","word3"],50);
        room2.usedWords = ["word"];
        expect(room2.isGameOver()).toBe(false);
    })

})