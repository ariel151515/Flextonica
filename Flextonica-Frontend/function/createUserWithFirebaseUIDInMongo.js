import getUserData from "../context/contextoUser"

const createUserWithFirebaseUIDInMongo = async () => {
    const user = getUserData()

  if (!user || !user.uid) {
    console.error('Error: userData or userData.uid is null');
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/datauser/${user.uid}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        uid: user.uid
      })
    });

    const data = await response.json();
    console.log('Usuario creado:', data.user);

  } catch (err) {
    console.error('Error al crear el usuario:', err.message);
  }
};

export default createUserWithFirebaseUIDInMongo;
