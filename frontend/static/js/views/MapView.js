import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.mapId = params.id;
        this.setTitle("Viewing Map");
    }

    async getHtml() {
        return `
            <h1>Map</h1>
            <p>This is map #${this.mapId}.</p>
        `;
    }
}