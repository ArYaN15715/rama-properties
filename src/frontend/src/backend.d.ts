import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ConsultationRequest {
    propertyType: PropertyType;
    name: string;
    email: string;
    message: string;
    phone: string;
}
export interface SubmissionResult {
    id: bigint;
    message: string;
}
export interface Consultation {
    id: bigint;
    propertyType: PropertyType;
    name: string;
    email: string;
    message: string;
    timestamp: bigint;
    phone: string;
}
export enum PropertyType {
    retail = "retail",
    commercial = "commercial",
    other = "other",
    investment = "investment",
    office = "office"
}
export interface backendInterface {
    listConsultations(): Promise<Array<Consultation>>;
    submitConsultation(req: ConsultationRequest): Promise<SubmissionResult>;
}
