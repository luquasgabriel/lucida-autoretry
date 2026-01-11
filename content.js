(function () {
    const TARGET_ID = "zip-error"; // error container ID
    const RETRY_SELECTOR = 'button[data-action="retry"]'; // retry button selector (by data-action)
    const CLICK_DELAY = 500;

    function initObserver() {
        const target = document.getElementById(TARGET_ID);

        if (!target) {
            setTimeout(initObserver, 1000); // guarantees the error container is found before proceeding.
            return;
        }

        function clickAction() {
            const style = window.getComputedStyle(target);

            if (style.display !== "none") {
                const retryBtn = target.querySelector(RETRY_SELECTOR);

                if (retryBtn && !retryBtn.__clicked) {
                    retryBtn.__clicked = true;
                    console.log("[Lucida AutoRetry] Error detected. Retrying...");
                    setTimeout(() => retryBtn.click(), CLICK_DELAY);
                }
            } else {
                const retryBtn = target.querySelector(RETRY_SELECTOR);
                if (retryBtn) retryBtn.__clicked = false;
            }
        }

        const observer = new MutationObserver(clickAction);
        
        // the style attribute of the error div changes to make the error visible (none -> block). that is observed.
        observer.observe(target, {
            attributes: true,
            attributeFilter: ["style"]
        });

        console.log("[Lucida AutoRetry] Activated!");
    }

    initObserver();
})();
