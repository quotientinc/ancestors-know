jQuery.fn.checkVisibility = function () {
	
	// Elements passed in JQuery selectors 
	let elements = jQuery(this);

	// Variables to store visible and hidden elements
	let isVisible = [];
	let hiddenElements = [];

	// Runs check on each elements on interval
	let runCheck = function () {
		// Stores visivle and hidden elements until no longer visible or hidden
		let tempVisible = [];
		let tempHidden = [];

		
		elements.each(function (i) {
			//Gets top left position of element
			let offsetTopLeft = jQuery(this).offset();
			// Gets top right position of element 
			let offsetTopRight = {
				top: offsetTopLeft.top,
				left: offsetTopLeft.left + jQuery(this).width()
			};
			// Gets bottom left position of element 
			let offsetBottomLeft  = {
				top: offsetTopLeft.top + jQuery(this).height(),
				left: offsetTopLeft.left
			};
			// Gets bottom right position of element 
			let offsetBottomRight = {
				top: offsetTopLeft.top + jQuery(this).height(),
				left: offsetTopLeft.left + jQuery(this).width()
			};

			// Check if element is in current viewing window based on position relative to document
			// If element is visible or hidden trigger custom event to perform desired action
			if (isPointVisible(offsetTopLeft) || isPointVisible(offsetTopRight) || isPointVisible(offsetBottomLeft ) || isPointVisible(offsetBottomRight)) {
				if (jQuery(this).is(':visible')) {
					if (jQuery.inArray(i, isVisible) === -1) {
						jQuery(this).trigger('visible');
					}
					tempVisible.push(i);
				}
			} else {
				if (jQuery(this).is(':visible')) {
					if (jQuery.inArray(i, hiddenElements) === -1) {
						jQuery(this).trigger('hidden');
					}
					tempHidden.push(i);
				}
			}
		});

		//Remove element that is no longer visible 
		isVisible = tempVisible.slice();
		hiddenElements = tempHidden.slice();
	}

	// Checks whether the point is within the visible area of the browser window scroll position
	// It means the element should be visible 
	let isPointVisible = function (point) {
		if (point.left > jQuery(document).scrollLeft()
			&& point.left < jQuery(document).scrollLeft() + jQuery(window).width()
			&& point.top > jQuery(document).scrollTop()
			&& point.top < jQuery(document).scrollTop() + jQuery(window).height()
		) {
			return true;
		}
		return false;
	}

	//Run check for visibility on interval
	window.setInterval(function () {
		runCheck();
	}, 200);
}