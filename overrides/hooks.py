import re

def parse_custom_meta(markdown, page, config, files):
    """
    Parse custom meta blocks in markdown files, extract all metadata fields,
    and cleanly remove the entire comment block from the page content.
    """
    # Regular expression to match the custom meta comment block
    meta_pattern = re.compile(r'/\*\s*(.*?)\s*\*/', re.DOTALL)

    # Search for the metadata block in the markdown content
    match = meta_pattern.search(markdown)
    if match:
        # Extract the content of the meta block
        meta_content = match.group(1)

        # Parse key-value pairs dynamically
        meta_lines = meta_content.splitlines()
        for line in meta_lines:
            if ':' in line:
                key, value = line.split(':', 1)
                page.meta[key.strip().lower()] = value.strip()

        # Remove the entire comment block from the markdown content
        markdown = meta_pattern.sub('', markdown).strip()

    return markdown