export interface CardProps {
  title?: string;
  image?: string;
  description?: string;
}

const Card = ({ title, image, description }: CardProps) => {
  return (
    <div>
      <h2>{title}</h2>
      <img src={image} height={200} width={200} alt="Card Image" />
      <p>{description}</p>
    </div>
  );
};

export default Card;
