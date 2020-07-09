    const ZindexOfhighlightedContent = "30";
    const ZindexOfDisableInteraction = "20";

    function doHighlight(targetId, highlightAll) {
        deleteMe();
        overlay();
        const disableInteraction = document.createElement("div");
        highlightContent(targetId, highlightAll, disableInteraction);
        if(document.body) {
            document.body.appendChild(disableInteraction);
        }
    }

    function overlay() {
        const guideOverlay = document.createElement("div");
        guideOverlay.setAttribute("id", "guide-overlay");
        guideOverlay.setAttribute("onClick", "deleteMe()")
        guideOverlay.style.cssText = "top: 0px;" 
                                        + "left: 0px;"
                                        + "bottom: 0px;"
                                        + "right: 0px;"
                                        + "position: fixed;"
                                        + "opacity: 0.8;"
                                        + "background-color: black;"
                                        + "z-index: 10;"
        const body = document.body;
        if(body) {
            document.body.appendChild(guideOverlay);
        }                                
    }

    function highlightContent(targetId, highlightAll ,disableInteraction) {
        highlightAll.forEach(v => {
            document.getElementById(v).style.zIndex = 0;
        });

        const targetRect = getTargetInfo(targetId);
        const target = document.getElementById(targetId);
        target.style.zIndex = ZindexOfhighlightedContent;
        
        disableInteraction.setAttribute("id", "disable-interaction");
        disableInteraction.style.top = targetRect.top - 5;
        disableInteraction.style.left = targetRect.left - 5;
        disableInteraction.style.width = targetRect.width + 10;
        disableInteraction.style.height = targetRect.height + 10;
        disableInteraction.style.position = "absolute";
        disableInteraction.style.backgroundColor = "white";
        disableInteraction.style.zIndex = ZindexOfDisableInteraction;
    }

    function getTargetInfo(targetId) {
        const target = document.getElementById(targetId);
        const targetPosition = target.getBoundingClientRect();

        // ページ内の位置
        const top = targetPosition.top + window.pageYOffset;
        const left = targetPosition.left + window.pageXOffset;
        const bottom = targetPosition.bottom + window.pageYOffset;
        const right = targetPosition.right + window.pageXOffset;
        const height = bottom - top;
        const width = right - left;
        const targetRect = {top: top, left: left, width: width, height: height};

        return targetRect;
    }

   function deleteMe() {
         console.log("クリックされたぞ")
        const disableInteraction = document.getElementById("disable-interaction");
        const guideOverlay = document.getElementById("guide-overlay");
        if(disableInteraction) {
            disableInteraction.parentNode.removeChild(disableInteraction);
        }
        if(guideOverlay) {
            guideOverlay.parentNode.removeChild(guideOverlay);
        }
   }