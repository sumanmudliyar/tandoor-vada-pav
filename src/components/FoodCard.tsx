type Props = {
  name: string;
  price: number;
};

const FoodCard: React.FC<Props> = ({
  name,
  price,
}) => {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>₹{price}</p>
    </div>
  );
};

export default FoodCard;
