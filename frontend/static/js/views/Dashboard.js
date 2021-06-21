
import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
            <h1>Welcome back!</h1>
            <p>
                Sapien helps you create mindmaps for better, starting with the reading experience. 
            </p>
            <p>
                <a href="/maps" data-link>View recent maps</a>.
            </p>
        `;
    }
}