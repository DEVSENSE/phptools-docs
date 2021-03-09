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

    foreach ($r->note as $n)
    {
        echo "- $n", PHP_EOL;
    }

    echo PHP_EOL;
}

//$md = ob_get_contents();
//ob_end_clean();

