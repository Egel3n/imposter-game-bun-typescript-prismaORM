export class Player {
    id: string;
    name: string;
    ip: string;
    score: number =0;
    isReady: boolean = false;
    isImposter: boolean = false;
    vote?: string;
    socket: WebSocket;

    constructor(id: string,name: string,ip:string,socket:WebSocket){
        this.id = id;
        this.name = name;
        this.socket = socket;
        this.ip = ip;
    }
}

