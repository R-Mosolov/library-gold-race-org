import React from "react";
import { Button, Selector } from "..";
import "../../styles/Header.scss";
import { Logo } from "../../assets";
import { HeaderProps } from "../../types/Header";

export const Header = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
}: HeaderProps) => (
  <header>
    <div className="wrapper">
      <div>
        <img src={Logo} />
        <h1>Библиотека Новых Знаний</h1>
      </div>
      <div>
        <Selector />
        {user ? (
          <>
            <span className="welcome">
              Добро пожаловать, <b>{user.name}</b>!
            </span>
            <Button size="small" onClick={onLogout} label="Выйти" />
          </>
        ) : (
          <>
            <Button size="small" onClick={onLogin} label="Войти" />
            <Button
              primary
              size="small"
              onClick={onCreateAccount}
              label="Зарегистрироваться"
            />
          </>
        )}
      </div>
    </div>
  </header>
);
