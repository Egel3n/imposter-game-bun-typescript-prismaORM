import {describe, expect, it} from "bun:test"
import {Player} from "../src/core/Player.ts";

describe("Player Class",()=> {
    const fakeSocket = {} as WebSocket;

    it("should initialize with correct values", ()=> {
        const player = new Player("1","Ahmet","127.0.0.1",fakeSocket);

        expect(player).toBeInstanceOf(Player);
        expect(player.name).toBe("Ahmet");
        expect(player.score).toBe(0);
        expect(player.isImposter).toBe(false);
        expect(player.isReady).toBe(false);
    })

    it("should track readiness", ()=> {
        const player = new Player("2","Ahmet","127.0.0.1",fakeSocket);
        player.isReady = true;
        expect(player.isReady).toBe(true);
    });

    it("should allow voting", ()=> {
        const player = new Player("3","Ahmet","127.0.0.1",fakeSocket);
        player.vote = "some-id";
        expect(player.vote).toBe("some-id");
    })
})