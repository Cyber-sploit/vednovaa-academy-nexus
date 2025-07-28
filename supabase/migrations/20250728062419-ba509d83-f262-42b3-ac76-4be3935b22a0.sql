-- Add a unique token for payment verification
ALTER TABLE public.ebook_email_requests 
ADD COLUMN verification_token UUID DEFAULT gen_random_uuid(),
ADD COLUMN token_expires_at TIMESTAMP WITH TIME ZONE DEFAULT (now() + interval '24 hours');