class BeforeAfter {
  constructor(enteryObject) {
    const beforeAfterContainer = document.querySelector(enteryObject.id);
    const before = beforeAfterContainer.querySelector(".bal-before");
    const beforeText = beforeAfterContainer.querySelector(
      ".bal-beforePosition"
    );
    const afterText = beforeAfterContainer.querySelector(".bal-afterPosition");
    const handle = beforeAfterContainer.querySelector(".bal-handle");
    var widthChange = 0;

    beforeAfterContainer
      .querySelector(".bal-before-inset")
      .setAttribute(
        "style",
        "width: " + beforeAfterContainer.offsetWidth + "px;"
      );
    window.onresize = function () {
      beforeAfterContainer
        .querySelector(".bal-before-inset")
        .setAttribute(
          "style",
          "width: " + beforeAfterContainer.offsetWidth + "px;"
        );
    };
    before.setAttribute("style", "width: 50%;");
    handle.setAttribute("style", "left: 50%;");

    //touch screen event listener
    beforeAfterContainer.addEventListener("touchstart", (e) => {
      beforeAfterContainer.addEventListener("touchmove", (e2) => {
        let containerWidth = beforeAfterContainer.offsetWidth;
        let currentPoint = e2.changedTouches[0].clientX;

        let startOfDiv = beforeAfterContainer.offsetLeft;

        let modifiedCurrentPoint = currentPoint - startOfDiv;

        if (
          modifiedCurrentPoint > 10 &&
          modifiedCurrentPoint < beforeAfterContainer.offsetWidth - 10
        ) {
          let newWidth = (modifiedCurrentPoint * 100) / containerWidth;

          before.setAttribute("style", "width:" + newWidth + "%;");
          afterText.setAttribute("style", "z-index: 1;");
          handle.setAttribute("style", "left:" + newWidth + "%;");
        }
      });
    });

    //mouse move event listener
    beforeAfterContainer.addEventListener("mousemove", (e) => {
      let containerWidth = beforeAfterContainer.offsetWidth;
      widthChange = e.offsetX;
      let newWidth = (widthChange * 100) / containerWidth;

      if (e.offsetX > 10 && e.offsetX < beforeAfterContainer.offsetWidth - 10) {
        before.setAttribute("style", "width:" + newWidth + "%;");
        afterText.setAttribute("style", "z-index:" + "1;");
        handle.setAttribute("style", "left:" + newWidth + "%;");
      }
    });

    //left and right arrows event listener
    beforeAfterContainer.addEventListener("keydown", (e) => {
      let currentWidth = parseFloat(before.style.width) || 50; // Default to 50% if no width set
      let newWidth;

      // Check for left and right arrow key presses
      if (e.key === "ArrowLeft") {
        // Decrease the width (reveal more of "Before")
        newWidth = currentWidth - 5; // Decrease by 5%
      } else if (e.key === "ArrowRight") {
        // Increase the width (reveal more of "After")
        newWidth = currentWidth + 5; // Increase by 5%
      }

      // Clamp newWidth between 0 and 100 percent
      newWidth = Math.max(0, Math.min(100, newWidth));

      // Update styles if newWidth is valid
      if (newWidth >= 0 && newWidth <= 100) {
        before.setAttribute("style", "width:" + newWidth + "%;");
        afterText.setAttribute("style", "z-index: 1;");
        handle.setAttribute("style", "left:" + newWidth + "%;");
      }
    });
  }
}
