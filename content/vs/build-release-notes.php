<?php

$content = file_get_contents('changelog.md');

$res = preg_split('/(##\s+[0-9].*)/', $content, -1, PREG_SPLIT_NO_EMPTY | PREG_SPLIT_DELIM_CAPTURE);

$releases = [];
$major = '';
foreach ($res as $element) 
{
    if (preg_match_all('/#+\s+([0-9\.]+)\s*(?:\((.*)\))?\s?(\w+)?/', $element, $matches)) {
        $version = $matches[1][0];
        $rawdate = $matches[2][0];
        $date = date("Y-m-d", strtotime($rawdate));
        $tag = $matches[3][0] ?: 'stable';
        $nums = preg_split('/\./', $version);
        $major = "v$nums[0].$nums[1]";

        $releases[$major] ??= ['date' => $date, 'versions' => '', 'text' => ''];
    }
    else {
        $releases[$major]['versions'] .= $version . ',';
        $releases[$major]['text'] .= "# v$version\n> Date: $rawdate\n\n" . trim($element) . "\n\n";
    }
}

foreach ($releases as $v => $r) {

    file_put_contents("releasenotes/$v.md", <<<FILE
/*
Title: PHP Tools $v Release Notes
Tags: release notes,visual studio
Versions: $r[versions]
Date: $r[date]
*/

$r[text]
FILE);

}