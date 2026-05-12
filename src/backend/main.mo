import Types "types/consultations";
import ConsultationsMixin "mixins/consultations-api";
import List "mo:core/List";

actor {
  let consultations = List.empty<Types.Consultation>();
  let state = { var nextId : Nat = 0 };
  include ConsultationsMixin(consultations, state);
}
