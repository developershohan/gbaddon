import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  InspectorControls,
  RichText,
  BlockControls,
} from "@wordpress/block-editor";
import { PanelBody,ColorPalette, SelectControl } from "@wordpress/components";

import "./edit.scss";

export default function Edit({ attributes, setAttributes }) {
  const { title, subtitle, imageUrl, backgroundColor, textColor } = attributes;

  return (
    <>
      <BlockControls>

      </BlockControls>
      <InspectorControls>
        <PanelBody
          title={__("Card Settings", "plugin-markup-with-composer")}
        >

        </PanelBody>
      </InspectorControls>
      <RichText
        {...useBlockProps()}
        tagName={"h2"}
        value={title}
        onChange={(value) => setAttributes({ title: value })}
        placeholder={__("Card Title", "plugin-markup-with-composer")}
      />
    </>
  );
}
