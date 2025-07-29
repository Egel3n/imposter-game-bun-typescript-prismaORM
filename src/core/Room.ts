import {Player} from "./Player";

export class Room {
    id:string;
    name:string;
    wordList:string[];
    usedWords:string[]=[];
    players:Player[] = [];
    currentWord: string | null = null;
    imposterId:string | null = null;
    round: number = 0;
    winRatio: number;

    constructor(id:string, name:string, wordList:string[], winRatio:number) {
        this.id = id;
        this.name = name;
        this.wordList = wordList;
        this.winRatio = winRatio;
    }

    addPlayer(player:Player) {
        this.players.push(player);
    }

    removePlayer(player:Player) {
        this.players = this.players.filter((p) => p.id !== player.id);
    }

    getPlayer(id:string): Player | undefined {
        return this.players.find((player) => player.id === id);
    }

    isGameOver(): boolean {
        return (this.usedWords.length / this.wordList.length) >= (this.winRatio/100);
    }
}