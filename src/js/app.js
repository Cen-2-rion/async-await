import json from './parser';
import read from './reader';

// export default class GameSavingLoader {
//   static async load() {
//     try {
//       const data = await read(); // читаем данные
//       const value = await json(data); // парсим данные
//       return JSON.parse(value); // преобразуем данные в объект и возвращаем
//     } catch (error) {
//       throw new Error('loading failed');
//     }
//   }
// }

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve, reject) => {
      (async () => {
        try {
          const data = await read(); // читаем данные
          const value = await json(data); // парсим данные
          resolve(JSON.parse(value)); // преобразуем данные в объект и возвращаем
        } catch (error) {
          reject(new Error('loading failed'));
        }
      })();
    });
  }
}
