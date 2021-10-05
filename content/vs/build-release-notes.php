<?php

$content = file_get_contents('changelog.md');

$res = preg_split('/(##\s+[0-9].*)/', $content, -1, PREG_SPLIT_NO_EMPTY | PREG_SPLIT_DELIM_CAPTURE);

$releases = [];
foreach ($res as $element) 
{
    if (preg_match_all('/#+\s+([0-9\.]+)\s*(?:\((.*)\))?\s?(\w+)?/', $element, $matches)) {
        $release = [
            'version' => $matches[1][0],
            'date' => date("Ymd", strtotime($matches[2][0])),
            'tags' => $matches[3][0] ?: 'stable',
        ];
    }
    else {
        $release['text'] = trim($element);
        $releases[] = $release;
    }
}

foreach ($releases as $r) {

    file_put_contents("releasenotes/v$r[version].md", <<<FILE
/*
Title: PHP Tools v$r[version] Release Notes
Tags: release notes,visual studio,$r[tags]
Versions: $r[version]
Date: $r[date]
*/

$r[text]
FILE);

}