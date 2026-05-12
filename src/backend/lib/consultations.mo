import Runtime "mo:core/Runtime";
import Types "../types/consultations";
import List "mo:core/List";

module {
  public type ConsultationList = List.List<Types.Consultation>;

  public func submit(
    consultations : ConsultationList,
    state : { var nextId : Nat },
    req : Types.ConsultationRequest,
    timestamp : Int,
  ) : Types.SubmissionResult {
    if (req.name.isEmpty()) Runtime.trap("Name is required");
    if (req.phone.isEmpty()) Runtime.trap("Phone is required");
    if (req.email.isEmpty()) Runtime.trap("Email is required");
    if (req.message.isEmpty()) Runtime.trap("Message is required");
    let id = state.nextId;
    state.nextId += 1;
    let consultation : Types.Consultation = {
      id;
      name = req.name;
      phone = req.phone;
      email = req.email;
      propertyType = req.propertyType;
      message = req.message;
      timestamp;
    };
    consultations.add(consultation);
    { id; message = "Consultation request submitted successfully. Our team will contact you shortly." };
  };

  public func list(consultations : ConsultationList) : [Types.Consultation] {
    consultations.toArray();
  };
}
