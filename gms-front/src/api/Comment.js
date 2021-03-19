export default class Comment {
  static push(pid, name, content) {
    const url = `http://localhost:8765/comments/add.json`;
    const data = { pid: pid, author: name, body: content };
    const formData = new FormData();
    Object.entries(data).forEach(({ key, value }) =>
      formData.append(key, value)
    );
    const params = {
      body: formData,
      method: "POST",
    };
    return fetch(url, params).then((res) => res.json());
  }
}
