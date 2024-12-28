document.addEventListener('DOMContentLoaded', () => {
    const resultsList = document.querySelector('.md-search-result__list');
    const resultsMeta = document.querySelector('.md-search-result__meta');
    // const searchResultsContainer = document.querySelector('.md-search-result');

    let showAll = false; // State to track if we're showing all results
    const basePath = window.location.pathname.split('/')[1]; // Extract the active tab from the URL

    // Check if the current page is the landing page (root)
    const isLandingPage = window.location.pathname === '/';

    // Function to update the `resultsMeta` based on platform and result count
    const updateMetaText = (filteredCount, totalCount) => {
        let metaText = 'Search Results'; // Default to "Search Results"
        if (!showAll) {
            if (basePath === 'vs') {
                metaText = 'Search Results for Visual Studio';
            } else if (basePath === 'vscode') {
                metaText = 'Search Results for Visual Studio Code';
            }
        }
        resultsMeta.textContent = metaText; // Set the results meta text

        // If the filtered count is less than total, show the toggle button
        if (filteredCount < totalCount) {
            const toggleText = showAll ? 'Show Filtered Results' : 'Show All Results';
            let toggleBtn = resultsMeta.querySelector('button');
            if (!toggleBtn) {
                toggleBtn = document.createElement('button');
                toggleBtn.style.marginLeft = '10px';
                resultsMeta.appendChild(toggleBtn);
            }
            toggleBtn.textContent = toggleText;

            toggleBtn.addEventListener('click', () => {
                showAll = !showAll;
                filterResults();
            });
        }
    };

    // Function to filter results
    const filterResults = () => {
        if (isLandingPage) return; // Skip filtering on landing page

        const searchResults = resultsList.querySelectorAll('.md-search-result__item');
        let visibleCount = 0;
        const totalCount = searchResults.length;

        // If we're showing all results, reset the display and remove the filter
        if (showAll) {
            searchResults.forEach(result => {
                result.style.removeProperty('display'); // Ensure no hidden results
            });
            updateMetaText(totalCount, totalCount); // Reset meta text to show all results
            return; // Exit early to prevent filtering logic from running
        }

        searchResults.forEach(result => {
            const resultLink = result.querySelector('a');
            if (resultLink) {
                let href = resultLink.getAttribute('href').toLowerCase();
                const url = new URL(href, window.location.origin);
                const path = url.pathname;

                if (!path.startsWith(`/${basePath}/`)) {
                    result.style.display = 'none'; // Hide non-matching results
                } else {
                    if (result.style.display === 'none') {
                        result.style.removeProperty('display'); // Remove 'none' if it's set
                    }
                    visibleCount++;
                }
            }
        });

        // Update the displayed count of matching documents
        updateMetaText(visibleCount, totalCount);
    };

    // Watch for changes in the search results list
    const observer = new MutationObserver(() => {
        filterResults();
    });

    // Start observing the results list for child additions/removals
    observer.observe(resultsList, {
        childList: true
    });

});
