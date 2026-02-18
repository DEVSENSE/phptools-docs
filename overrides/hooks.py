import re
from datetime import datetime

def parse_custom_meta(markdown, page, config, files):
    """
    Parse custom meta blocks in markdown files, extract all metadata fields,
    and cleanly remove the entire comment block from the page content.
    """
    markdown = markdown.lstrip()
    meta_pattern = re.compile(r'^/\*\s*(.*?)\s*\*/', re.DOTALL)
    
    match = meta_pattern.search(markdown)
    if match and ":" in match.group(1):
        # Extract metadata
        meta_content = match.group(1)
        for line in meta_content.splitlines():
            if ":" in line:
                key, value = line.split(":", 1)
                page.meta[key.strip().lower()] = value.strip()

        # Remove the block: count=1 ensures we only remove the header
        markdown = meta_pattern.sub('', markdown, count=1).lstrip()

    return markdown

def on_config(config, **kwargs):
    config.now_year = datetime.now().year