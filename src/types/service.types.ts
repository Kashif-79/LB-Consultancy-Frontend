export type TServiceCategory =
  | "Admission"
  | "Visa"
  | "Counseling"
  | "Test Preparation"
  | "Document Review"
  | "Interview Coaching";
export type TService = {
  _id: string;
  name: TServiceCategory;
  definition: string;
  description: string;
  isActive: boolean;
};
