import React from 'react';

const Section = ({children, ...props}) => {
    return (
        <section
            className="elementor-section elementor-top-section elementor-element elementor-section-boxed elementor-section-height-default elementor-section-height-default"
            {...props}>
            <div className="elementor-container elementor-column-gap-default">
                <div
                    className="elementor-column elementor-col-100 elementor-top-column elementor-element">
                    <div className="elementor-widget-wrap elementor-element-populated">
                        {children}
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Section;
