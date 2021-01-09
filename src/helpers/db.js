import SQLite from 'react-native-sqlcipher-storage';

// const db = SQLite.openDatabase(
//   {
//     name: 'places.db',
//     location: 'default',
//     createFromLocation: '~SQLite.db',
//   },
//   () => {},
//   (error) => {
//     console.log('ERROR: ' + error);
//   },
// );

const db = SQLite.openDatabase("placeses.db")
export const init = () => {
  const promise = new Promise((res, rej) => {
    db.transaction((tx) => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS placeses (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, imageUri TEXT NOT NULL, address TEXT NOT NULL, lat REAL NOT NULL, lng REAL NOT NULL);',
        [],
        () => {
          console.log('success');
          res();
        },
        (_, err) => {
          console.log('transaction inner err', _,err);
          rej(err);
        },
      );
    });
  });
  return promise;
};


export const insertPlace = (title, imageUri, address, lat, lng) => {
  const promise = new Promise((resolve, reject) => {
      db.transaction(tx => {

        tx.executeSql(
          `INSERT INTO placeses (title, imageUri, address, lat, lng) VALUES (?, ?, ?, ?, ?);`,
          [title, imageUri, address, lat, lng],
          (_, result) => {
            resolve('result',_,result);
          },
          (_, err) => {
            reject('err in insertPlace' ,_ ,  err);
            console.log(_ ,  err);
          }
        );
      });
    });
    return promise;
};

export const fetchPlaces = () => {
  const promise = new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM placeses',
          [],
          (_, result) => {
            resolve(result);
          },
          (_, err) => {
            reject(err);
          }
        );
      });
    });
    return promise;
};