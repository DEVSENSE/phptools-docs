<?php

function DateStr($yyyymmdd)
{
    $d = date_create_from_format('Ymd', $yyyymmdd);
    return $d->format('F j, Y'); // 24th March 2012
}

$xml = simplexml_load_file('changelog.xml');

//ob_start();

foreach ($xml->release as $r) 
{
    $date = DateStr($r['date']);
    echo "## $r[version] ($date) $r[tags]", PHP_EOL, PHP_EOL;

    $bycategory = ["" => []]; // set of notes grouped by category, "" is always first

    foreach ($r->note as $n)
    {
        $category = (string)$n['category'];
        if (empty($category))
            $category = "";

        $bycategory[$category][] = $n;
    }

    foreach ($bycategory as $category => $list) {
        if (empty($list))
            continue;

        if (!empty($category))
            echo PHP_EOL, "### $category", PHP_EOL, PHP_EOL;

        foreach ($list as $line)
            echo "- $line", PHP_EOL;
    }

    echo PHP_EOL;
}

//$md = ob_get_contents();
//ob_end_clean();

