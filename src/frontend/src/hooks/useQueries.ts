import { createActor } from "@/backend";
import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation } from "@tanstack/react-query";

export type PropertyType =
  | { office: null }
  | { commercial: null }
  | { investment: null }
  | { retail: null }
  | { other: null };

export interface ConsultationRequest {
  name: string;
  phone: string;
  email: string;
  propertyType: PropertyType;
  message: string;
}

export interface SubmissionResult {
  success: boolean;
  message: string;
}

export function useSubmitConsultation() {
  const { actor } = useActor(createActor);
  return useMutation<SubmissionResult, Error, ConsultationRequest>({
    mutationFn: async (req: ConsultationRequest) => {
      if (!actor) throw new Error("Backend not available");
      // @ts-expect-error - backend method will be available after bindgen
      return actor.submitConsultation(req) as Promise<SubmissionResult>;
    },
  });
}
