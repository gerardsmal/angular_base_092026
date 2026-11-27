import { Service } from '@angular/core';

@Service()
export class AuthService {

    setAutentificated(): void {
        localStorage.setItem("isLogged", "1");
    }

    setAdmin(): void {
        localStorage.setItem("isAdmin", "1");
    }

    setUser(): void {
        localStorage.setItem("isAdmin", "0");
    }

    resetAll(): void {
        localStorage.removeItem("isLogged");
        localStorage.removeItem("isAdmin");
    }

    isAutentificated(): boolean {
        return localStorage.getItem("isLogged") === "1";
    }

    isRoleAdmin(): boolean {
        return localStorage.getItem("isAdmin") === "1";
    }
}