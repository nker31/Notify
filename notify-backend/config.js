import cryto from 'crypto';

export const PORT = 3001;

export const mongoDB = 
'mongodb+srv://admin:admin@notify.wefaasq.mongodb.net/notify?retryWrites=true&w=majority'

export const generatedRandomToken = () => {
    return cryto.randomBytes(32).toString('hex');
}