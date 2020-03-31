import { Injectable } from '@nestjs/common';
import { IData } from "./body";
import NotifmeSdk from 'notifme-sdk';

@Injectable()
export class NotificationService {
  public notificationHandler(data: IData) {
    
  }
  public accumulate(data: IData) {
    console.log(data,'in end')
    const notifmeSdk = new NotifmeSdk({
      channels: {
        email: {
          multiProviderStrategy: 'fallback',
          providers: [
            {
              type: 'smtp',
              host: 'smtp.gmail.com',
              port: 465,
              secure: true,
              auth: {
                user: 'vivekemailchecker@gmail.com',
                pass: 'Vivek@123'
              }
            },
            {
              type: 'smtp',
              host: 'smtp.gmail.com',
              port: 465,
              secure: true,
              auth: {
                user: 'vivekemailchecker@gmail.com',
                pass: 'Vivek@123'
              }
            }
          ]
        }
      }
    });
    notifmeSdk.send(
      {
        email: {
          from: data.From, 
          to: data.To,
          subject: data.Subject, 
          text: data.Body
        }
      }
    ).then((res) => {
      if(res.status === 'success'){
        console.log(res.status)
        return res;
      }
    })
  }
}
