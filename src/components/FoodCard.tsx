type Props = {
  name: string;
  price: number;
  image: string;
};

const FoodCard: React.FC<Props> = ({
  name,
  price,
  image,
}) => {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>₹{price}</p>
    </div>
  );
};

export default FoodCard;
