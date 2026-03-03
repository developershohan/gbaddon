import { registerBlockType } from "@wordpress/blocks";

import Edit from "./edit";
import "./style.scss";
import metadata from "./block.json";

registerBlockType(metadata, {
  edit: Edit,
});
