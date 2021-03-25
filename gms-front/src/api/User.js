export default class User {
  static login(user, pwd) {
    const formdata = new FormData();
    formdata.append("usr", user);
    formdata.append("pwd", pwd);

    const requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
      credentials: "include",
    };

    return fetch(
      "http://localhost:8765/users/login.json",
      requestOptions
    ).then((response) => response.json());
  }

  static logout() {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
      credentials: "include",
    };

    return fetch("http://localhost:8765/users/logout.json", requestOptions);
  }

  static num() {
    return fetch("http://localhost:8765/users/count.json").then((response) =>
      response.json()
    );
  }

  static fetch() {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
      credentials: "include",
    };

    return fetch(
      "http://localhost:8765/users.json",
      requestOptions
    ).then((response) => response.json());
  }

  static add(username, password, lstName, fstName) {
    var formdata = new FormData();
    formdata.append("usr", username);
    formdata.append("pwd", password);
    formdata.append("lst", lstName);
    formdata.append("fst", fstName);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    return fetch(
      "http://localhost:8765/users/add.json",
      requestOptions
    ).then((response) => response.json());
  }
  static get(id) {
    return fetch(
      `http://localhost:8765/users/view/${id}.json`
    ).then((response) => response.json());
  }
  static edit(id, usr, pwd, fst, lst) {
    var formdata = new FormData();
    formdata.append("usr", usr);
    formdata.append("pwd", pwd);
    formdata.append("lst", lst);
    formdata.append("fst", fst);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    return fetch(
      `http://localhost:8765/users/edit/${id}.json`,
      requestOptions
    ).then((response) => response.json());
  }
  static del(id) {
    var requestOptions = {
      method: "POST",
      redirect: "follow",
    };

    return fetch(
      `http://localhost:8765/users/delete/${id}.json`,
      requestOptions
    ).then((response) => response.json());
  }
}
