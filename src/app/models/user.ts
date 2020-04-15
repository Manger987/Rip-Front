import { Roles } from './roles';

export interface UserInterface{
    uid?: string,
    displayName?: any,
    photoURL?: any,
    email: string,
    emailVerified?: boolean,
    phoneNumber?: number,
    isAnonymous?: boolean,
    tenantId?: null
    providerData?: any,
    apiKey: string,
    appName?: string,
    authDomain?: string,
    stsTokenManager?: object,
    redirectEventId?: any,
    lastLoginAt?: string,
    createdAt?: string
    multiFactor?: any
    // id?: string;
    // name?: string;
    // email?: string;
    // password?: string;
    // photoUrl?: string;
    // roles: Roles;
}