type Notification ={
  type: string;
  send:(message:string)=>void;
}

const emailNotification: Notification = {
  type: 'email',
  send: (message:string) => {
      console.log(`Email enviado com a mensagem: ${message}`);
  },
};
const phoneNotification: Notification = {
  type: 'phone',
  send: (message:string) => {
      console.log(`SMS enviado com a mensagem: ${message}`);
  },
};
const consoleNotification: Notification = {
  type: 'console',
  send: (message:string) => {
      console.log(`Mensagem no console: ${message}`);
  },
};

const notifications: Notification[] = [emailNotification, phoneNotification, consoleNotification];

export default function progressNotification(
  message: string,
  notificationType: Notification['type'],
  notificationsArray: Notification[] = notifications,
): void {
  notificationsArray.forEach((notification) => {
    if (notification.type === notificationType) {
      notification.send(message);
    }
}); 
}