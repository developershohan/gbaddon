<?php

$title = sanitize_text_field($attributes['title'] ?? 'Card Title');


echo "<div " . get_block_wrapper_attributes( ) . ">";
echo "<h2>" . esc_html($title) . "</h2>";
echo "</div>";