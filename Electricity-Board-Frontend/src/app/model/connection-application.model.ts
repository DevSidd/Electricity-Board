export interface ConnectionApplication {
  id?: number;
  applicantName: string;
  gender: string;
  district: string;
  state: string;
  pincode: string;
  ownership: string;
  govtIdType: string;
  idNumber: string;
  category: string;
  loadApplied: number;
  dateOfApplication: Date;
  dateOfApproval?: Date;
  modifiedDate?: Date;
  status: string;
  reviewerId?: string;
  reviewerName?: string;
  reviewerComments?: string;
  }




  