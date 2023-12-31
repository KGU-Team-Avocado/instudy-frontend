import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // react-redux import 위치 조정
import { RouterProvider } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import reportWebVitals from './reportWebVitals';
import router from './router';
import { store } from './app/store'; // store import 위치 조정

const theme = createTheme({
  palette: {
    primary: {
      main: '#001f3f', // 주요 색상
    },
    secondary: {
      main: '#f50057', // 보조 색상
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
