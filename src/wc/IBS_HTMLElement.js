export class IBS_HTMLElement extends HTMLElement {
    constructor()
    {
        super();

        this.debugMessage();

        this.debug = true;

    }

    debugMessage(message)
    {
        if (this.debug)
        {
            console.log(message);
        }

    }
}
