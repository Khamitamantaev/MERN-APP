import React from "react";

export const AuthPage = () => {
  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <h1>Мое первое приложение</h1>
        <div className="card blue darken-1">
          <div className="card-content white-text">
            <span className="card-title">Авторизация</span>
            <div>
            <div className="input-field">
            <input 
                  placeholder="Введите Email" 
                  id="first_name" 
                  type="text" 
                  name="email"
                  className="yellow-input"
            />
            <label style={{ marginTop: 40 }} htmlFor="email">Email</label>
            </div>

            <div className="input-field">
            <input 
                  placeholder="Введите пароль" 
                  id="password" 
                  type="password" 
                  name="password"
                  className="yellow-input"
            />
            <label style={{ marginTop: 40 }} htmlFor="email">Пароль</label>
            </div>

            </div>
          </div>
          <div className="card-action">
            <button className="btn yellow darken-4" style={{ marginRight: 10 }}>
              Войти
            </button>
            <button className="btn grey lighten-1 black-text">Войти</button>
          </div>
        </div>
      </div>
    </div>
  );
};
