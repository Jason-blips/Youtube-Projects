import { IonButtons, IonImg, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import { useParams } from 'react-router';
import './Page.css';
import React, { useState } from 'react';


const Page2: React.FC = () => {

  const [text, setText] = useState("Old Text");

  function changeText() {
    setText("Hello World")
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Page 2</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonButton onClick={changeText}>
          click it
        </IonButton>
        <IonImg src='./icon.png'></IonImg>
        <div className='element1'>
          {text}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Page2;
