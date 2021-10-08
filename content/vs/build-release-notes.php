<?php

$content = file_get_contents('changelog.md');

$res = preg_split('/(##\s+[0-9].*)/', $content, -1, PREG_SPLIT_NO_EMPTY | PREG_SPLIT_DELIM_CAPTURE);

$releases = [];
$builds = [];
$major = '';
foreach ($res as $element) 
{
    if (preg_match_all('/#+\s+([0-9\.]+)\s*(?:\((.*)\))?\s?(\w+)?/', $element, $matches)) {
        $version = $matches[1][0];
        $rawdate = $matches[2][0];
        $date = date("Y-m-d", strtotime($rawdate));
        $tag = $matches[3][0] ?: 'stable';
        $nums = preg_split('/\./', $version);
        $major = "$nums[0].$nums[1]";

        $releases[$major] ??= ['date' => $date, 'versions' => '', 'text' => '', 'title' => date("F o", strtotime($rawdate))];
        $builds[] = ['version' => $version, 'date' => $date, 'tags' => $tag];
    }
    else {
        $releases[$major]['versions'] .= $version . ',';
        $releases[$major]['text'] .= "## v$version\n*Date: $rawdate*\n\n" . trim($element) . "\n\n";
    }
}

file_put_contents("releases.json", json_encode($builds));

foreach ($releases as $v => $r) {

    $fname = 'v' . str_replace('.', '-', $v);
    file_put_contents("releasenotes/$fname.md", <<<FILE
/*
Title: $r[title] v$v
Tags: release notes,visual studio
Versions: $r[versions]
Date: $r[date]
*/

$r[text]
FILE);

}