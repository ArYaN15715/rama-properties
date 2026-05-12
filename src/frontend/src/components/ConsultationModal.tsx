import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useSubmitConsultation } from "@/hooks/useQueries";
import { CheckCircle2, Loader2 } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface FormValues {
  name: string;
  phone: string;
  email: string;
  propertyType: string;
  message: string;
}

const PROPERTY_OPTIONS = [
  { value: "office", label: "Office Space" },
  { value: "commercial", label: "Commercial Floor" },
  { value: "investment", label: "Investment Property" },
  { value: "retail", label: "Retail Space" },
  { value: "other", label: "Other" },
];

interface ConsultationModalProps {
  open: boolean;
  onClose: () => void;
}

export function ConsultationModal({ open, onClose }: ConsultationModalProps) {
  const { mutate, isPending } = useSubmitConsultation();
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const selectedType = watch("propertyType");

  const onSubmit = (data: FormValues) => {
    const propertyTypeMap: Record<string, object> = {
      office: { office: null },
      commercial: { commercial: null },
      investment: { investment: null },
      retail: { retail: null },
      other: { other: null },
    };
    mutate(
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        propertyType: (propertyTypeMap[data.propertyType] ?? {
          other: null,
        }) as never,
        message: data.message,
      },
      {
        onSuccess: () => {
          setSubmitted(true);
          reset();
        },
      },
    );
  };

  const handleOpenChange = (val: boolean) => {
    if (!val) {
      onClose();
      setTimeout(() => setSubmitted(false), 300);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent
        data-ocid="consultation.dialog"
        className="max-w-lg w-full border-border shadow-elevated"
      >
        <DialogHeader>
          <DialogTitle className="font-display text-xl font-bold text-foreground">
            Schedule a Consultation
          </DialogTitle>
          <DialogDescription className="text-muted-foreground text-sm">
            Tell us about your requirements and we'll connect you with an
            expert.
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <motion.div
            data-ocid="consultation.success_state"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-4 py-8"
          >
            <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center">
              <CheckCircle2 size={28} className="text-green-600" />
            </div>
            <div className="text-center">
              <p className="font-semibold text-foreground text-lg mb-1">
                Consultation Requested!
              </p>
              <p className="text-muted-foreground text-sm">
                Our team will contact you within 24 hours.
              </p>
            </div>
            <Button
              type="button"
              data-ocid="consultation.close_button"
              onClick={onClose}
              className="bg-primary hover:bg-primary/90 text-primary-foreground mt-2"
            >
              Close
            </Button>
          </motion.div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 mt-1"
            noValidate
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="name" className="text-sm font-medium">
                  Full Name <span className="text-accent">*</span>
                </Label>
                <Input
                  id="name"
                  data-ocid="consultation.name_input"
                  placeholder="Rajesh Kumar"
                  {...register("name", { required: "Name is required" })}
                  className={errors.name ? "border-accent" : ""}
                />
                {errors.name && (
                  <p
                    data-ocid="consultation.name_field_error"
                    className="text-accent text-xs"
                  >
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-1.5">
                <Label htmlFor="phone" className="text-sm font-medium">
                  Phone <span className="text-accent">*</span>
                </Label>
                <Input
                  id="phone"
                  data-ocid="consultation.phone_input"
                  placeholder="+91 98765 43210"
                  type="tel"
                  {...register("phone", {
                    required: "Phone is required",
                    pattern: {
                      value: /^[\d\s\+\-]{7,15}$/,
                      message: "Enter a valid phone number",
                    },
                  })}
                  className={errors.phone ? "border-accent" : ""}
                />
                {errors.phone && (
                  <p
                    data-ocid="consultation.phone_field_error"
                    className="text-accent text-xs"
                  >
                    {errors.phone.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="email" className="text-sm font-medium">
                Email Address <span className="text-accent">*</span>
              </Label>
              <Input
                id="email"
                data-ocid="consultation.email_input"
                placeholder="name@company.com"
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email",
                  },
                })}
                className={errors.email ? "border-accent" : ""}
              />
              {errors.email && (
                <p
                  data-ocid="consultation.email_field_error"
                  className="text-accent text-xs"
                >
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <Label className="text-sm font-medium">
                Property Type <span className="text-accent">*</span>
              </Label>
              <Select
                value={selectedType}
                onValueChange={(val) =>
                  setValue("propertyType", val, { shouldValidate: true })
                }
              >
                <SelectTrigger
                  data-ocid="consultation.property_type_select"
                  className={errors.propertyType ? "border-accent" : ""}
                >
                  <SelectValue placeholder="Select property type" />
                </SelectTrigger>
                <SelectContent>
                  {PROPERTY_OPTIONS.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value}>
                      {opt.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <input
                type="hidden"
                {...register("propertyType", {
                  required: "Please select a property type",
                })}
              />
              {errors.propertyType && (
                <p
                  data-ocid="consultation.property_type_field_error"
                  className="text-accent text-xs"
                >
                  {errors.propertyType.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="message" className="text-sm font-medium">
                Message / Requirements
              </Label>
              <Textarea
                id="message"
                data-ocid="consultation.message_textarea"
                placeholder="Tell us about your space requirements, budget, preferred location..."
                rows={3}
                {...register("message")}
                className="resize-none"
              />
            </div>

            <div className="flex justify-end gap-3 pt-1">
              <Button
                type="button"
                data-ocid="consultation.cancel_button"
                variant="outline"
                onClick={onClose}
                disabled={isPending}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                data-ocid="consultation.submit_button"
                className="bg-accent hover:bg-accent/90 text-white font-semibold"
                disabled={isPending}
              >
                {isPending && <Loader2 size={15} className="animate-spin" />}
                {isPending ? "Submitting..." : "Request Consultation"}
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
