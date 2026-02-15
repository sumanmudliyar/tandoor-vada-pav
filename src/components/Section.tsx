import type { MenuSection } from "../data/menuData";
import FoodCard from "./FoodCard";

type Props = {
  section: MenuSection;
};

const Section: React.FC<Props> = ({
  section,
}) => {
  return (
    <section className="section">
      <h2 className="section-title">
        {section.title}
      </h2>

      <div className="grid">
        {section.items.map((item) => (
          <FoodCard
            key={item.name}
            {...item}
          />
        ))}
      </div>
    </section>
  );
};

export default Section;
