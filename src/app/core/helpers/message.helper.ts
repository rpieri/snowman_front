import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

class Message {
    constructor(
        public title: string,
        public message: any,
        public buttons?: any[],
        public color: string = undefined,
        public durations: number = 5000,
    ) { }
}

@Injectable({
    providedIn: 'root'
})
export class MessageHelper {
    constructor(private toastrCtrl: ToastController) { }

    public message(title: string, message: any, durations: number = 6000): void {
        this.showMessage(new Message(title, message, null, undefined, durations));
    }

    public messageWithButton(title: string, message: string, buttons: any[]) {
        this.showMessage(new Message(title, message, buttons))
    }

    public createButton(text: string, rule: string, icon: string, action?: () => void): any {
        return {
            text: text,
            role: rule,
            icon: icon,
            handler: action
        }
    }

    private async showMessage(message: Message) {
        const createMessage = await this.toastrCtrl.create({
            header: message.title,
            message: message.message,
            duration: message.durations,
            color: message.color,
            buttons: message.buttons
        });

        createMessage.present();
    }
}