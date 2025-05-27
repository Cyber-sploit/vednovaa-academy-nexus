
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface CourseCardProps {
  title: string;
  description: string;
  enrollments?: string;
  image: string;
  onClick?: () => void;
}

const CourseCard = ({ title, description, enrollments, image, onClick }: CourseCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 cursor-pointer group" onClick={onClick}>
      <div className="aspect-video bg-gradient-to-br from-primary-100 to-primary-200 rounded-t-lg overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-900">{title}</CardTitle>
        <CardDescription className="text-gray-600">{description}</CardDescription>
        {enrollments && (
          <p className="text-primary-600 font-medium text-sm">{enrollments}</p>
        )}
      </CardHeader>
      <CardContent>
        <Button className="w-full bg-primary-600 hover:bg-primary-700">
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
