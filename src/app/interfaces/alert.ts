export type TypeAlert ='success' | 'error' | 'warning';
export interface Alert {
    show:boolean;
    message:string;
    type:TypeAlert;
}
