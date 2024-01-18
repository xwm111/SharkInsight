// db.js
export const dbInit = () => {
  return new Promise((resolve, reject) => {
    // 打开（或创建）数据库
    const request = indexedDB.open("myDatabase", 1);

    request.onerror = (event) => {
      // 处理打开数据库时的错误
      console.error("Database error: ", event.target.errorCode);
      reject(event.target.errorCode);
    };

    request.onupgradeneeded = (event) => {
      // 创建对象存储和索引
      const db = event.target.result;
      if (!db.objectStoreNames.contains("userActivity")) {
        db.createObjectStore("userActivity", {
          keyPath: "id",
          autoIncrement: true,
        });
      }
    };

    request.onsuccess = (event) => {
      // 数据库打开成功
      const db = event.target.result;
      console.log("Database initialized");
      resolve(db);
    };
  });
};
export const writeLastLogin = (db) => {
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(['userActivity'], 'readwrite');
      const store = transaction.objectStore('userActivity');
      const request = store.put({ id: 'lastLogin', value: new Date().toISOString() });
  
      request.onsuccess = () => {
        resolve(request.result);
      };
  
      request.onerror = (event) => {
        reject(event.target.error);
      };
    });
  };
  