import { IonPage, IonContent, IonText } from '@ionic/react';

const NotFound: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonText color="danger">
          <h2>404 - 页面不存在</h2>
        </IonText>
      </IonContent>
    </IonPage>
  );
};

export default NotFound;
