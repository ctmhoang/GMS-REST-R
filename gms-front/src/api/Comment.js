export default class Comment {
  static push(pid, name, content) {
    const url = `http://localhost:8765/comments/add.json`;
    const data = { pid: pid, author: name, body: content };
    const params = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "content-type": "application/json; charset=UTF-8",
      },
      body: data,
      method: "POST",
    };
    fetch(url, params).then((res) => res.json());
  }
}
