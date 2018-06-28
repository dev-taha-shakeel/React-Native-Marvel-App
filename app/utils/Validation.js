export function checkIfUserExists (userData, storageData) {
  console.log('user Data', userData);
  console.log('storage', storageData);
  const user = userData.name;
  const pass = userData.pass;
  storageData.forEach(element => {
    console.log(element.name);
    console.log(element.pass);
    if(element.name == user && element.pass == pass) {
      return true;
    }
  });
  return true;
}