export default class User {
  static login(user, pwd) {
    const formdata = new FormData();
    formdata.append("usr", user);
    formdata.append("pwd", pwd);

    const requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
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

    return fetch("http://localhost:8765/users.json", requestOptions).then(
      (response) => {
        console.log(response);
        response.json();
      }
    );
  }
}
