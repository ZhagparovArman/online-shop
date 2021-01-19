import { useState } from "react";
import firebase from "../../firebase";
import { useHistory } from "react-router-dom";

const Auth = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [notify, setNotification] = useState("");
  let history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(username, password)
      .catch((err) => {
        console.log(err.code, err.message);
        setNotification(err.message);
        setTimeout(() => {
          setNotification("");
        }, 2000);
      });
    localStorage.setItem("user", username);
    setUsername("");
    setPassword("");

    history.push("/admin");
  };
  return (
    <section className="auth">
      <div className="container">
        {notify}
        <div className="auth__wrapper">
          <h2 className="title auth__title">Аутентификация</h2>
          <form onSubmit={handleLogin} className="form auth__form">
            <div className="form__item auth__form-item">
              <label
                className="form__item-label auth__form-item__label"
                htmlFor="auth__form-login"
              >
                Логин
              </label>
              <input
                className="form__item-input auth__form-item__input"
                type="text"
                id="auth__form-login"
                required
                value={username}
                onChange={({ target }) => setUsername(target.value)}
              />
            </div>
            <div className="form__item auth__form-item">
              <label
                className="form__item-label auth__form-item__label"
                htmlFor="auth__form-password"
              >
                Пароль
              </label>
              <input
                className="form__item-input auth__form-item__input"
                type="password"
                id="auth__form-password"
                required
                value={password}
                onChange={({ target }) => setPassword(target.value)}
              />
              <button className="auth__form-item__input-show">?</button>
            </div>
            <button type="submit" className="red-button form__submit">
              Войти
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Auth;
