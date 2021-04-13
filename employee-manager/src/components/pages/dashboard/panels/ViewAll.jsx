import React, { useEffect } from "react";
import firebaseApp from "./../../../../firebase/firebaseConfig";

const ViewAll = (props) => {
  useEffect(() => {
    //path to the firestore data where the uid is the curent user
    const userData = firebaseApp
      .firestore()
      .collection("users")
      .doc(firebaseApp.auth().currentUser.uid);
      
      //promise resolve from firebase
    userData.get().then((doc) => {
      console.log(doc.data);


    });
  }, []);

  //console.log(firebaseApp.auth().currentUser.uid)
  return (
    <header>
      <h2>ViewAll Pannel</h2>
    </header>
  );
};

export default ViewAll;
