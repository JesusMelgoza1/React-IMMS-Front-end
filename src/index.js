import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebaseConfig from './config/firebase';
import {
  FirebaseAppProvider
} from 'reactfire';
// import { useDatabase, useDatabaseListData, useDatabaseObjectData, AuthCheck, SuspenseWithPerf } from 'reactfire';


ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>

      <Suspense fallback={<p>Cargando...</p>}>
        <App />
      </Suspense>

    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

