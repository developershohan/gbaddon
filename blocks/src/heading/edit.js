import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  InspectorControls,
  RichText,
  BlockControls,
  AlignmentToolbar,
} from "@wordpress/block-editor";
import { PanelBody, SelectControl } from "@wordpress/components";

import "./edit.scss";

export default function Edit({ attributes, setAttributes }) {
  const { content, level, textAlign } = attributes;
  const TagName = `h${level}`;
  const blockProps = useBlockProps({
    style: {
      textAlign,
    },
  });

  return (
    <>
      <BlockControls>
        <AlignmentToolbar
          value={textAlign}
          onChange={(textAlign) => setAttributes({ textAlign })}
        />
      </BlockControls>
      <InspectorControls>
        <PanelBody
          title={__("Heading Settings", "plugin-markup-with-composer")}
        >
          <SelectControl
            label={__("Heading Level", "plugin-markup-with-composer")}
            value={level}
            options={[
              { label: __("H1", "plugin-markup-with-composer"), value: 1 },
              { label: __("H2", "plugin-markup-with-composer"), value: 2 },
              { label: __("H3", "plugin-markup-with-composer"), value: 3 },
              { label: __("H4", "plugin-markup-with-composer"), value: 4 },
              { label: __("H5", "plugin-markup-with-composer"), value: 5 },
              { label: __("H6", "plugin-markup-with-composer"), value: 6 },
            ]}
            onChange={(value) => setAttributes({ level: Number(value) })}
          />
        </PanelBody>
      </InspectorControls>
      <RichText
        {...blockProps}
        tagName={TagName}
        value={content}
        onChange={(value) => setAttributes({ content: value })}
        placeholder={__("Heading Text", "plugin-markup-with-composer")}
      />
    </>
  );
}
