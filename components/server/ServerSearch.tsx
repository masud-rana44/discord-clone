interface ServerSearchProps {
  data: {
    label: string;
    type: "Channel" | "Member";
    data: {
      icon: React.ReactNode;
      name: string;
      id: string;
    }[];
  }[];
}

export const ServerSearch = ({ data }: ServerSearchProps) => {
  return <div>ServerSearch</div>;
};
