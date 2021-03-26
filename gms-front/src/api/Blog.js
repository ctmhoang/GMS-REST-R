export default class Blog {
  static blogs() {
    const url = "http://localhost:8765/photos.json";
    return fetch(url).then((res) => res.json());
  }

  static search(title) {
    const url = `http://localhost:8765/photos/search/${title}.json`;
    return fetch(url).then((res) => res.json());
  }

  static get(id) {
    if (!isFinite(id)) return null;
    const url = `http://localhost:8765/photos/view/${id}.json`;
    return fetch(url).then((res) => res.json());
  }

  static comments(id) {
    if (!isFinite(id)) return null;
    const url = `http://localhost:8765/comments/blog/${id}.json`;
    return fetch(url).then((res) => res.json());
  }
  static num() {
    return fetch("http://localhost:8765/photos/count.json").then((response) =>
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
      `http://localhost:8765/photos/delete/${id}.json`,
      requestOptions
    ).then((response) => response.json());
  }
  static edit(id, title, cap, desc) {
    var formdata = new FormData();
    formdata.append("title", title);
    formdata.append("caption", cap);
    formdata.append("description", desc);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
      credentials: "include",
    };

    return fetch(
      `http://localhost:8765/photos/edit/${id}.json`,
      requestOptions
    ).then((response) => response.json());
  }

  static upload(fileInput) {
    var formdata = new FormData();
    formdata.append("file", fileInput.files[0], fileInput.files[0].name);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
      credentials: "include",
    };

    return fetch(
      "http://localhost:8765/photos/upload.json",
      requestOptions
    ).then((response) => response.json());
  }
  static add(title, size, type, name, author) {
    var formdata = new FormData();
    formdata.append("title", title);
    formdata.append("desc", "");
    formdata.append("author", author);
    formdata.append("caption", "");
    formdata.append("name", name);
    formdata.append("type", type);
    formdata.append("size", size);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
      credentials: "include",
    };

    return fetch(
      "http://localhost:8765/photos/add.json",
      requestOptions
    ).then((response) => response.json());
  }
}
