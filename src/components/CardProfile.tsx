import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface ICardProfile {
  name: string;
  email: string;
  total: number;
  content: string;
}

const CardProfile = ({ email, name, total, content }: ICardProfile) => {
  return (
    <Card className="max-w-sm">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{email}</CardDescription>
        <CardAction>{total}</CardAction>
      </CardHeader>
      <CardContent>
        <p>{content}</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
};

export default CardProfile;
