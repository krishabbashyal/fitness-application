import { useEffect, useState } from "react";
import { db } from "../../firebase/firebaseConfig"; // Import your Firestore configuration
import { doc, getDoc } from "firebase/firestore";

function App() {
  const [status, setStatus] = useState(false);
  const fetchData = async () => {
    const testCollection = doc(db, "testCollection", "connectionStatus");
    const connectionStatus = await getDoc(testCollection);

    if (connectionStatus.exists()) {
      setStatus(connectionStatus.data().firebaseConnected);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="font-bold mt-36">Fitness App</div>
      <p>Firebase Connected: {status.toString()}</p>
    </div>
  );
}

export default App;
