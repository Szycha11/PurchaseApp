

import { Telegram } from 'telegraf';
import * as fs from 'fs';


export let telgramData = fs.readFileSync("./telegram.json","utf8")
export let jsonData = JSON.parse(telgramData)
        
export const telegram: Telegram = new Telegram(jsonData.telegram_token);


