import React from "react";
import Giscus from "@giscus/react";

const GiscusComments: React.FC = () => {
    return (
        <section className="giscus">
            <Giscus repo="wrdle/portfolio-site"
                    repoId="MDEwOlJlcG9zaXRvcnkzMjEzNDE1ODM="
                    mapping="pathname"
                    category="Comments"
                    categoryId="DIC_kwDOEydIj84Cuypa"
                    strict="0"
                    reactionsEnabled="1"
                    emitMetadata="0"
                    inputPosition="top"
                    theme="catppuccin_mocha"
                    lang="en"
            />
        </section>
    );
};

export default GiscusComments;
