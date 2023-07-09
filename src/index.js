import React from 'react';
import ReactDOM from 'react-dom/client';
// import {BrowserRouter} from 'react-router-dom';
import { App } from 'components/App';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import 'modern-normalize'
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);

//TODO make shared layout for bar
//TODO zrobić menu użytkownika dla zalogowanego użytkownika wyświetlające mail + logout
//TODO trasy
// /register - publiczna trasa rejestracji nowego użytkownika z formularzem
// /login - publiczna trasa logowania istniejącego użytkownika z formularzem
// /contacts - prywatna trasa do pracy z listą kontaktów użytkownika

//TODO zrobić home do ... logowania?
//TODO przygotować api do współpracy z backendem
//TODO przygotować redux do współpracy z logowaniem\
//TODO ostylować to
//TODO zrobić RWD (responsive web design (media querry itd))
//TODO zrobić lazyloading i suspensy
//TODO zmienić filter -  zeby nie był włożony w redux ale jako stan (use state)
//TODO zrobić ładne loadery z opisami..
//TODO zrobić opisy w formularzach do accesibility
//TODO zrobić tryb jasny i ciemny