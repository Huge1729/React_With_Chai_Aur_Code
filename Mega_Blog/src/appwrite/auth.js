import conf from '../conf/conf'

import { Client, Account, ID } from 'appwrite'

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call another method
                // return userAccount or go to login but we can go directly by login in 
                return this.login(email, password);
            }
            else {
                return userAccount;
            }
        } catch (error) {
            throw error
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailSession(email, password);

        } catch (error) {
            throw error
        }
    }

    // user is logged in or not at when we directly reaches to  home page
    async getCurrentUser() {
        try {
            return await this.account.get();

        } catch (error) {
            throw error
        }

        return null;
    }


    async logout() {
        try {
            await this.account.deleteSessions();

        } catch (error) {
            throw error
        }
    }
}

const authService = new AuthService();

export default authService