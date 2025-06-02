
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const ScheduleMeeting = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [meetingData, setMeetingData] = useState({
    name: "",
    email: "",
    phone: "",
    purpose: ""
  });

  const availableDates = [
    "2024-12-20",
    "2024-12-21", 
    "2024-12-23",
    "2024-12-24",
    "2024-12-26",
    "2024-12-27",
    "2024-12-30",
    "2024-12-31"
  ];

  const timeSlots = [
    "10:00 AM",
    "11:00 AM", 
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM"
  ];

  const purposes = [
    "Course Inquiry",
    "Career Guidance",
    "Technical Discussion",
    "Partnership Opportunity",
    "General Consultation"
  ];

  const handleSchedule = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await (supabase as any)
        .from('meeting_schedules')
        .insert([{
          name: meetingData.name,
          email: meetingData.email,
          phone: meetingData.phone,
          purpose: meetingData.purpose,
          selected_date: selectedDate,
          selected_time: selectedTime
        }]);

      if (error) throw error;

      toast({
        title: "Meeting Scheduled!",
        description: "We'll send you a confirmation email with the meeting details.",
      });
      
      // Reset form
      setMeetingData({ name: "", email: "", phone: "", purpose: "" });
      setSelectedDate("");
      setSelectedTime("");
    } catch (error) {
      console.error('Error scheduling meeting:', error);
      toast({
        title: "Error",
        description: "There was an error scheduling your meeting. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Calendar className="h-5 w-5 text-primary-600" />
          <span>Schedule a Meeting</span>
        </CardTitle>
        <CardDescription>
          Book a one-on-one session with our education counselors
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSchedule} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="meetingName">Full Name *</Label>
              <Input 
                id="meetingName"
                value={meetingData.name}
                onChange={(e) => setMeetingData(prev => ({ ...prev, name: e.target.value }))}
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="meetingEmail">Email *</Label>
              <Input 
                id="meetingEmail"
                type="email"
                value={meetingData.email}
                onChange={(e) => setMeetingData(prev => ({ ...prev, email: e.target.value }))}
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="meetingPhone">Phone Number *</Label>
              <Input 
                id="meetingPhone"
                type="tel"
                value={meetingData.phone}
                onChange={(e) => setMeetingData(prev => ({ ...prev, phone: e.target.value }))}
                placeholder="Enter your phone"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="purpose">Purpose *</Label>
              <Select value={meetingData.purpose} onValueChange={(value) => setMeetingData(prev => ({ ...prev, purpose: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Select purpose" />
                </SelectTrigger>
                <SelectContent>
                  {purposes.map((purpose) => (
                    <SelectItem key={purpose} value={purpose}>{purpose}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date">Preferred Date *</Label>
              <Select value={selectedDate} onValueChange={setSelectedDate}>
                <SelectTrigger>
                  <SelectValue placeholder="Select date" />
                </SelectTrigger>
                <SelectContent>
                  {availableDates.map((date) => (
                    <SelectItem key={date} value={date}>
                      {new Date(date).toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="time">Preferred Time *</Label>
              <Select value={selectedTime} onValueChange={setSelectedTime}>
                <SelectTrigger>
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((time) => (
                    <SelectItem key={time} value={time}>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>{time}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-primary-600 hover:bg-primary-700"
            disabled={!selectedDate || !selectedTime || !meetingData.name || !meetingData.email || isSubmitting}
          >
            {isSubmitting ? "Scheduling..." : "Schedule Meeting"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ScheduleMeeting;
