export default class Blog {
  static blogs() {
    const url = "http://localhost:8765/photos.json";
    return fetch(url).then((res) => res.json());
  }

  static search(title) {
    const url = `http://localhost:8765/photos/search/${title}.json`;
    return fetch(url).then((res) => res.json());
  }
}
