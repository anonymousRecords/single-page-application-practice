import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.postId = params.id;
    this.setTitle('Viewing Posts');
  }

  async getHtml() {
    console.log(this.params.id);
    return `
        <h1>개별 포스트</h1>
    `;
  }
}