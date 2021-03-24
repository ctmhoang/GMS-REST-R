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
}
