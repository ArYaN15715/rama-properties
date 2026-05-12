module {
  public type PropertyType = {
    #office;
    #commercial;
    #investment;
    #retail;
    #other;
  };

  public type Consultation = {
    id : Nat;
    name : Text;
    phone : Text;
    email : Text;
    propertyType : PropertyType;
    message : Text;
    timestamp : Int;
  };

  public type ConsultationRequest = {
    name : Text;
    phone : Text;
    email : Text;
    propertyType : PropertyType;
    message : Text;
  };

  public type SubmissionResult = {
    id : Nat;
    message : Text;
  };
}
