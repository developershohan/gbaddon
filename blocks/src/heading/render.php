<?php
$content = sanitize_text_field($attributes['content'] ?? 'Heading Text');
$level = intval($attributes['level'] ?? 2);
$text_align = $attributes['textAlign'] ?? '';
$valid_alignments = array('left', 'center', 'right', 'justify');
$style = in_array($text_align, $valid_alignments, true) ? 'text-align:' . esc_attr($text_align) . ';' : '';
$wrapper_attributes = get_block_wrapper_attributes(
    $style ? array('style' => $style) : array()
);

$tagname = "h{$level}";



echo "<{$tagname} {$wrapper_attributes}>{$content}</{$tagname}>";
