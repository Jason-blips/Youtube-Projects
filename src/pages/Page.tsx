import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import './Page.css';

const Page: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Page 1</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
      
      </IonContent>
    </IonPage>
  );
};

export default Page;
