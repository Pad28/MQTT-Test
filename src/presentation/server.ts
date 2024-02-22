import mosca from 'mosca';

interface ServerOptions {
    portBrokerMqtt: number;
}

export class Server {

    private readonly portBrokerMqtt: number;

    constructor(options: ServerOptions) {
        const { portBrokerMqtt } = options;
        this.portBrokerMqtt = portBrokerMqtt;
    }

    public async start() {
        const borker = new mosca.Server({ port: this.portBrokerMqtt });
        borker.on('ready', () => {
            console.log('Broker Ok');
        });
    }
}