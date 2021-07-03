import firebase from 'firebase/app';
import 'firebase/auth';

let firebaseConfig = {
  apiKey: 'AIzaSyCmhDwTNztYbhQOp9CRlfb9hzSyqv_IlBs',
  authDomain: 'sistema-de-chamados-dea5d.firebaseapp.com',
  projectId: 'sistema-de-chamados-dea5d',
  storageBucket: 'sistema-de-chamados-dea5d.appspot.com',
  messagingSenderId: '432048365712',
  appId: '1:432048365712:web:9a4d082143122d134af815',
};
//verifica se não existe nenhuma conexão aberta
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
