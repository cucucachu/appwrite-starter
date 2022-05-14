import { Appwrite } from 'appwrite';
import appwriteConfig from '../appwrite.config.json';

const appwrite = new Appwrite();

appwrite.setEndpoint(appwriteConfig.endpoint);
appwrite.setProject(appwriteConfig.project);


export async function createSomething() {
    const response = await appwrite.database.createDocument('test', 'instance1', {name: 'first doc'});
    console.log(response);
}
