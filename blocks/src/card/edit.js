import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  InspectorControls,
  RichText,
  BlockControls,
  MediaUpload
} from "@wordpress/block-editor";
import { PanelBody, ColorPalette, SelectControl } from "@wordpress/components";

import "./edit.scss";

export default function Edit({ attributes, setAttributes }) {
  const { title, subtitle, imageUrl, backgroundColor, textColor, buttonUrl } = attributes;

  return (
    <>

      <InspectorControls>
        <PanelBody
          title={__("Card Settings", "plugin-markup-with-composer")}
        >
          <ColorPalette
            label={__("Background Color", "plugin-markup-with-composer")}
            value={backgroundColor}
            onChange={(value) => setAttributes({ backgroundColor: value })}
          />
          <ColorPalette
            label={__("Text Color", "plugin-markup-with-composer")}
            value={textColor}
            onChange={(value) => setAttributes({ textColor: value })}
          />
        </PanelBody>
      </InspectorControls>

      <div {...useBlockProps()} className="card_wrapper" style={{ backgroundColor: backgroundColor, color: textColor }}>

        <MediaUpload
          onSelect={(media) => setAttributes({ imageUrl: media.url })}
          allowedTypes={["image"]}
          render={({ open }) => (
            <button onClick={open} className="button">
              {__("Upload Image", "plugin-markup-with-composer")}
            </button>
          )}
        />

        {imageUrl && (
          <div className="card_image">
            <img src={imageUrl} alt={__("Card Image", "plugin-markup-with-composer")} />
          </div>
        )}
        <RichText
          tagName={"h2"}
          value={title}
          onChange={(value) => setAttributes({ title: value })}
          placeholder={__("Card Title", "plugin-markup-with-composer")}
        />

        <RichText
          tagName={"p"}
          value={subtitle}
          onChange={(value) => setAttributes({ subtitle: value })}
          placeholder={__("Card Subtitle", "plugin-markup-with-composer")}
        />

        <RichText
          tagName={"p"}
          value={buttonUrl}
          onChange={(value) => setAttributes({ buttonUrl: value })}
          placeholder={__("Card Button Url", "plugin-markup-with-composer")}
        />




      </div>
    </>
  );
}
