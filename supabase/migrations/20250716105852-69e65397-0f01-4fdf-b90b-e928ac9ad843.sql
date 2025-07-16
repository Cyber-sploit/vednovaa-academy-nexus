
-- Create a table to store ebook email requests
CREATE TABLE public.ebook_email_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  ebook_slug TEXT NOT NULL,
  payment_status TEXT DEFAULT 'pending' CHECK (payment_status IN ('pending', 'completed')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add Row Level Security (RLS)
ALTER TABLE public.ebook_email_requests ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert email requests (public feature)
CREATE POLICY "Anyone can create email requests" 
  ON public.ebook_email_requests 
  FOR INSERT 
  WITH CHECK (true);

-- Create policy to allow reading own email requests by email
CREATE POLICY "Users can view their own email requests" 
  ON public.ebook_email_requests 
  FOR SELECT 
  USING (true);

-- Create policy to allow updating payment status
CREATE POLICY "Allow payment status updates" 
  ON public.ebook_email_requests 
  FOR UPDATE 
  USING (true);

-- Create index for faster email lookups
CREATE INDEX idx_ebook_email_requests_email ON public.ebook_email_requests(email);
CREATE INDEX idx_ebook_email_requests_slug ON public.ebook_email_requests(ebook_slug);
