
import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Maps");
    }

    async getHtml() {
        return `
            <h1>Maps</h1>
            <p>You are viewing the maps!</p>
        `;
    }
}