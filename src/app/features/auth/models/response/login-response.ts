export interface LoginResponse {
    token: string;
    user: {
        id: number;
        email: string;
        name: string;
        role: string;
    };
    isSuccess: boolean;
    message: string;
}
