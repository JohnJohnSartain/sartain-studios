import "./product-summaries.css";
import products from "../asset/products";
import colors from "../colors";
import UnclickableIcons from "./button/link/UnclickableIcons";
import GraphsImage from "../asset/image/GraphsImage";
import GraphicDesignImage from "../asset/image/GraphicDesignImage";
import UserControlsImage from "../asset/image/UserControlsImage";
import Button from "./button/Button";

function GetSkillSvg({ fileName }) {
    if (fileName === "GraphsImage")
        return <GraphsImage />;
    else if (fileName === "UserControlsImage")
        return <UserControlsImage />;
    else
        return <GraphicDesignImage />;
}

function ProductSummaries() {
    return (
        <div>
            {products.map((skill, key) => {
                return (
                    <div className="skills-main-div" key={key}>
                        <div className="skills-image-div">
                            <GetSkillSvg fileName={skill.fileName} />
                        </div>

                        <div className="skills-text-div">
                            <h1 className="skills-heading" style={{ color: colors.text }}>
                                {skill.name}
                            </h1>
                            <UnclickableIcons icons={skill.icons} />
                            <div>
                                {skill.keyPoints.map((keyPoint, key) => {
                                    return (
                                        <p
                                            className="subTitle skills-text"
                                            style={{ color: colors.secondaryText }}
                                            key={key}
                                        >
                                            {keyPoint}
                                        </p>
                                    );
                                })}

                                <Button
                                    text="Try Me"
                                    newTab={true}
                                    href={skill.link}
                                />
                            </div>
                        </div>
                    </div>
                );
            })}
        </div >
    );
}

export default ProductSummaries;