
export interface ContactSubmission {
  id?: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  message: string;
  created_at?: string;
}

export interface EnrollmentSubmission {
  id?: string;
  name: string;
  gender: string;
  email: string;
  phone: string;
  college: string;
  degree: string;
  year: string;
  course: string;
  batch_month: string;
  slot: string;
  timing: string;
  created_at?: string;
}

export interface ReferralSubmission {
  id?: string;
  your_name: string;
  your_email: string;
  your_contact: string;
  refer_type: string;
  refer_name: string;
  refer_email: string;
  refer_contact: string;
  message?: string;
  created_at?: string;
}

export interface MeetingSchedule {
  id?: string;
  name: string;
  email: string;
  phone: string;
  purpose: string;
  selected_date: string;
  selected_time: string;
  status?: string;
  created_at?: string;
}
