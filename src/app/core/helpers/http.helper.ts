import { MessageHelper } from './message.helper';
import { Injectable } from '@angular/core';
import { CommandResult } from '../models/command-result.model';

@Injectable({
    providedIn: 'root'
})
export class HttpHelper {
    constructor(private messageHelper: MessageHelper) { }

    public async handlerError(endpoint: string, message: string) {
        this.messageHelper.message(endpoint, message, 3000);
    }

    public handlerErrorCommand(endpoint: string, error: any) {
        if (error.status === 400) {
            let commandResult = error.error as CommandResult<string[]>;
            if (commandResult.message) {
                this.messageHelper.message(endpoint, commandResult.message);
            } else {

                this.messageHelper.message(endpoint, commandResult.data.toString());
            }
        } else {
            this.messageHelper.message(endpoint, 'Sorry, there was an unexpected error');
        }
    }

    public handlerSuccess(title: string, message: string) {
        this.messageHelper.message(title, message, 1000);
    }
}