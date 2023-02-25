import "./product-summaries.css";
import colors from "../colors";
import ProductSummaries from "./ProductSummaries";

function ProductSummariesSection() {
  return (
    <div className="main" id="skills">
      <div className="skills-header-div">
        <h1 className="skills-header" style={{ color: colors.text }}>
          What Do We Do?
        </h1>
      </div>
      <ProductSummaries />
    </div>
  );
}

export default ProductSummariesSection;