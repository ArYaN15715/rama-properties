import Types "../types/consultations";
import ConsultationLib "../lib/consultations";
import List "mo:core/List";
import Time "mo:core/Time";

mixin (consultations : List.List<Types.Consultation>, state : { var nextId : Nat }) {
  public func submitConsultation(
    req : Types.ConsultationRequest
  ) : async Types.SubmissionResult {
    ConsultationLib.submit(consultations, state, req, Time.now());
  };

  public query func listConsultations() : async [Types.Consultation] {
    ConsultationLib.list(consultations);
  };
}
