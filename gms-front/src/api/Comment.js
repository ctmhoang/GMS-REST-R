export default class Comment {
  static push(pid, name, content) {
    const formdata = new FormData();
    formdata.append("pid", pid);
    formdata.append("author", name);
    formdata.append("body", content);

    const requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    return fetch(
      "http://localhost:8765/comments/add.json",
      requestOptions
    ).then((response) => response.json());
  }
  static num() {
    return fetch("http://localhost:8765/comments/count.json").then((response) =>
      response.json()
    );
  }
  static fetch() {
    return fetch("http://localhost:8765/comments.json").then((response) =>
      response.json()
    );
  }
  static del(id) {
    var requestOptions = {
      method: "POST",
      redirect: "follow",
      credentials: "include",
    };

    return fetch(
      `http://localhost:8765/comments/delete/${id}.json`,
      requestOptions
    ).then((response) => response.json());
  }
}
